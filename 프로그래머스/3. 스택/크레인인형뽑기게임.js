function solution(board, moves) {
  let basket = [];
  let result = 0;
  for (let j = 0; j < moves.length; j++) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][moves[j] - 1] !== 0) {
        if (basket[basket.length - 1] === board[i][moves[j] - 1]) {
          basket.pop();
          result += 2;
        } else {
          basket.push(board[i][moves[j] - 1]);
        }

        board[i][moves[j] - 1] = 0;
        break;
      }
    }
  }

  return result;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
