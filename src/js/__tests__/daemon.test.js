import Daemon from '../daemon.js';

describe('Daemon', () => {
  test('should create a demon character with the given name', () => {
    const demon = new Daemon('Lucifer');
    expect(demon.name).toBe('Lucifer');
    expect(demon.type).toBe('Daemon');
    expect(demon.health).toBe(100);
    expect(demon.level).toBe(1);
    expect(demon.attack).toBe(10);
    expect(demon.defence).toBe(40);
  });
});
