
class Person{
    constructor(name){
        this.name = name;

    }

    sayHi(){
        return `Hello, my name is ${this.name}`;
    }
}

class SuperPerson extends Person{
    constructor(name, catchPhrase){
        super(name);
        this.phrase = catchPhrase;
    }

    sayPhrase(){
        return this.phrase;
    }

    sayBye(){
        return `My name is ${this.name}, good day.`
    }

    sayHello(){
        return super.sayHi() + ' I\'m super now';
    }
}

const mtc = new SuperPerson('Mr. Teacup', "Yo querro t-cups");

console.log('Mr. Teacup:', mtc.sayHi());
console.log('Mr. Teacup:', mtc.sayBye());
console.log('Mr. Teacup:', mtc.sayPhrase());
console.log('Mr. Teacup:', mtc.sayHello());