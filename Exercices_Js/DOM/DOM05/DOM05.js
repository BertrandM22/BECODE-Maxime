// let msg= document.querySelector('#name')

// function trueOrFalse(msg) {
//     if (msg.length<4 || msg.length>8 ) {
//         return true;
        
//     }
//     return false;
// }
// function appel(textAp) {
    

// addEventListener("submit",(event)=>{
//   let msgs= msg.value
// if (trueOrFalse(msgs)) {
    
//     console.log('tout a ete envoyer')
   
// }
// else{
//     console.log( "cava pas")
    
// }
// event.preventDefault()


// })}





// console.log();




document.getElementById('myForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Récupérer les valeurs des champs
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Récupérer les éléments pour les messages
    const usernameMsg = document.getElementById('username-msg');
    const emailMsg = document.getElementById('email-msg');
    const passwordMsg = document.getElementById('password-msg');
    const confirmPasswordMsg = document.getElementById('confirm-password-msg');

    // Réinitialiser l'affichage des messages
    usernameMsg.style.display = 'none';
    emailMsg.style.display = 'none';
    passwordMsg.style.display = 'none';
    confirmPasswordMsg.style.display = 'none';

    // Vérification du nom d'utilisateur : entre 5 et 10 caractères, uniquement en minuscules
    if (username.length < 5 || username.length > 10 || /[A-Z]/.test(username)) {
        usernameMsg.textContent = "Le nom d'utilisateur doit être entre 5 et 10 caractères, en minuscules.";
        usernameMsg.style.color = 'red';
        usernameMsg.style.display = 'block';
        isValid = false;
    } else {
        usernameMsg.textContent = "Nom d'utilisateur correct.";
        usernameMsg.style.color = 'green';
        usernameMsg.style.display = 'block';
    }

    // Vérification de l'e-mail : format valide avec une regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        emailMsg.textContent = "Adresse e-mail invalide.";
        emailMsg.style.color = 'red';
        emailMsg.style.display = 'block';
        isValid = false;
    } else {
        emailMsg.textContent = "Adresse e-mail correcte.";
        emailMsg.style.color = 'green';
        emailMsg.style.display = 'block';
    }

    // Vérification du mot de passe : entre 8 et 15 caractères
    if (password.length < 8 || password.length > 15) {
        passwordMsg.textContent = "Le mot de passe doit être entre 8 et 15 caractères.";
        passwordMsg.style.color = 'red';
        passwordMsg.style.display = 'block';
        isValid = false;
    } else {
        passwordMsg.textContent = "Mot de passe correct.";
        passwordMsg.style.color = 'green';
        passwordMsg.style.display = 'block';
    }

    // Vérification de la confirmation du mot de passe : doit correspondre au mot de passe
    if (password !== confirmPassword) {
        confirmPasswordMsg.textContent = "Les mots de passe ne correspondent pas.";
        confirmPasswordMsg.style.color = 'red';
        confirmPasswordMsg.style.display = 'block';
        isValid = false;
    } else {
        confirmPasswordMsg.textContent = "Les mots de passe correspondent.";
        confirmPasswordMsg.style.color = 'green';
        confirmPasswordMsg.style.display = 'block';
    }

    // Si le formulaire est invalide, on empêche la soumission
    if (!isValid) {
        event.preventDefault(); // Empêcher la soumission du formulaire si des erreurs sont présentes
    }
});     