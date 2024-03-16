const getPokemonBtn = document.querySelector("#getPokemon")

const showRegion = () => {
  axois.get("http://localhost:4000/api/information/")
    .then(res => {
        const data = res.data
        alert(data)
    });
};
 
getPokemonBtn.addEventListener('click', showRegion)