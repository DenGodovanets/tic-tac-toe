function logic () {
  const $fieldClick = document.querySelector('.fields');
  let isWin = false;
  const $player1 = document.querySelector('.player1');
  const $player2 = document.querySelector('.player2');
  const $reset = document.querySelector('.reset');

  $fieldClick.addEventListener('click', e => {
    if (e.target.innerHTML !== '' || isWin) {
      return;
    }
    e.target.innerHTML = 'X';
    const items = Array.prototype.slice.call($fieldClick.children);
    const randomArr = items.filter(element => element.innerHTML === '');
    const random = Math.ceil(Math.random() * randomArr.length);
    if (randomArr[random]) {
      randomArr[random].innerHTML = 'O';
    } else if (randomArr.length !== 0) {

      randomArr[random - 1].innerHTML = 'O';
    }
    setTimeout(() => winner($fieldClick.children), 0);
  });

  $reset.addEventListener('click', reseting);

  function winner (elements) {
    const moves = Array.prototype.slice.call(elements);
    const results = moves.map(item => item.innerHTML);
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
    winningCombos.forEach(combo => {
      if (results[combo[0]] !== '' && results[combo[1]] !== ''
        && results[combo[2]] !== '' && results[combo[0]] === results[combo[1]]
        && results[combo[1]] === results[combo[2]]) {
        isWin = true;
        moves.forEach((element, index) => {
          if (index === combo[0] || index === combo[1] || index === combo[2]) {
            element.style.backgroundColor = 'rgb(81, 107, 81)';
          }
        });
        if (results[combo[0]] === 'X') {
          setTimeout(() => alert('winX'), 500);
          //alert('winnX');
          //isWin = true;

          $player1.innerHTML++
          ;
        } else {
          setTimeout(() => alert('winO'), 500);
          //alert('winO');
          //isWin = true;
          $player2.innerHTML++
          ;
        }
        
        setTimeout(() => reseting(), 1000);
      } else {
        return false;
      }
    });
  }

  function reseting () {
    const moves = Array.prototype.slice.call($fieldClick.children);
    isWin = false;
    moves.forEach(element => {
      element.style.backgroundColor = 'lightgray';
      element.innerHTML = ''
      ;
    }
    );
  }
}

export default logic;