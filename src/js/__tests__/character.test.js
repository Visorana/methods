import {
  Character, Bowman, Swordsman, Mage, Demon, Undead, Zombie,
} from '../characters';

describe('Character', () => {
  it('should create a character with the given name and type', () => {
    const character = new Character('John', 'Archer');
    expect(character.name).toBe('John');
    expect(character.type).toBe('Archer');
    expect(character.health).toBe(100);
    expect(character.level).toBe(1);
  });

  it('should throw an error when name is invalid', () => {
    expect(() => new Character('', 'Archer')).toThrow(Error);
    expect(() => new Character('A', 'Archer')).toThrow(Error);
    expect(() => new Character(123, 'Archer')).toThrow(Error);
  });

  it('should throw an error when type is invalid', () => {
    expect(() => new Character('John', 'InvalidType')).toThrow(Error);
    expect(() => new Character('John', 123)).toThrow(Error);
  });
});

describe('Bowman', () => {
  test('should create a bowman character with the given name', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Archer');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.attack).toBe(25);
    expect(bowman.protection).toBe(25);
  });
});

describe('Swordsman', () => {
  test('should create a swordsman character with the given name', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.name).toBe('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.attack).toBe(40);
    expect(swordsman.protection).toBe(10);
  });
});

describe('Mage', () => {
  test('should create a mage character with the given name', () => {
    const mage = new Mage('Gandalf');
    expect(mage.name).toBe('Gandalf');
    expect(mage.type).toBe('Mage');
    expect(mage.health).toBe(100);
    expect(mage.level).toBe(1);
    expect(mage.attack).toBe(10);
    expect(mage.protection).toBe(40);
  });
});

describe('Demon', () => {
  test('should create a demon character with the given name', () => {
    const demon = new Demon('Lucifer');
    expect(demon.name).toBe('Lucifer');
    expect(demon.type).toBe('Demon');
    expect(demon.health).toBe(100);
    expect(demon.level).toBe(1);
    expect(demon.attack).toBe(10);
    expect(demon.protection).toBe(40);
  });
});

describe('Undead', () => {
  test('should create an undead character with the given name', () => {
    const undead = new Undead('Zombie');
    expect(undead.name).toBe('Zombie');
    expect(undead.type).toBe('Undead');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.attack).toBe(25);
    expect(undead.protection).toBe(25);
  });
});

describe('Zombie', () => {
  test('should create a zombie character with the given name', () => {
    const zombie = new Zombie('Bob');
    expect(zombie.name).toBe('Bob');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.attack).toBe(40);
    expect(zombie.protection).toBe(10);
  });
});

describe('Bowman', () => {
  let bowman;

  beforeEach(() => {
    bowman = new Bowman('Legolas');
  });

  test('should increase level by 1, and increase attack and defense by 20% when calling levelUp method', () => {
    bowman.levelUp();
    expect(bowman.level).toBe(2);
    expect(bowman.attack).toBe(30);
    expect(bowman.protection).toBe(30);
  });

  test('should reset health to 100 when calling levelUp method', () => {
    bowman.health = 50;
    bowman.levelUp();
    expect(bowman.health).toBe(100);
  });

  test('should throw an error when trying to level up a deceased character', () => {
    bowman.health = 0;
    expect(() => bowman.levelUp()).toThrow(Error);
  });

  test('should reduce character health based on damage taken', () => {
    bowman.damage(20);
    expect(bowman.health).toBe(85);
  });

  test('should not reduce health below 0 when calling damage method', () => {
    bowman.damage(150);
    expect(bowman.health).toBe(0);
  });

  test('should not calculate damage for a deceased character', () => {
    bowman.health = 0;
    bowman.damage(50);
    expect(bowman.health).toBe(0);
  });
});