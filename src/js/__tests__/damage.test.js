import Bowman from '../bowman.js';

describe('Bowman', () => {
  let bowman;

  beforeEach(() => {
    bowman = new Bowman('Legolas');
  });

  test('should reduce character health based on damage taken', () => {
    bowman.damage(20);
    expect(bowman.health).toBe(85);
  });

  test('should not reduce health below 0 when calling damage method', () => {
    bowman.damage(150);
    expect(bowman.health).toBe(0);
  });

  test('should not calculate damage for a deceased character', () => {
    bowman.health = 0;
    bowman.damage(50);
    expect(bowman.health).toBe(0);
  });
});
