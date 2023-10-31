let signupBtn = document.getElementById('signupBtn');
let signinBtn = document.getElementById('singInBtn');
let nameField = document.getElementById('nameField');
let repeatPass = document.getElementById('repeatPass');
let keyPass = document.getElementById('keyAcces');
let title = document.getElementById('title');



signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    repeatPass.style.maxHeight = "0";
    keyPass.style.maxHeight = "0";
    title.innerHTML = 'Iniciar Sesión';
    signupBtnBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
}


signupBtn.onclick = function(){
    nameField.style.maxHeight = '60px';
    repeatPass.style.maxHeight = "60px";
    keyPass.style.maxHeight = "60px";
    title.innerHTML = 'Crear Cuenta';
    signupBtnBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
}