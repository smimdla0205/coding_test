function solution(numbers) {
    const sortedNum = numbers.map(String).sort((a, b) => b + a - (a + b));
    const result = sortedNum.join("");
    return result[0] === '0' ? '0' : result;
}

console.log(solution([3, 30, 34, 5, 9]));
