// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health    
        this.strength = strength
    }
attack() {
    return this.strength
}

receiveDamage(dmg) {

    this.health = this.health - dmg

}

}

// Viking
class Viking extends Soldier { 
    constructor (name, health, strength) {
    super(name, health, strength)
    this.name = name
    this.health = health
    this.strength = strength
    }
receiveDamage(dmg) {

    this.health = this.health - dmg
    if (this.health > 0) {return `${this.name} has received ${dmg} points of damage`}
    if (this.health <= 0) {return `${this.name} has died in act of combat`}
}

battleCry() {

    return `Odin Owns You All!`
}
}


// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength)
        this.health = health
        this.strength = strength
    }
receiveDamage(dmg) {
    this.health = this.health - dmg
    if (this.health > 0) {return  `A Saxon has received ${dmg} points of damage`}
    if (this.health <= 0) {return `A Saxon has died in combat`}
}
}



// War
class War{
    vikingArmy = []
    saxonArmy = []
    

addViking(Viking) {

    this.vikingArmy.push(Viking)
}

addSaxon(Saxon) {

this.saxonArmy.push(Saxon)
}

vikingAttack() {

    let rdmSaxIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let rdmSax = this.saxonArmy[rdmSaxIndex]
    let rdmVikIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let rdmVik = this.vikingArmy[rdmVikIndex]

    let dmgReceived = rdmSax.receiveDamage(rdmVik.attack())

    if (rdmSax.health <= 0) {
        this.saxonArmy.splice(rdmSaxIndex, 1) }

    return dmgReceived

}

saxonAttack() {

    let rdmSaxIndex = Math.floor(Math.random() * this.saxonArmy.length)
    let rdmSax = this.saxonArmy[rdmSaxIndex]
    let rdmVikIndex = Math.floor(Math.random() * this.vikingArmy.length)
    let rdmVik = this.vikingArmy[rdmVikIndex]

    let dmgReceived2 = rdmVik.receiveDamage(rdmSax.attack())

    if (rdmVik.health <= 0) {
        this.vikingArmy.splice(rdmSaxIndex, 1) }

    return dmgReceived2
}

showStatus() {

    return this.saxonArmy.length === 0 ?  `Vikings have won the war of the century!` :
        
    this.vikingArmy.length === 0 ? `Saxons have fought for their lives and survived another day...` :
  
    `Vikings and Saxons are still in the thick of battle.`;
    
}

}

