const personagemSelect = document.getElementById("personagem-select");
const personagemSelect2 = document.getElementById("personagem-select2");
let nomePersonagem = document.getElementById("nomePerson1");
let especificacaoPersonagem = document.getElementById("espPerson1");
let nomePersonagem2 = document.getElementById("nomePerson2");
let especificacaoPersonagem2 = document.getElementById("espPerson2");
var ganhador = document.getElementById("winner");
var listPerson;  

function httpGetAsync(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            callback(xhr.responseText);
        }
    }
    xhr.open('GET', url, true);
    xhr.send(null);
}

httpGetAsync('https://akabab.github.io/superhero-api/api/all.json', json => {

    const personagens = JSON.parse(json);


    listPerson = personagens.map(p => { 
        return {nome: p.name,
                id: p.id,
                media: (p.powerstats.intelligence
                     + p.powerstats.strength
                     + p.powerstats.speed
                     + p.powerstats.durability
                     + p.powerstats.power
                     + p.powerstats.combat)/6
        }
    })

    for (var i = 0; i < listPerson.length; i++) {
        // Popular SELECT com JSON.
        personagemSelect.innerHTML = personagemSelect.innerHTML +
        '<option value="">'+ listPerson[i].id + ' - ' + listPerson[i].nome + '</option>';
        }


     for (var i = 0; i < listPerson.length; i++) {
            personagemSelect2.innerHTML = personagemSelect2.innerHTML +
            '<option value="">'+ listPerson[i].id + ' - ' + listPerson[i].nome + '</option>';
        }

});

function comparar(){
    var personOne = personagemSelect.selectedIndex;
    var personTwo = personagemSelect2.selectedIndex;
    let aux1;
    let aux2;

        aux1 = listPerson[personOne + 1].media
        aux2 = listPerson[personTwo + 1].media

        aux1 = aux1.toFixed(2);
        aux2 = aux2.toFixed(2);

    if(aux1 > aux2){
        ganhador.innerHTML = (listPerson[personOne].nome);
    }else{
        ganhador.innerHTML = (listPerson[personTwo].nome);
    }

    nomePersonagem.innerHTML = (listPerson[personOne].nome);
    especificacaoPersonagem.innerHTML = ('Média de habilidades: ' +aux1);
    nomePersonagem2.innerHTML = (listPerson[personTwo].nome);
    especificacaoPersonagem2.innerHTML = ('Média de habilidades: ' +aux2);
}






