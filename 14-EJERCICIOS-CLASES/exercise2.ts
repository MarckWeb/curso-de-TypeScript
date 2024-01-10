//En TypeScript, cuando defines una interfaz que una clase implementará, la interfaz especifica la forma de los miembros públicos de la clase (como propiedades y métodos), pero no especifica cómo se deben implementar internamente. En este caso, la interfaz Persons define la forma de la clase, pero no se preocupa por si las propiedades son privadas o públicas, siempre y cuando los métodos de acceso (get y set) sean públicos y tengan la forma correcta.

interface Persons {
    name: string;
    age: number;
}

class Person implements Persons {
    _name: string;
    _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    datesPerson() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }

    adult() {
        console.log(
            (this.age >= 18)
                ? "the person is adult"
                : "the person is not adult"
        )
    };

}

const personOne = new Person("David", 20)
personOne.name = 'Carlos'
personOne.datesPerson()
personOne.adult()