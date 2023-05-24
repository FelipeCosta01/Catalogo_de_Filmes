///////////INDEX HTML///////////
let btnI = document.getElementById('btnIni')
let btnOne = document.getElementById('btn1')
let btnTwo = document.getElementById('btn2')
let btnThree = document.getElementById('btn3')
let btnFour = document.getElementById('btn4')
let btnFive = document.getElementById('btn5')
let btnCadastro = document.getElementById('btnCad')

let sectionTwo = document.getElementById('sectionTwo') 

let iniTxt = document.getElementById('txtIni')
let filmeFoto = document.getElementById('fotoFilme')
let nameFile = document.getElementById('filmeName')
let txtFilme = document.getElementById('filmeTxt')


///////////CODE///////////  
   filmeName.style.display = 'none';
   txtFilme.style.display = 'none'
   iniTxt.style.display  = 'none'
   fotoFilme.src = "img\\netflix.gif";


function btnIni(){
   txtFilme.style.display = 'none'
   iniTxt.style.display  = 'none'
   filmeName.style.display = "none"
   fotoFilme.src = "img\\netflix.gif";
   
}


function btn1(){
  iniTxt.style.display  = 'none'
  filmeFoto.style.display = 'inline'
  nameFile.style.display = 'inline'
  txtFilme.style.display = 'inline'
  fotoFilme.src = "img\\capitao.jpg";
  filmeName.innerHTML = "Capitão América: O Primeiro Vingador";
  filmeTxt.innerHTML = "Steve Rogers é um jovem que participa de experiências visando a criação do supersoldado americano. Quando os oficiais militares conseguem transformá-lo em uma arma humana,eles percebem que não podem arriscar a vida do jovem nas batalhas de guerra.";
  
}

function btn2(){
  iniTxt.style.display  = 'none'
  filmeFoto.style.display = 'inline'
  nameFile.style.display = 'inline'
  txtFilme.style.display = 'inline'
  fotoFilme.src = "img\\capita.jpg";
  filmeName.innerHTML = "Capitã Marvel";
filmeTxt.innerHTML = "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls. Ao tentar impedir uma invasão de larga escala na Terra, em 1995, ela tem memórias recorrentes de uma outra vida, como Carol Danvers, agente da Força Aérea norte-americana. Com a ajuda de Nick Fury, Capitã Marvel precisa descobrir os segredos de seu passado e pôr um fim ao conflito intergalático com os Skrulls."
  
}

function btn3(){
  iniTxt.style.display  = 'none'
  filmeFoto.style.display = 'inline'
  nameFile.style.display = 'inline'
  txtFilme.style.display = 'inline'
  fotoFilme.src = "img\\homemferro.jpg";
  filmeName.innerHTML = "Homem de Ferro";
  filmeTxt.innerHTML = "Tony Stark é um industrial bilionário e inventor brilhante que realiza testes bélicos no exterior, mas é sequestrado por terroristas que o forçam a construir uma arma devastadora. Em vez disso, ele constrói uma armadura blindada e enfrenta seus sequestradores. Ao voltar para os EUA, Stark aprimora a armadura e a utiliza para combater o crime.";
  
}

function btn4(){
  iniTxt.style.display  = 'none'
  filmeFoto.style.display = 'inline'
  nameFile.style.display = 'inline'
  txtFilme.style.display = 'inline'
  fotoFilme.src = "img\\hulk.jpg";
  filmeName.innerHTML = "O Incrível Hulk";
  filmeTxt.innerHTML = "O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. Porém, durante este processo, ele precisa lutar contra o Abominável, um novo inimigo que quer capturá-lo."
  
}

function btn5(){
  iniTxt.style.display  = 'none'
  filmeFoto.style.display = 'inline'
  nameFile.style.display = 'inline'
  txtFilme.style.display = 'inline'
  fotoFilme.src = "img\\HOMEM-DE-FERRO-2.jpg";
  filmeName.innerHTML = "Homem de Ferro 2";
  filmeTxt.innerHTML = "Em um mundo ciente da existência do Homem de Ferro, o inventor bilionário Tony Stark sofre pressão de todos os lados para compartilhar sua tecnologia com as forças armadas. Ele resiste para divulgar os segredos de sua inigualável armadura, com medo de que estas informações caiam nas mãos erradas. Com a bela Pepper Potts e o amigo Rhodey Rhodes ao seu lado, Tony precisa forjar novas alianças e confrontar um inimigo poderoso.";
  
}

function entrar(){
  window.location.href = "login.html";
}

function entrarB(){
  window.location.href = "game.html";
}

console.log('teste')



   




