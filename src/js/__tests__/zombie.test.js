import Zombie from '../zombie';

describe('Zombie', () => {
  test('should create a zombie character with the given name', () => {
    const zombie = new Zombie('Bob');
    const correct = {
      name: 'Bob', type: 'Zombie', level: 1, health: 100, defence: 10, attack: 40
    };
    expect(zombie).toEqual(correct);
  });
});
