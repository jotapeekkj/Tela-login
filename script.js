document.getElementById('btn-entrar').addEventListener('click', function() {
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var emailError = document.getElementById('email-error');
    var senhaError = document.getElementById('senha-error');

    emailError.textContent = '';
    senhaError.textContent = '';

    if (email.value.trim() === '' || senha.value.trim() === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = 'Por favor, insira um endereço de e-mail válido.';
        email.classList.add('invalid');
    } else if (senha.value.length < 8) {
        senhaError.textContent = 'A senha deve conter no mínimo 8 caracteres';
        senha.classList.add('invalid');
    } else {
        email.classList.remove('invalid');
        senha.classList.remove('invalid');
        alert('Campos preenchidos. Enviando formulário...');
    }
});

email.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        this.classList.remove('invalid');
    }
});

senha.addEventListener('input', function() {
    if (this.value.trim() !== '') {
        this.classList.remove('invalid'); 
    }
});
