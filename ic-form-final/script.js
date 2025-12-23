document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formulario");
    const mensagem = document.getElementById("mensagem");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value;

        if (nome === "") {
            mensagem.innerText = "O campo nome não pode ser vazio.";
            mensagem.style = "red";
            return
        }

        if (!email.includes("@")) {
            mensagem.innerText = "O campo Email precisa ter '@'.";
            mensagem.style = "red";
            return;
        }

        if (senha.length < 8) {
            mensagem.innerText = "o campo senha tem que ter pelo menos 8 caracteres.";
            mensagem.style = "red";
            return;
        }

        mensagem.innerText = "Formulário enviado com sucesso!";
        mensagem.style = "green";
    });

});