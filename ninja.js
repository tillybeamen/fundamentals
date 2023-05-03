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
class Sensei extends Ninja{
    constructor(name) {
        super(name, 200);
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log( "The past is history, the future is a mystery, but today is a gift, that is why they call it the present");
        
    }
}
const ninja1 = new Ninja("Tanjiro", 100);
// console.log(ninja1)

const superSensei = new Sensei("Oogway", 200);
// console.log(superSensei);
superSensei.showStats();
// superSensei.drinkSake();
superSensei.speakWisdom();
superSensei.showStats();