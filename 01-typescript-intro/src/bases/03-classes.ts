export class Pokemon {
    /* public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;

    } */

    // Otra forma de usar una clase es de la siguiente forma
    constructor(
        //Con la propiedad readonly quiere decir que no podemos cambiar el valor más adelante, es decir actua como un const
        public readonly id: number,
        public name: string,
    ) { }

    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.jpg`
    }

    screem() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name} ${this.name}`);
    }
}

export const charmander = new Pokemon(1, 'charmander');

charmander.screem();
charmander.speak();