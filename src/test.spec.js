import {checkWinner} from './maintest.js';


describe('areWinner::', () => {
  it('Should return string are winner or noboby win', () => {
    expect(checkWinner(['X', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'O'])).toEqual('Are winner');
  });

  it('Should return string are winner or noboby win', () => {
    expect(checkWinner(['X', '0', 'X', '', 'X', 'O', 'O', 'X', 'O'])).toEqual('not winner');
  });

  it('Should return string are winner or noboby win', () => {
    expect(checkWinner(['X', '', 'O', '', 'X', 'O', '', '', ''])).toEqual('not winner');
  });

  it('Should return string are winner or noboby win', () => {
    expect(checkWinner(['X', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'O'])).toEqual('Are winner');
  });
});
