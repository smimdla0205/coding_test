function solution(dirs) {
  let dirsArray = dirs.split("");
  let upDown = [0, 0];
  for (let i = 0; i < dirsArray.length; i++) {
    if (dirsArray[i] === "R") {
      upDown[0] += 1;
    } else if (dirsArray[i] === "L") {
      upDown[0] -= 1;
    } else if (dirsArray[i] === "U") {
      upDown[1] += 1;
    } else if (dirsArray[i] === "D") {
      upDown[1] -= 1;
    }
  }

  return Math.abs(upDown[0]) + Math.abs(upDown[1]);
}
