class Character {
    constructor(name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
    }
  };
  
  class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error(Character ${character.name} already exists in the team);
      }
      this.members.add(character);
    }
  
    addAll(...characters) {
      characters.forEach(character => {
        this.members.add(character);
      });
    }
  
    toArray() {
      return Array.from(this.members);
    }
  };

  module.exports = {
    Character,
    Team
  };
  
//////
  class ErrorRepository {
    constructor() {
      this.errors = new Map();
    }
  
    translate(code) {
      if (this.errors.has(code)) {
        return this.errors.get(code);
      }
      return 'Unknown error';
    }
  
    add(code, message) {
      this.errors.set(code, message);
    }
  }

  module.exports = {
    ErrorRepository
  };
