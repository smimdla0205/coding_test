function star(num) {
    const result = [];
    const starFame = '*' + ' '.repeat(num - 2) + '*';
    const starCenter = ' '.repeat(num - 1) + '*' + ' '.repeat(num - 2) + '*' + ' '.repeat(num - 2) + '*';
    const firstEnd = '*'.repeat(num) + ' '.repeat(2 * num - 3) + '*'.repeat(num);

    result.push(firstEnd);
    for (let i = 1; i < num - 1; i++) {
        const sum = ' '.repeat(i) + starFame + ' '.repeat(2 * (num - i) - 3) + starFame;
        result.push(sum);
    }
    result.push(starCenter);

    for (let i = num - 2; i > 0; i--) {
        const sum = ' '.repeat(i) + starFame + ' '.repeat(2 * (num - i) - 3) + starFame;
        result.push(sum);
    }
    result.push(firstEnd);

    const starPrint = result.join('\n');
    return starPrint;
}

const output = star(12);
console.log(output);
