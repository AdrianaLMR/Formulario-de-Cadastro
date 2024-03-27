const form = document.getElementById("signupForm");
const inputName = document.getElementById("signupName");
const inputEmail = document.getElementById("signupEmail");
const inputIdade = document.getElementById("signupAge");
const inputPassword = document.getElementById("signupPassword");
const inputConfirmPassword = document.getElementById("confirmPassword");
const submit = document.getElementById("button-submit");

const uppercaseRegex = /[A-Z]/;
const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
const numberRegex = /[0-9]/;

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validarNome()) return;
    if (!validarEmail()) return;
    if (!validarIdade()) return;
    if (!validarSenha()) return;
    if (!confirmarSenha()) return;

    // Se todos os campos estiverem preenchidos corretamente, envie o formulário
    window.location.href = "https://adrianalmr.github.io/Projetos_Cronometro_Temporizador/";
});

function validarNome() {
    const nameRegex = /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s']+$/;

    if (!nameRegex.test(inputName.value.trim())) {
        alert("Por favor, digite um nome válido.");
        return false;
    }

    return true;
}

function validarEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(inputEmail.value)) {
        alert("Insira um email válido");
        return false;
    }

    return true;
}

function validarIdade() {
    const input = inputIdade.value.trim();
    
    // Verificar se a entrada contém apenas dígitos
    if (!/^\d+$/.test(input)) {
        alert("Digite uma idade válida (apenas números)");
        return false;
    }
    
    // Converter a entrada em um número inteiro
    const idade = parseInt(input);
    
    // Verificar se a entrada é um número válido dentro do intervalo permitido
    if (isNaN(idade) || idade < 1 || idade > 110) {
        alert("Digite uma idade válida");
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
        return false;
    }

    return true;
}

function confirmarSenha() {
    // if (inputConfirmPassword.value === "") {
    //     alert("Por favor, digite novamente sua senha para confirmar");
    //     return false;
    // }

    if (inputConfirmPassword.value !== inputPassword.value) {
        alert("As senhas não são iguais.");
        return false;
    }

    return true;
}

// Função para limpar todos os campos do formulário
function limparCampos(event) {
    inputName.value = "";
    inputEmail.value = "";
    inputIdade.value = "";
    inputPassword.value = "";
    inputConfirmPassword.value = "";
}

// Adiciona um ouvinte de evento para quando a página é carregada
window.addEventListener('load', (event) => {
    // Chama a função para limpar os campos do formulário
    limparCampos(event);
});
 

//verificacao de password e confirmpassoword  type: password
//buttos de visualizar senha
//corrigir css de buttopn submit e form 
//guardar as informacoes de cadastro, para login posterior
//opcao de visualizar senha
// click enter direciona ao proximo campo input


//erro idade, numerios <100> com simbolos sao aceitos como idade / - apenas simbolos em idade nao sao aceitos 
//
