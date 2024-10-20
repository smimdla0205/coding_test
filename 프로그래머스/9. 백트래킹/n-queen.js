function solution(n) {
    let answer = 0;
    const NOT_Q = 100;
    const arr = Array(n).fill(NOT_Q);

    const isAvailable = (arr, row, col) => {
        if (arr[col] !== NOT_Q) return false;
        for (let i = 0; i < arr.length; i++) {
            if (Math.abs((row - arr[i]) / (col - i)) === 1) {
                return false;
            }
        }
        return true;
    };
    //

    const check = (n, row, arr) => {
        if (row === n) {
            answer += 1;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isAvailable(arr, row, col)) {
                arr[col] = row;
                check(n, row + 1, arr);
                arr[col] = NOT_Q; // 백트레킹
            }
        }
    };

    check(n, 0, arr);

    return answer;
}

console.log(solution(5));
