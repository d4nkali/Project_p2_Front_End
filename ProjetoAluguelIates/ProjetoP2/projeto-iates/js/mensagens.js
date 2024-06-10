function carregarMensagens() {

    var mensagens = obterMensagens();
    var tabela = document.getElementById('tabela-mensagens');

    mensagens.forEach(function(mensagem) {

        var row = tabela.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = mensagem.nome;
        cell2.innerHTML = mensagem.email;
        cell3.innerHTML = mensagem.mensagem;

    });

}

window.onload = carregarMensagens;
