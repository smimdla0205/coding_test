function solution(s) {
  let sArray = s.split("");
  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] === sArray[i + 1]) {
      sArray.splice(i, 2);
      i = -1;
    }
  }
  if (sArray.length === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(solution("baabaa"));

function solution(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length > 0 && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0 ? 1 : 0;
}
