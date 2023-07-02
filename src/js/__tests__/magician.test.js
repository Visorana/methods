import Magician from '../magician.js';

describe('Magician', () => {
  test('should create a mage character with the given name', () => {
    const magician = new Magician('Gandalf');
    const correct = {
      name: 'Gandalf', type: 'Magician', level: 1, health: 100, defence: 40, attack: 10
    };
    expect(magician).toEqual(correct);
  });
});
