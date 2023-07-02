import Undead from '../undead';

describe('Undead', () => {
  test('should create an undead character with the given name', () => {
    const undead = new Undead('John');
    const correct = {
      name: 'John', type: 'Undead', level: 1, health: 100, defence: 25, attack: 25
    };
    expect(undead).toEqual(correct);
  });
});
