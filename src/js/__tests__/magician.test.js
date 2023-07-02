import Magician from '../magician.js';

describe('Magician', () => {
  test('should create a mage character with the given name', () => {
    const mage = new Magician('Gandalf');
    expect(mage.name).toBe('Gandalf');
    expect(mage.type).toBe('Magician');
    expect(mage.health).toBe(100);
    expect(mage.level).toBe(1);
    expect(mage.attack).toBe(10);
    expect(mage.defence).toBe(40);
  });
});
