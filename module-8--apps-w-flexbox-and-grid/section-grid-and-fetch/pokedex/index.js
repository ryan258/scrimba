/*
    Pokedex
    
    Write an async function 
        that uses fetch() to fetch all 
        Pokemon from pokemon.json
    
    Display all the Pokemon
        ID, English Name, 
        Type(s), 
        Stats: HP/Attack/Defense/Speed
*/

/*
    Pokedex (Challenge)
    
    Write and utilize a 
        displayPokedex(allPokemon) function 
    
    Display the Japanese, Chinese, and French
        name of each Pokemon under its Stats
        each should take up 1/3rd of the row 
*/

async function getAllPokemon() {
  let response = await fetch("pokemon.json");
  let data = await response.json();
  return data;
}

function getPokemonHtml(aPokemon) {
  return `<div class="a-pokemon">
    <div class="a-pokemon-id">${aPokemon.id}</div>
    
    <div class="a-pokemon-name">${aPokemon.name.english}</div>
    <div class="a-pokemon-type">${aPokemon.type.join(" / ")}</div>
    
    <div class="a-pokemon-stat">HP: ${aPokemon.base.HP}</div>
    <div class="a-pokemon-stat">Attack: ${aPokemon.base.Attack}</div>
    <div class="a-pokemon-stat">Defense: ${aPokemon.base.Defense}</div>
    <div class="a-pokemon-stat">Speed: ${aPokemon.base.Speed}</div>

    <div class="a-pokemon-alt-name">${aPokemon.name.japanese}</div>
    <div class="a-pokemon-alt-name">${aPokemon.name.chinese}</div>
    <div class="a-pokemon-alt-name">${aPokemon.name.french}</div>
  </div>`;
}

function displayPokedex(allPokemon) {
  console.log(allPokemon[0]);
  document.body.innerHTML = `<div class="my-pokedex">
      ${allPokemon.map(getPokemonHtml).join("")}
  </div>`;
}

getAllPokemon().then(displayPokedex);

// getAllPokemon().then((allPokemon) => {
//   let samplePokemon = allPokemon[350];
//   console.log(samplePokemon);
//   // document.body.innerHTML = getPokemonHtml(samplePokemon);
//   document.body.innerHTML = `<div class="my-pokedex">
//     ${allPokemon.map((aPokemon) => getPokemonHtml(aPokemon)).join("")}
//   </div>`;
// });
