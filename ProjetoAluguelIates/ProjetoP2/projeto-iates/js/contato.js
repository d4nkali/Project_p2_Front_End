function enviarMensagem(event) {

    event.preventDefault();
    var mensagem = {

        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('msg').value

    };

    inserirMensagem(mensagem);

}
