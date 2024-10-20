function exponentFind(n, Max) {
    let num = n;
    let result = 0;
    for (let i = 0; i < Max; i++) {
        if (num % 2 === 0) {
            num = num / 2;
            result++;
        } else {
            break;
        }
    }
    return result;
}

function explanation(n, a, b, max) {
    let m = max;
    let num = n;
    if (n === 2) {
        return 1;
    }
    if (a <= n / 2 && b <= n / 2) {
        m = max - 1;
        num = n / 2;
        return explanation(num, a, b, m);
    } else if (a > n / 2 && b > n / 2) {
        m = max - 1;
        num = n / 2;
        return explanation(num, a - num, b - num, m);
    } else {
        return max;
    }
}

function solution(n, a, b) {
    let maxGame = exponentFind(n, 20);
    let result = explanation(n, a, b, maxGame);

    return result;
}

console.log(explanation(8, 5, 8, 3));

//12 34 56 78 910 1112
/*
 let bracket = [];
    let count = 0;
    let sample = [];
    for (let i = 1; i < n + 1; i++) {
        sample.push(i);
        count++;
        if (count === 2) {
            bracket.push(sample);
            count = 0;
            sample = [];
        }
    }
*/
