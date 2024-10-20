function solution(progresses, speeds) {
    let restProgresses = [];
    let schedule = [];
    let completeDay = 0;
    let answer = [];
    let previousIndex = 0;
    for (let i = 0; i < progresses.length; i++) {
        restProgresses.push(100 - progresses[i]);
    }

    for (let i = 0; i < progresses.length; i++) {
        schedule.push(Math.ceil(restProgresses[i] / speeds[i]));
    }
    for (let i = 0; i < schedule.length; i++) {
        completeDay = schedule[0];
        if (completeDay < schedule[i]) {
            answer.push(i - previousIndex);
            previousIndex = i;
            completeDay = schedule[i];
        }
    }

    let NumAllPrograms = answer.reduce((acc, curr) => acc + curr, 0);

    if (progresses.length !== NumAllPrograms) {
        answer.push(progresses.length - NumAllPrograms);
    }

    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

// 틀림... 이유?
