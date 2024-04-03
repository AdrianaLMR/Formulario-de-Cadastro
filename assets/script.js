//Oque falta: 
//opção  de login do usuario
// salvar os dados do usuario para login posterior 

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const inputName = document.getElementById("signupName");
    const inputEmail = document.getElementById("signupEmail");
    const inputIdade = document.getElementById("signupAge");
    const inputPassword = document.getElementById("signupPassword");
    const inputConfirmPassword = document.getElementById("confirmPassword");
    const buttonSubmit = document.getElementById("button-submit");
    const mostrarSenhaCheckbox = document.getElementById("mostrarSenha");
    const mostrarConfirmSenhaCheckbox = document.getElementById("mostrarConfirmSenha");
    const uppercaseRegex = /[A-Z]/;
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /[0-9]/;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!validarNome()) {
            inputName.focus();
            return;
        }
        if (!validarEmail()) {
            inputEmail.focus();
            return;
        }
        if (!validarIdade()) {
            inputIdade.focus();
            return;
        }
        if (!validarSenha()) {
            inputPassword.focus();
            return;
        }
        if (!confirmarSenha()) {
            inputConfirmPassword.focus();
            return;
        }

        const formularioValido = validarNome() && validarEmail() && validarIdade() && validarSenha() && confirmarSenha();

        if (formularioValido) {
            window.location.href = "https://adrianalmr.github.io/Projetos_Cronometro_Temporizador/";
        }
    });

    function validarNome() {
        const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/;
        const nome = inputName.value.trim();

        if (!nameRegex.test(nome)) {
            alert("Por favor, digite um nome válido.");
            inputName.focus();
            return false;
        }

        return true;
    }

    function validarEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const email = inputEmail.value.trim();

        if (!emailRegex.test(email)) {
            alert("Insira um email válido");
            inputEmail.focus();
            return false;
        }

        return true;
    }

    function validarIdade() {
        const input = inputIdade.value.trim();

        if (!/^\d+$/.test(input)) {
            alert("Digite uma idade válida (apenas números)");
            inputIdade.focus();
            return false;
        }

        const idade = parseInt(input);

        if (isNaN(idade) || idade < 1 || idade > 110) {
            alert("Digite uma idade válida");
            inputIdade.focus();
            return false;
        }

        return true;
    }

    function validarSenha() {
        const inputValue = inputPassword.value.trim();

        if (!uppercaseRegex.test(inputValue) || !symbolRegex.test(inputValue) || !numberRegex.test(inputValue) || inputValue.length < 8) {
            let errorMessage = "A senha deve conter:";
            if (!uppercaseRegex.test(inputValue)) errorMessage += " uma letra maiúscula,";
            if (!symbolRegex.test(inputValue)) errorMessage += " um símbolo,";
            if (!numberRegex.test(inputValue)) errorMessage += " um número,";
            if (inputValue.length < 8) errorMessage += " no mínimo 8 caracteres.";
            else errorMessage = errorMessage.slice(0, -1) + ".";
            alert(errorMessage);
            inputPassword.focus();
            return false;
        }

        return true;
    }

    function confirmarSenha() {
        const senha = inputPassword.value.trim();
        const confirmacaoSenha = inputConfirmPassword.value.trim();

        if (senha !== confirmacaoSenha) {
            alert("As senhas não são iguais.");
            inputConfirmPassword.focus();
            return false;
        }

        return true;
    }

    function toggleMostrarSenha() {
        inputPassword.type = mostrarSenhaCheckbox.checked ? "text" : "password";
    }

    function toggleMostrarConfirmSenha() {
        inputConfirmPassword.type = mostrarConfirmSenhaCheckbox.checked ? "text" : "password";
    }

    function limparCampos(event) {
        inputName.value = "";
        inputEmail.value = "";
        inputIdade.value = "";
        inputPassword.value = "";
        inputConfirmPassword.value = "";
    }

    mostrarSenhaCheckbox.addEventListener("change", toggleMostrarSenha);
    mostrarConfirmSenhaCheckbox.addEventListener("change", toggleMostrarConfirmSenha);
    window.addEventListener('load', (event) => {
        limparCampos(event);
    });
});
