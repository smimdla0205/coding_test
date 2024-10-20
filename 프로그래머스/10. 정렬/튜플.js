function solution(s) {
    let change = s.replace(/{/g, "[").replace(/}/g, "]");
    let array = JSON.parse(change).sort((a, b) => a.length - b.length);
    let result = [];
    result.push(array[0][0]);

    for (let i = 1; i < array.length; i++) {
        let sum = array[i].filter((v) => !result.includes(v));
        result.push(sum[0]);
    }
    return result;
}

console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
