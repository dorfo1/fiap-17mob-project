var user = JSON.parse(sessionStorage.getItem('user'));
console.log(user)


firebase.database().ref('/usuarios/' + user.uid).once('value').then(function(snapshot) {
    document.getElementById("nome").innerHTML = "Nome: " + snapshot.val().nome 
    document.getElementById("github").innerHTML = "Github: " + snapshot.val().github
    if(snapshot.val().imagem){
        document.getElementById("fotoCamera").src = snapshot.val().imagem
    }
});



document.getElementById("consultar").addEventListener("click", function () {
    window.location.href = 'chamadaAPI.html'
});

document.getElementById("editar").addEventListener("click", function () {
    window.location.href = 'editar.html'
});


document.getElementById("logout").addEventListener("click", function () {
    firebase.auth().signOut().then(function() {
        window.location.href = 'index.html'
      }, function(error) {
        console.log("erro logout")
      });
});






var app = {
    
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();