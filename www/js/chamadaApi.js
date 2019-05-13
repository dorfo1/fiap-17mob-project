var user = JSON.parse(sessionStorage.getItem('user'));
console.log(user)

const url = "http://api.github.com/users/"
var perfilGit;

firebase.database().ref('/usuarios/' + user.uid).once('value').then(function(snapshot) {
    console.log(snapshot.val());
    fazerRequestAPI(snapshot.val().github)
});


function fazerRequestAPI(github){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url+github, false ); 
    xmlHttp.send( null );
    console.log(xmlHttp.responseText)
    perfilGit = JSON.parse(xmlHttp.responseText)
    carregarInformacao(perfilGit)
}


function carregarInformacao(git){
    document.getElementById("imagemGit").src = git.avatar_url
    document.getElementById("nome").innerHTML = "Nome: " + git.name 
    document.getElementById("github").innerHTML = "Github: " + git.login
    document.getElementById("repositorios").innerHTML = "Repositorios: " + git.public_repos
    document.getElementById("seguidores").innerHTML = "Seguidores: " + git.followers
    document.getElementById("localizacao").innerHTML = "Localizacao: " + verificaLocalizacao(git.location)
}


document.getElementById("salvarImagem").addEventListener("click",function(){
    if(perfilGit){
        firebase.database().ref('usuarios').child(user.uid).update({
            imagem: perfilGit.avatar_url
        }).then(function () {
            window.location.href = 'main.html'
        }).catch(function (error) {
            
        });
    }

})


function verificaLocalizacao(localizacao){
    if(localizacao){
        return localizacao
    }else{
        return "Não informada"
    }
}


