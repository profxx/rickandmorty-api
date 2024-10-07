const url = "https://rickandmortyapi.com/api/character";
let lista = document.getElementById("lista");

function convertPersonagemToLi(p){
    return `
        <li class="personagem">
                <h3>${p.id} - ${p.name}</h3>
                <div class="conteudo">
                    <div class="info">
                        <p>${p.status}</p>
                        <p>${p.gender}</p>
                        <p>${p.origin.name}</p>
                    </div>
                    <img class="foto" src="${p.image}" alt="Rick">
                </div>
            </li>
    `
}

fetch(url)
    .then((response) => response.json())
    .then((respostaemformatojson) => respostaemformatojson.results)
    .then((listadachaveresults) => lista.innerHTML = listadachaveresults.map(convertPersonagemToLi).join(""))
    .catch((error) => console.log(error));