import Undead from '../undead';

describe('Undead', () => {
  test('should create an undead character with the given name', () => {
    const undead = new Undead('Zombie');
    expect(undead.name).toBe('Zombie');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });
});
