let pokemones = [
 {
 nombre: 'Pikachu',
 tipo: 'Electrico'
 },
 {
 nombre: 'Charmander',
 tipo: "Fuego"
 },
 {
 nombre: 'Bulbasaur',
 tipo: 'Planta'
 },
 {
 nombre: 'Squirtle',
 tipo: 'Agua'
 },
 {
 nombre: 'Charmeleon',
 tipo: "Fuego"
 },
 {
 nombre: 'Weedle',
 tipo: 'bicho'
 },
 {
 nombre: 'Charizard',
 tipo: "Fuego"
 }
];

let fuego = pokemones.filter(pokemones => pokemones.tipo === "Fuego");

console.log(fuego);




