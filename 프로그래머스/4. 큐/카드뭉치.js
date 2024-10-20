function solution(cards1, cards2, goal) {
    let goalCopy = [...goal];

    for (let i = 0; i < goal.length; i += 1) {
        const word = goal[i];
        if (cards1[0] === word) {
            cards1.shift();
            goalCopy.shift();
        } else if (cards2[0] === word) {
            cards2.shift();
            goalCopy.shift();
        } else {
            return 'No';
        }
    }
    return goalCopy.length === 0 ? 'Yes' : 'No';
}

console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water']));
