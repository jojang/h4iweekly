function getAbilities() {
    const inputVal= document.getElementById('pokemon').value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputVal}`).then((response) => response.json()).then((data) => {
        var ability_list = [];
        for (var i = 0; i<data.abilities.length;i++){
            ability_list.push(data.abilities[i].ability.name);
        }
        document.querySelector('.pokemonContainer').innerHTML = `
        <div class="pokemonInfo">
            <h2>${data.name}</h2>
            <h3>${ability_list} </h3>
        </div>
        `;

        console.log(data)
    }).catch((err) => {
        console.log('Pokemon not found', err);
    });
}