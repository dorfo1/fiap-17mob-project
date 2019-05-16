var user = JSON.parse(sessionStorage.getItem('user'));
console.log(user)


firebase.database().ref('/usuarios/' + user.uid).once('value').then(function (snapshot) {
    document.getElementById("nome").innerHTML = "Nome: " + snapshot.val().nome
    document.getElementById("github").innerHTML = "Github: " + snapshot.val().github
    if (snapshot.val().imagem) {
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
    firebase.auth().signOut().then(function () {
        window.location.href = 'index.html'
    }, function (error) {
        console.log("erro logout")
    });
});


document.getElementById('camera').addEventListener('click', () => {
    let options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        targetWidth: 720,
        correctOrientation: true
    }

    takePicture(options)
})


var takePicture = (options) => {
    navigator.camera.getPicture((image_data) => {
        var image = document.getElementById('fotoCamera');
        image.src = "data:image/jpeg;base64," + image_data;
        atualizaDadosNoFirebase("data:image/jpeg;base64," + image_data)
    },
        (error) => {
            console.log(error)
        }, options)
}

function atualizaDadosNoFirebase(imagem) {
    firebase.database().ref('usuarios/' + user.uid).update({
        imagem: imagem
    }).catch(function (error) {
        alert("erro ao salvar imagem")
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
        console.log('Received Event: ' + id);
    }
};

app.initialize();