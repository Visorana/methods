import Bowman from '../bowman.js';

describe('Bowman', () => {
  test('should create a bowman character with the given name', () => {
    const bowman = new Bowman('Legolas');
    const correct = {
      name: 'Legolas', type: 'Bowman', level: 1, health: 100, defence: 25, attack: 25
    };
    expect(bowman).toEqual(correct);
  });
});
