import Bowman from '../bowman.js';

describe('Bowman', () => {
  test('should create a bowman character with the given name', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });
});
