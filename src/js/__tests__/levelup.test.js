import Bowman from '../bowman.js';

describe('Bowman', () => {
  let bowman;

  beforeEach(() => {
    bowman = new Bowman('Legolas');
  });

  test('should increase level by 1, and increase attack and defense by 20% when calling levelUp method', () => {
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30);
    expect(bowman.defence).toBe(30);
  });

  test('should reset health to 100 when calling levelUp method', () => {
    bowman.health = 50;
    bowman.levelUp();
    expect(bowman.health).toBe(100);
  });

  test('should throw an error when trying to level up a deceased character', () => {
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow(Error);
  });
});
