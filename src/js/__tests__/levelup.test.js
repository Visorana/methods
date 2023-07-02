import Bowman from '../bowman.js';

describe('Bowman', () => {
  let bowman;

  beforeEach(() => {
    bowman = new Bowman('Legolas');
  });

  test('should increase level by 1, reset health to 100 and increase attack and defense by 20% when calling levelUp method', () => {
    bowman.levelUp();
    const correct = {
      name: 'Legolas', type: 'Bowman', level: 2, health: 100, defence: 30, attack: 30
    }
    expect(bowman).toEqual(correct);
  });

  test('should throw an error when trying to level up a deceased character', () => {
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow(Error);
  });
});
