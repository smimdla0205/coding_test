function setWord(words) {
    let seen = new Map(); // 새로운 Map 객체 생성

    for (let i = 0; i < words.length; i++) {
        if (seen.has(words[i])) {
            // 이미 이 값이 seen에 있는지 확인
            return i; // 중복이 발견되면 값과 인덱스 반환
        }
        seen.set(words[i], i); // 값과 인덱스를 Map에 추가
    }

    return false; // 중복된 값이 없으면 null 반환
}

function errorWord(words) {
    let firstWord = '';
    let endWord = words[0].slice(-1);

    for (let i = 1; i < words.length; i++) {
        firstWord = words[i].slice(0, 1);
        if (endWord === firstWord) {
            endWord = words[i].slice(-1);
        } else {
            return i;
        }
    }
    return words.length - 1;
}

function solution(n, words) {
    const [errorNum, errorSecond] =
        errorWord(words) + 1 === words.length
            ? [0, 0]
            : (errorWord(words) + 1) % n === 0
            ? [n, Math.ceil((errorWord(words) + 1) / n)]
            : [(errorWord(words) + 1) % n, Math.ceil((errorWord(words) + 1) / n)];

    const [setNum, setSecond] =
        (setWord(words) + 1) % n === 0
            ? [n, (setWord(words) + 1) / n]
            : [(setWord(words) + 1) % n, Math.ceil((setWord(words) + 1) / n)];

    const result = setWord(words)
        ? errorWord(words) >= setWord(words)
            ? [setNum, setSecond]
            : [errorNum, errorSecond]
        : [errorNum, errorSecond];

    return result;
}
