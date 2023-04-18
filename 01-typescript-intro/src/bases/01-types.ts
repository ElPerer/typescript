export let name: string | boolean = 'Pedro';
export const age = 35;

name = true;

export const templateString = `String
multilinea
valor inyectado: ${ name }
valor $ ${ age }`;