function solution(numbers) {
    let answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
        }
    }
    let set = [...new Set(answer)];
    let sum = set.sort((a, b) => a - b);
    return sum;
}
