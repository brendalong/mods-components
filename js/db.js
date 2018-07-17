getPokemon = (whichOne) => {
    return pokemon[whichOne];
}

setPokemon = (pokemonObj) => {
    const dbObjToString = JSON.stringify(pokemonObj);
    localStorage.setItem('mods-pokemon', dbObjToString);
}

let makePokemonObj = (name, thumbnail, copy, link) => {
    // const newPokemon = Object.create({}, {
    //     name: {
    //         value: name,
    //     },
    //     thumbnail: {
    //         value: thumbnail,
    //     },
    //     copy: {
    //         value: copy,
    //     },
        
    //     link: {
    //         value: link,
    //     }
    // });
    const newPokemon = {
        name: name,
        thumbnail: thumbnail,
        copy: copy,
        link: link,
        }
    return newPokemon
}


//need to improve
//function that adds to db and then
//make function that adds a visit to the db

  populateUser = () => {
    let userObj = {
        totalVisits: 1,
    }
    const dbObjToString = JSON.stringify(userObj);
    localStorage.setItem('pokemon-user', dbObjToString);
  }

  getDbUser = () =>{
    const db = localStorage.getItem('pokemon-user');
    //parse to js object
    let parseDB = JSON.parse(db);
    let totalVisits = parseDB.totalVisits++;
    console.log("You have visited this page:", totalVisits);
  }

  //test if the data already exists
if(!localStorage.getItem('pokemon-user')) {
    console.log("lets set some data");
    populateUser();
  }else {
    console.log("get user");
    getDbUser();
  }