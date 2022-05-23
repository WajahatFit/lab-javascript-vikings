// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength  = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage (damage) {
    damage - this.health;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name,health, strength) {
    super(health, strength)
    this.name = name;
  }
  attack();
  receiveDamage (damage) {
    this.health = this.health - damage;
    if(this.health >= 1){
      return `${this.name} has received ${damage} points of damage`
    }else return `${this.name} has died in act of combat`
  }
  battleCry () {
    return 'Odin Owns You All!'
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    if(this.heath >= 1){
      return `A Saxon has received ${damage} points of damage`
    }else if (this.health <1) {
      return ` A Saxon has died in combat`
    } 
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking() {
    const viking1 = new Viking(Regna, 100, 50);
    viking1.push(this.vikingArmy);
  }
  addSaxon(saxon){
    const saxon1 = new saxon;
    saxon1.push(this.saxonArmy);
  }
  vikingAttack() {
    let saxon = Saxon.Math.random() * saxon;
    
  }
  saxonAttack()
  showStatus()
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
