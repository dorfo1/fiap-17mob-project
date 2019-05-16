document.getElementById("cadastrar").addEventListener("click", function (event) {
    var email = document.getElementById("inputEmail").value;
    var senha = document.getElementById("inputSenha").value;
    var nome = document.getElementById("inputNome").value;
    var usuarioGit = document.getElementById("inputGithub").value;
    event.preventDefault()
    createUser(email, senha, nome, usuarioGit)
});

function createUser(email, senha, nome, github) {
    firebase.auth().createUserWithEmailAndPassword(email, senha).then(function (resp) {
        console.log(resp)
        salvarNoBanco(resp.user.uid,nome,github,email)
    }).catch(function (error) {
        var errorMessage = error.message;
        alert(errorMessage)

    });
}

function salvarNoBanco(uid,nome,github,email) {
    firebase.database().ref('usuarios/' + uid).set({
        nome: nome,
        github: github,
        email:email
    }).then(function () {
        window.location.href = 'main.html'
    }).catch(function (error) {
        
    });
}

var app = {
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

   
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }


};

app.initialize();