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
                if (mapsArray[arrayOne[0]][i] === 'X') {
                    return false;
                }
            }
        } else {
            for (let i = arrayTwo[1]; i <= arrayOne[1]; i++) {
                if (mapsArray[arrayOne[0]][i] === 'X') {
                    return false;
                }
            }
        }
    } else {
        if (arrayOne[0] < arrayTwo[0]) {
            for (let i = arrayOne[0] + 1; i <= arrayTwo[0]; i++) {
                if (maps[i] === 'XXXXX') {
                    return false;
                }
            }
        } else {
            for (let i = arrayTwo[0] + 1; i <= arrayOne[0]; i++) {
                if (maps[i] === 'XXXXX') {
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
                if (mapsArray[i][j] === 'O' || mapsArray[i][j] === 'E') {
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
            if (mapsArray[i][j] === 'S') {
                startLocation.push(i, j);
            } else if (mapsArray[i][j] === 'L') {
                leverLocation.push(i, j);
            } else if (mapsArray[i][j] === 'E') {
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

console.log(solution(['SOOOL', 'OXXXX', 'OOOOO', 'OXXXX', 'OOOOE']));
//solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']);
