import { Pokemon } from './Pokemon'

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon('Oddish', 'grass', 'water');

// Which pokemon should Ash use?

// Implement the following `chooseEffective` function which will choose the most effective pokemon for Ash
console.log(`I choose you!, ${chooseEffective(pokemonOfAsh, wildPokemon)}`);

function chooseEffective(collection:any,newPoke:any){
    //read initfunc as pokemonOfAsh
    //look for effectiveAgainst type of the new Pokemon class
    //newPokemon is wildPokemon new instance of Pokemon class
    for (let i=0; i<=collection.length-1; i++){
        if (collection[i].effectiveAgainst == newPoke.type){
            return collection[i].name;
        }
    }
}

function initializePokemon(): Pokemon[] {
    return [
        new Pokemon('Bulbasaur', 'grass', 'water'),
        new Pokemon('Pikachu', 'electric', 'water'),
        new Pokemon('Charizard', 'fire', 'grass'),
        new Pokemon('Pidgeot', 'flying', 'fighting'),
        new Pokemon('Kingler', 'water', 'fire')
    ];
}