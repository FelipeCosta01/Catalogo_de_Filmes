let entrada = document.getElementById('login');
let senha = document.getElementById('password');


function entrar(){
    if(entrada.value == "admin" && senha.value == "admin"){
        window.location.replace("cadPerson.html");
    }else{
        alert("Usuario ou Senha Invalido! :(")
    } 
}