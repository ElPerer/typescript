export const pokemonIds: number[] = [1,2,3,4,5,6,7];

/* Las interface en TypeScript son para validar la cantidad de propiedades de un objeto y forzar que esas propiedades
tendrán el mismo tipo de dato a las que se definen en la interface misma
Pero con el simbolo de interrogación (?) se puede definir si una propiedad será opcional

Lo que difiere una clase a una interface es que las interface no se pueden instanciar como las clases*/
export interface Pokemon{
    id: number;
    name: string,
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 3
}

export const pokemons: Pokemon[] = [];
pokemons.push(bulbasaur, charmander);
