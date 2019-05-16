var user = JSON.parse(sessionStorage.getItem('user'));
console.log(user)

document.getElementById("editar").addEventListener("click", function (event) {
    var nome = document.getElementById("inputNome").value;
    var usuarioGit = document.getElementById("inputGithub").value;
    event.preventDefault()
    editarUsuario(nome, usuarioGit)
});


function editarUsuario(nome,github,email) {
    firebase.database().ref('usuarios/' + user.uid).update({
        nome: nome,
        github: github,
    }).then(function () {
        window.location.href = 'main.html'
    }).catch(function (error) {
        
    });
}