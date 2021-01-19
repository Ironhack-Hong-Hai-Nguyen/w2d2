// const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// let player1 = {
//     name: 'Felix',
//     color: 'red',
//     position: 0,
//     cash: 1000,
//     move: function () {
//         console.log('move');
//         dice = 1 + Math.floor(6 * Math.random());
//         this.position = (this.position + dice) % squares.length;
//         this.cash += squares[this.position];
//         if (this.cash < 0) {
//             console.log(`game over for ${this.name}`);
//         }
//     },
//     displayInfo: function () {
//         console.log(`${this.name} is at position ${this.position}`);
//     }
// }

// let player2 = {
//     name: 'Anna',
//     color: 'blue',
//     position: 0,
//     cash: 1000,
//     move: function () {
//         console.log('move');
//         dice = 1 + Math.floor(6 * Math.random());
//         this.position = (this.position + dice) % squares.length;
//         this.cash += squares[this.position];
//         if (this.cash < 0) {
//             console.log(`game over for ${this.name}`);
//         }
//     },
//     displayInfo: function () {
//         console.log(`${this.name} is at position ${this.position}`);
//     }
// }

// let dice;

// // roll the dice
// dice = 1 + Math.floor(6 * Math.random());

// // player1.position = player1.position + dice;
// // if ((player1.position + dice) > 15) {
// //     player1.position = player1.position + dice - squares.length;
// // } else {
// //     player1.position += dice
// // }

// // player 1 turn
// // move the player
// player1.position = (player1.position + dice) % squares.length;
// // update the cash
// player1.cash += squares[player1.position];
// if (player1.cash < 0) {
//     console.log(`Game over for ${player1.name}`);
// }
// // display info
// // console.log(player1);
// player1.move();
// player1.displayInfo();

class Player {
    // this method get's called when we call 'new'
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.position = 0;
        this.cash = 1000;
    }
    move() {
        let dice = 1 + Math.floor(6 * Math.random());
        this.position = (this.position + dice) % squares.length;
        this.cash += squares[this.position];
        if (this.cash < 0) {
            console.log(`Game over for ${this.name}.`);
        }
    }
    displayInfo() {
        console.log(`${this.name} is at position ${this.position}`);
    }
}

// creating an object from a class with the 'new' keyword is called instantiation
// the object created from a class is called an instance of that class

let player1 = new Player('Felix', 'blue');
let player2 = new Player('Anna', 'blue');
// player1.address = 'berlin';
// console.log(player2);
// console.log(player1);
// player2.displayInfo();


// Inheritance 

// class Cat {
//     constructor(name, color, sound, numberOfLives) {
//         this.name = name;
//         this.color = color;
//         this.sound = sound;
//         this.numberOfLives = numberOfLives;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class Bird {
//     constructor(name, color, sound) {
//         this.name = name;
//         this.color = color;
//         this.sound = sound;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
//     fly() {
//         console.log('i am flying');
//     }
// }

class Animal {
    constructor(name, color, sound) {
        this.name = name;
        this.color = color;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}


// the class cat now inherits the properties and methods from the base class
class Cat extends Animal {
    constructor(name, color, sound, numberOfLives) {
        super(name, color, sound)
        this.numberOfLives = numberOfLives;
    }
    // if we define this method also here we are overwriting it - that definition is now
    // used if we call makeSound() on a cat
    makeSound() {
        console.log(this.sound + '!!!!!');
    }
}


class Bird extends Animal {
    constructor(name, color, sound) {
        super(name, color, sound);
    }
    fly() {
        console.log('i am flying');
    }
}

const kitten = new Cat('Kitty', 'black', 'meow', 7);
console.log(kitten.makeSound());
const bird = new Bird('pety', 'yellow', 'peeeep');
console.log(bird.makeSound());