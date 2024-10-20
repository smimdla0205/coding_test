// 다시다시다시다시

function findMostFrequentValues(arr) {
    let frequencyMap = new Map();

    // 빈도수 계산
    for (let value of arr) {
        if (frequencyMap.has(value)) {
            frequencyMap.set(value, frequencyMap.get(value) + 1);
        } else {
            frequencyMap.set(value, 1);
        }
    }
    // 최대 빈도수 추출
    let maxFrequency = 0;
    let mostFrequentValues = [];

    for (let [key, value] of frequencyMap) {
        if (value > maxFrequency) {
            maxFrequency = value;
            mostFrequentValues = [key];
        } else if (value === maxFrequency) {
            mostFrequentValues.push(key);
        }
    }

    // 가장 많이 등장한 값 중 하나만 선택 (사전순 정렬 후 첫번째 요소) 이부분 틀림
    mostFrequentValues.sort();
    return [mostFrequentValues[0]];
}

function wordCombination(word, wordNum, startIndex = 0, menuArray = [], result = []) {
    if (menuArray.length === wordNum) {
        result.push(menuArray.join(''));
        return;
    }

    for (let i = startIndex; i < word.length; i++) {
        menuArray.push(word[i]);
        wordCombination(word, wordNum, i + 1, menuArray, result);
        menuArray.pop();
    }
    return result;
}

function solution(orders, course) {
    let allCombination = [];
    let result = [];
    let sample = [];

    for (let i = 0; i < course.length; i++) {
        let customer = [];
        for (let j = 0; j < orders.length; j++) {
            customer.push(...[...wordCombination(orders[j], Number(course[i]))]);
        }
        allCombination[i] = [...customer];
        sample.push(findMostFrequentValues(allCombination[i]));
        result.push(...sample[i]);
    }

    return result;
}
console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]));

console.log(wordCombination('ABCFG', 2));
// 실패
