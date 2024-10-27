function solution(nums) {
  let answer = new Set(nums); // Set을 생성할 때 배열을 직접 전달
  let ball = nums.length / 2;
  return ball > answer.size ? answer.size : ball;
}

console.log(solution([3, 1, 2, 3]));
