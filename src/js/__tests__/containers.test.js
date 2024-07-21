const { Character, Team } = require('./containers.js'); 

describe('Team', () => {
  let team;
  let character1, character2, character3;

  beforeEach(() => {
    team = new Team();
    character1 = new Character('Character 1', 100, 10);
    character2 = new Character('Character 2', 80, 12);
    character3 = new Character('Character 3', 90, 15);
  });

  test('should add a character to the team', () => {
    team.add(character1);
    expect(team.members.size).toBe(1);
    expect(team.members.has(character1)).toBe(true);
  });

  test('should throw an error if trying to add an existing character', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrowError(Character ${character1.name} already exists in the team);
  });

  test('should add multiple characters to the team', () => {
    team.addAll(character1, character2, character3);
    expect(team.members.size).toBe(3);
    expect(team.members.has(character1)).toBe(true);
    expect(team.members.has(character2)).toBe(true);
    expect(team.members.has(character3)).toBe(true);
  });

  test('should not add duplicate characters to the team', () => {
    team.addAll(character1, character2, character1, character3);
    expect(team.members.size).toBe(3);
  });

  test('should convert the Set to an array', () => {
    team.addAll(character1, character2, character3);
    const teamArray = team.toArray();
    expect(teamArray.length).toBe(3);
    expect(teamArray[0].name).toBe('Character 1');
    expect(teamArray[1].name).toBe('Character 2');
    expect(teamArray[2].name).toBe('Character 3');
  });
});

//////
const { ErrorRepository } = require('./containers.js'); 

describe('ErrorRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new ErrorRepository();
  });

  test('should return "Unknown error" for unknown code', () => {
    expect(repository.translate(1)).toBe('Unknown error');
  });

  test('should return correct message for known code', () => {
    repository.add(1, 'Error 1');
    expect(repository.translate(1)).toBe('Error 1');
  });

  test('should return correct message for another known code', () => {
    repository.add(2, 'Error 2');
    expect(repository.translate(2)).toBe('Error 2');
  });
});