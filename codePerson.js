///////////CRIAÇÃO_PERSONAGEM///////////
let personagemtxt = document.getElementById('txtPerso')
let forcaPersonagem = document.getElementById('txtForca')
let velocidadePersonagem = document.getElementById('txtVelocidade')
let durabilidadePersonagem = document.getElementById('txtDurabilidade')
let potenciaPesonagem = document.getElementById('txtPotencia')
let combatePersonagem =document.getElementById('txtCombate')
let saveInf = document.getElementById('btnSalvar')
let listaPersonagem = [];


function btSalvar(){

  if(txtPerso.value != '' && txtForca.value != '' && txtDurabilidade.value != '' ){

      var personagem =
        {
        nome: txtPerso.value,
        forca: txtForca.value, 
        velocidade: txtVelocidade.value,
        durabilidade: txtDurabilidade.value,
        potencia: txtPotencia.value,
        combate: txtCombate.value
      }
      
      
    listaPersonagem.push(personagem);
    JSON.stringify(listaPersonagem)

    txtPerso.value = ''
    txtForca.value = ''
    txtVelocidade.value = ''
    txtDurabilidade.value = ''
    txtPotencia.value = ''
    txtCombate.value = ''
    
  }else{
    alert("⚠ Os campos seguintes não podem ser vazios: ⚠\n"+"-> Nome\n"+"-> Força\n"+"-> Durabilidade\n")

    txtPerso.value = ''
    txtForca.value = ''
    txtVelocidade.value = ''
    txtDurabilidade.value = ''
    txtPotencia.value = ''
    txtCombate.value = ''
    
  }
 console.log(txtPerso.value)
  
  }

  function btSalvarJson(){
    if(listaPersonagem != ""){
    downloadFiles(JSON.stringify(listaPersonagem), 'personagens.json', '.json');
  

  function downloadFiles(data, file_name, file_type) {
    var file = new Blob([data], {type: file_type});
    if (window.navigator.msSaveOrOpenBlob) 
        window.navigator.msSaveOrOpenBlob(file, file_name);
    else { 
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = file_name;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
}else{
  alert("⚠ Para salvar é necessario haver algum cadastro ⚠")
}
}

