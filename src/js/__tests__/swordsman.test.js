import Swordsman from '../swordsman.js';

describe('Swordsman', () => {
  test('should create a swordsman character with the given name', () => {
    const swordsman = new Swordsman('Arthur');
    const correct = {
      name: 'Arthur', type: 'Swordsman', level: 1, health: 100, defence: 10, attack: 40
    };
    expect(swordsman).toEqual(correct);
  });
});
