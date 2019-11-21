// console.log('hello world');

////////////////////////////

class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    info() {
        console.log('こんにちは');
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}`);
    }
}

class Japanese extends Human {
    constructor(name, age, race){
        super(name, age)
        // this.name = name;
        // this.age = age;
        this.race = race;
    }
    info(){
        console.log('こんにちは');
        console.log(`名前は${this.name}です`);
        console.log(`${this.age}`);
        console.log(`${this.race}`);
    }

}

const human = new Human("aho", 20);
const japanese = new Japanese("aho", 20, "japan");

human.info();
japanese.info();