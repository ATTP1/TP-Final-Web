const validateForm = () => {
    let isValid = true;

    const prenom = document.getElementById("prenom");
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();


    /*
    
    const sujet = document.getElementById("sujet");
    const deadline = document.getElementById("deadline");
    const typeProjet = document.getElementById("typeProjet");
    const tailleProjet = document.getElementById("tailleProjet");
    const message = document.getElementById("message");
*/

    if (prenomValue == "") {
        setError(prenom, "Le prénom est obligatoire");
        isValid = false;

    } else {
        setSuccess(prenom);

    }

    if (nomValue == "") {
        setError(nom, "Le nom est obligatoire");
        isValid = false;

    } else {
        setSuccess(nom);

    }

    if (emailValue === '') {
        setError(email, "Le email est obligatoire");
        isValid = false;

    } else {
        setSuccess(nom);

    }

    return isValid;
};


const setError = (element, message) => {

    const inputControl = element.parentElement;

    element.value = "";
    element.placeholder = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success')
};

const setSuccess = element => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage')

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error')
};