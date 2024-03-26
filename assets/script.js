const form = document.getElementById("signupForm");
const inputName = document.getElementById("signupName");
const inputEmail = document.getElementById("signupEmail");
const inputIdade = document.getElementById("signupAge");
const inputPassword = document.getElementById("signupPassword");
const inputConfirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("button-submit");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o campo Nome está preenchido e contém apenas letras ou caracteres específicos
    const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/; // Aceita letras, espaços e apóstrofos
    if (!nameRegex.test(inputName.value.trim())) {
        alert("Por favor, digite um nome válido.");
        return;
    }

    // Verifica se o campo Nome está preenchido 
    if (inputName.value === "") {
        alert("Por favor, digite seu nome");
        return;
    }

    //Verifica se o campo  Email está preenchido e se é válido
    if (inputEmail.value === "") {
        alert("Por favor, digite seu E-mail");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value)) {
        alert("Insira um email válido");
        return;
    }

    //Verifica se o campo Idade está preenchido e se é maior de idade
    if (inputIdade.value === "") {
        alert("Por favor, digite sua idade");
        return;
    }

    if ((inputIdade.value > 0) && (inputIdade.value > 100)) {
        alert("Digite uma idade válida");
        return;
    }

    //Verifica se o campo senha está preenchido/ Quantia de caracteres/ tipos de caracteres requeridos
    const uppercaseRegex = /[A-Z]/; // Pelo menos uma letra maiúscula
    const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/; // Pelo menos um símbolo
    const numberRegex = /[0-9]/; // Pelo menos um número

    const inputValue = inputPassword.value.trim();

    if (inputValue === "") {
        alert("Por favor, digite uma senha válida");
        return;
    }

    if (!uppercaseRegex.test(inputValue) || !symbolRegex.test(inputValue) || !numberRegex.test(inputValue) || inputValue.length < 8) {
        let errorMessage = "A senha deve conter:";
        if (!uppercaseRegex.test(inputValue)) {
            errorMessage += " uma letra maiúscula,";
        }
        if (!symbolRegex.test(inputValue)) {
            errorMessage += " um símbolo,";
        }
        if (!numberRegex.test(inputValue)) {
            errorMessage += " um número,";
        }
        if (inputValue.length < 8) {
            errorMessage += " no mínimo 8 caracteres.";
        } else {
            errorMessage = errorMessage.slice(0, -1) + ".";
        }
        alert(errorMessage);
        return;
    }

    //Verifica se o campo confirmar senha está preenchido e se é igual ao campo de senha
    if (inputConfirmPassword.value === "") {
        alert("Por favor, digite novamente sua senha para confirmar");
        return;
    }

    if (inputConfirmPassword.value !== inputPassword.value) {
        alert("As senhas não são iguais.");
        return;
    }

    //se todos os campos estiverem preenchidos, envie o formulário
    window.location.href = "https://adrianalmr.github.io/Projetos_Cronometro_Temporizador/";
});


//verificar validacao emial html, 
//guardar as informacoes de cadastro, para login posterior
//opcao de visualizar senha
// ao submeter formulario limpar campos se reiniciado novamente
// click enter direciona ao proximo campo input
