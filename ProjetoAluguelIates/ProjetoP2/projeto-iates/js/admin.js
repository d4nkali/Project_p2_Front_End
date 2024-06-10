function login(event) {

    event.preventDefault();
    var loginData = {

        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value

    };

    var isValid = validarUsuario(loginData);
    if (isValid) {

        window.location.href = 'mensagens.html';
    } 

    else {

        alert('E-mail e Senha inválidos');

    }

}
