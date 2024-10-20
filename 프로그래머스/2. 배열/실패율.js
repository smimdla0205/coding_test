function fail(stage, stages) {
    let array = stages;
    let stageFail = 0;

    for (let j = 0; j < array.length; j++) {
        if (stage === array[j]) {
            stageFail += 1;
            array.splice(j, 1); // 특정값 제거
            j--;
        }
    }
    return stageFail;
}

function solution(N, stages) {
    const answer = Array.from({ length: N }, function (_, i) {
        let remain = stages.length;
        if (i === 0) {
            return fail(i + 1, stages) / stages.length;
        } else {
            remain -= fail(i, stages); // 다
            console.log(remain); //
            return fail(i + 1, stages) / remain;
        }
    });

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(fail(1, [2, 1, 2, 6, 2, 4, 3, 3]));
