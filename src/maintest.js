export function checkWinner (results) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let winn = 'not winner';
  winningCombos.forEach(combo => {
    // eslint-disable-next-line max-len
    if (results[combo[0]] !== '' && results[combo[1]] !== '' && results[combo[2]] !== '' && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
      winn = 'Are winner';
    }
  });
  return winn;
}
