function mapsChange(maps) {
  let mapWidth = [];
  let mapsArray = [];
  for (let i = 0; i < maps.length; i++) {
    mapWidth.push(...maps[i]);
    mapsArray.push(mapWidth);
    mapWidth = [];
  }
  return mapsArray;
}

function checkFail(arrayOne, arrayTwo, maps) {
  let mapsArray = mapsChange(maps);

  if (arrayOne[0] === arrayTwo[0]) {
    if (arrayOne[1] < arrayTwo[1]) {
      for (let i = arrayOne[1] + 1; i <= arrayTwo[1]; i++) {
        if (mapsArray[arrayOne[0]][i] === "X") {
          return false;
        }
      }
    } else {
      for (let i = arrayTwo[1]; i <= arrayOne[1]; i++) {
        if (mapsArray[arrayOne[0]][i] === "X") {
          return false;
        }
      }
    }
  } else {
    if (arrayOne[0] < arrayTwo[0]) {
      for (let i = arrayOne[0] + 1; i <= arrayTwo[0]; i++) {
        if (maps[i] === "XXXXX") {
          return false;
        }
      }
    } else {
      for (let i = arrayTwo[0] + 1; i <= arrayOne[0]; i++) {
        if (maps[i] === "XXXXX") {
          return false;
        }
      }
    }
  }
  return true;
}

function minDistance(arrayOne, arrayTwo, maps) {
  let numSort = [arrayOne[0], arrayTwo[0]].sort((a, b) => a - b);
  let minLen = [];
  let mapMinLen = [];
  let mapsArray = mapsChange(maps);
  if (arrayOne[0] === arrayTwo[0]) {
    return Math.abs(arrayOne[1] - arrayTwo[1]);
  } else {
    for (let i = numSort[0] + 1; i < numSort[1]; i++) {
      for (let j = 0; j < maps[i].length; j++) {
        if (mapsArray[i][j] === "O" || mapsArray[i][j] === "E") {
          minLen.push(Math.abs(arrayOne[1] - j));
        }
      }
      minLen.sort((a, b) => a - b);
      mapMinLen.push(minLen[0]);
      minLen = [];
    }
  }
  mapMinLen.sort((a, b) => b - a); // 중복 최대값이두번이면 ? 좀더 생각보기

  return mapMinLen[0] * 2 + Math.abs(arrayOne[0] - arrayTwo[0]) - Math.abs(arrayOne[1] - arrayTwo[1]);
}

function solution(maps) {
  let result = 0;
  let startLocation = [];
  let leverLocation = [];
  let exitLocation = [];

  let mapsArray = mapsChange(maps);

  for (let i = 0; i < mapsArray.length; i++) {
    for (let j = 0; j < mapsArray[i].length; j++) {
      if (mapsArray[i][j] === "S") {
        startLocation.push(i, j);
      } else if (mapsArray[i][j] === "L") {
        leverLocation.push(i, j);
      } else if (mapsArray[i][j] === "E") {
        exitLocation.push(i, j);
      }
    }
  }

  if (checkFail(startLocation, leverLocation, maps)) {
    result += minDistance(startLocation, leverLocation, maps);
    if (checkFail(leverLocation, exitLocation, maps)) {
      result += minDistance(leverLocation, exitLocation, maps);
    } else {
      return -1;
    }
  } else {
    return -1;
  }

  return result;
}

console.log(solution(["SOOOL", "OXXXX", "OOOOO", "OXXXX", "OOOOE"]));
//solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']);

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

// ➊ 이동 가능한 좌표인지 판단하는 함수
function isValidMove(ny, nx, n, m, maps) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== "X";
}

// ➋ 방문한 적이 없으면 큐에 넣고 방문 여부 표시
function appendToQueue(ny, nx, k, time, visited, q) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
  }
}

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from(Array(n), () =>
    Array(m)
      .fill(false)
      .map(() => Array(2).fill(false))
  );

  // ➌ 위, 아래, 왼쪽, 오른쪽 이동 방향
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const q = new Queue();
  let endY = -1;
  let endX = -1;

  // ➍ 시작점과 도착점을 찾아 큐에 넣고 방문 여부 표시
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") {
        // 시작점
        q.push([i, j, 0, 0]);
        visited[i][j][0] = true;
      }
      if (maps[i][j] === "E") {
        // 도착점
        endY = i;
        endX = j;
      }
    }
  }

  while (!q.isEmpty()) {
    const [y, x, k, time] = q.pop(); // ➎ 큐에서 좌표와 이동 횟수를 꺼냄

    // ➏ 도착점에 도달하면 결과 반환
    if (y === endY && x === endX && k === 1) {
      return time;
    }

    // ➐ 네 방향으로 이동
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      // ➑ 이동 가능한 좌표인 때에만 큐에 넣음
      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      // ➒ 다음 이동 지점이 물인 경우
      if (maps[ny][nx] === "L") {
        appendToQueue(ny, nx, 1, time, visited, q);
      } else {
        // ➓ 다음 이동 지점이 물이 아닌 경우
        appendToQueue(ny, nx, k, time, visited, q);
      }
    }
  }

  // ⓫ 도착점에 도달하지 못한 경우
  return -1;
}
