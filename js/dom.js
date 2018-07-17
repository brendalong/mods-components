let showItems = (pokeData) => {
	// console.log("showItems", pokeData);
	let pokeDisplay = document.getElementById("poke-display");

	pokeData.forEach( (pokemon) => {
		let pokeBlock = buildPokemon(pokemon);
		pokeDisplay.innerHTML += pokeBlock;
	});
}

let buildPokemon = (pokemon) => {
    //building a string to create the visual display
    //notice commas - define many with one let
	let block = `<div class="col-md">`,
		// wrapper = `<section class="block-wrapper" style="border: 2px solid #000000; background-color:#${pokemonColorHex}">`,
		// title = `<h3>Name: ${pokemon.LegoName}</h3>`,
		// years = `<div class="block-years">Manufactured ${pokemon.YearFrom} - ${pokemon.YearTo}</div>`;
		// // image = `<div class="card-img" style="background-image: url('images/${car.image}')"></div>`,
		// let link = pokemon.ColorstreamLinkImage;
		// if (link){
		// 	 block += `<a href="${link}">${wrapper + title + years}</section></a>`;
		// }else{
		// 	block += `${wrapper + title + years}</section>`;
        // }
        
        card = `<div class="card" style="width: 18rem;">`,
        img = `<img class="card-img-top" src="${pokemon.ThumbnailImage}" alt="${pokemon.name}">`,
        content = `<div class="card-body">
                        <h4 class="card-title">${pokemon.name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="https://www.pokemon.com/us/pokedex/${pokemon.name}" class="btn btn-primary" target="_blank">Details: ${pokemon.name}</a>
                    </div>
                </div>`
    block += `${card + img + content}</div>`;
  	return block;
}