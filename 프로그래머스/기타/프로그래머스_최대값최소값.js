function solution(s) {
    let arr = s.split(' ');
    let arr_list = arr.map((a) => Number(a));

    let min = Math.min(...arr_list);
    let max = Math.max(...arr_list);
    let answer = `${min} ${max}`;
    return answer;
}

console.log(solution('1 2 3 4'));
