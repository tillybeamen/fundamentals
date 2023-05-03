class Ninja {
    constructor(name, health) {
        this.speed = 3;
        this.strength = 3;
        this.name = name;
        this.health = health;
    }
    sayName() {
        console.log(`The ninja's name is ${this.name}`)
    }
    showStats() {
        console.log(`The ninja's name is ${this.name}. 
        The ninja's strength is ${this.strength}. 
        The ninja's speed is ${this.speed}. 
        The ninja's health is ${this.health}. `)
    }
    drinkSake() {
        this.health += 10;
    }
}