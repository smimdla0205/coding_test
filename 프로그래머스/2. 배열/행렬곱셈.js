function solution(arr1, arr2) {
    // arr1의 행 길이와 arr2의 열 길이에 따라 answer 배열 초기화
    let answer = Array.from({ length: arr1.length }, () => Array(arr2[0].length).fill(0));

    // arr1의 행 개수만큼 반복
    for (let i = 0; i < arr1.length; i++) {
        // arr2의 열 개수만큼 반복
        for (let j = 0; j < arr2[0].length; j++) {
            // arr1의 열 개수 또는 arr2의 행 개수만큼 반복
            for (let k = 0; k < arr1[0].length; k++) {
                // 행렬 곱셈의 결과 계산
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}

console.log(
    solution(
        [
            [1, 4],
            [3, 2],
            [4, 1],
        ],
        [
            [3, 3],
            [3, 3],
        ]
    )
);
