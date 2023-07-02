import Daemon from '../daemon.js';

describe('Daemon', () => {
  test('should create a demon character with the given name', () => {
    const daemon = new Daemon('Lucifer')
    const correct = {
      name: 'Lucifer', type: 'Daemon', level: 1, health: 100, defence: 40, attack: 10
    };
    expect(daemon).toEqual(correct);
  });
});
