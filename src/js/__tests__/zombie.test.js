import Zombie from '../zombie';

describe('Zombie', () => {
  test('should create a zombie character with the given name', () => {
    const zombie = new Zombie('Bob');
    expect(zombie.name).toBe('Bob');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
