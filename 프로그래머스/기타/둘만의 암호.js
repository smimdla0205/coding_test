function fail(s, skip, index) {
  let alphabetArray = [..."abcdefghijklmnopqrstuvwxyz"];
  let sArray = [...s];
  let skipArray = [...skip];
  let passwording = [];
  let num = 0;
  let result = [];

  for (let s = 0; s < sArray.length; s++) {
    for (let i = 0; i < alphabetArray.length; i++) {
      if (sArray[s] === alphabetArray[i]) {
        console.log(i);
        passwording = alphabetArray.slice(i + 1, i + 1 + index);

        for (let j = 0; j < skipArray.length; j++) {
          for (let k = 0; k < passwording.length; k++) {
            if (skipArray[j] === passwording[k]) {
              num += 1;
            }
          }
        }
        num = i + index + num;
        if (num >= 26) {
          num = num - 26;
        }
      }
    }
    result.push(alphabetArray[num]);
    num = 0;
  }
  return result.join("");
}

function solution(s, skip, index) {
  let alphabetArray = [..."abcdefghijklmnopqrstuvwxyz"];
  let skipArray = [...skip];
  let result = [];

  for (let sChar of s) {
    let currentIndex = alphabetArray.indexOf(sChar);

    let shiftCount = 0;

    while (shiftCount < index) {
      currentIndex = (currentIndex + 1) % 26;
      if (!skipArray.includes(alphabetArray[currentIndex])) {
        shiftCount++;
      }
    }

    result.push(alphabetArray[currentIndex]);
  }

  return result.join("");
}

console.log(solution("aukks", "wbqd", 5));
