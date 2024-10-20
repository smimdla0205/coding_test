function solution(answers) {
  function getPattern(arr, length) {
    let result = [];
    for (let i = 0; i < length; i++) {
      result.push(arr[i % arr.length]);
    }
    return result;
  }

  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let onePattern = getPattern(one, 20); // 1번 수포자 규칙으로 20개
  let twoPattern = getPattern(two, 20); // 2번 수포자 규칙으로 20개
  let threePattern = getPattern(three, 20);
  let answer = [0, 0, 0];
  let value = 0;
  let result = [];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === onePattern[i]) {
      answer[0] += 1;
    }
    if (answers[i] === twoPattern[i]) {
      answer[1] += 1;
    }
    if (answers[i] === threePattern[i]) {
      answer[2] += 1;
    }
  }
  for (let i = 0; i < answer.length; i++) {
    if (value <= answer[i]) {
      value = answer[i];
    }
  }
  for (let i = 0; i < answer.length; i++) {
    if (value === answer[i]) {
      result.push(i + 1);
    }
  }
  return result;
}

console.log(solution([1, 3, 2, 4, 2]));
