import Character from '../character.js';

describe('Character', () => {
  it('should create a character with the given name and type', () => {
    const character = new Character('John', 'Bowman');
    const correct = {
      name: 'John', type: 'Bowman', level: 1, health: 100
    };
    expect(character).toEqual(correct);
  });

  it('should throw an error when name is invalid', () => {
    expect(() => new Character('', 'Bowman')).toThrow(Error);
    expect(() => new Character('A', 'Bowman')).toThrow(Error);
    expect(() => new Character(123, 'Bowman')).toThrow(Error);
  });

  it('should throw an error when type is invalid', () => {
    expect(() => new Character('John', 'InvalidType')).toThrow(Error);
    expect(() => new Character('John', 123)).toThrow(Error);
  });
});
