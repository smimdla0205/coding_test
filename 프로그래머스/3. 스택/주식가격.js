function solution(prices) {
    let record = 0;
    let answer = [];
    for (let i = 0; i < prices.length; i++) {
        record = prices[i];
        for (let j = i; j < prices.length; j++) {
            if (record > prices[j]) {
                answer.push(j - i);
                break;
            } else if (j === prices.length - 1) {
                answer.push(prices.length - 1 - i);
            }
        }
    }

    return answer;
}

console.log(solution([1, 2, 3, 2, 3]));
