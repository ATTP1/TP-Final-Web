const validateForm = () => {
    let isValid = true;

    const prenom = document.getElementById("prenom");
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const sujet = document.getElementById("sujet");
    const message = document.getElementById("message");

    /*
      const deadline = document.getElementById("deadline");
      const typeProjet = document.getElementById("typeProjet");
      const tailleProjet = document.getElementById("tailleProjet");    
      */

    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const emailValue = email.value.trim();
    const sujetValue = sujet.value.trim();
    const messageValue = message.value.trim();

    /*
    const deadlineValue = deadline.value.trim();
    const typeProjetValue = typeProjet.value.trim();
    const tailleProjetValue = tailleProjet.value.trim();
          
*/

    let interdit = "0123456789!#$%&*'()*+,-./:;<=>?@[]^_`{|}~";


    if (prenomValue == "") {
        setError(prenom, "Le prénom est obligatoire");
        isValid = false;
    } else {
        const listeLettre = prenomValue.split("");

        if (listeLettre.length > 15) {
            setError(prenom, "Prénom trop long");
            isValid = false;
        } else if (listeLettre.length < 3) {
            setError(prenom, "Prénom trop court");
            isValid = false;
        } else {
            let erreurTrouvé = false;
            listeLettre.forEach((element) => {
                if (interdit.includes(element)) {
                    setError(prenom, "Caractère interdit");
                    isValid = false;
                    erreurTrouvé = true;
                }
            });

            if (!erreurTrouvé) {
                setSuccess(prenom);
            }
        }
    }

    if (nomValue == "") {
        setError(nom, "Le nom est obligatoire");
        isValid = false;
    } else {
        const listeLettre = nomValue.split("");

        if (listeLettre.length > 15) {
            setError(nom, "Nom trop long");
            isValid = false;
        } else if (listeLettre.length < 3) {
            setError(nom, "Nom trop court");
            isValid = false;
        } else {
            let erreurTrouvé = false;
            listeLettre.forEach((element) => {
                if (interdit.includes(element)) {
                    setError(nom, "Caractère interdit");
                    isValid = false;
                    erreurTrouvé = true;
                }
            });

            if (!erreurTrouvé) {
                setSuccess(nom);
            }
        }
    }

    if (emailValue == "") {
        setError(email, "Le courriel est obligatoire");
        isValid = false;
    } else {
        const listeLettre = emailValue.split("");

        if (listeLettre.length > 25) {
            setError(email, "Courriel trop long");
            isValid = false;
        } else if (listeLettre.length < 6) {
            setError(email, "Courriel trop court");
            isValid = false;
        } else {
            interdit = "!#$%&*'()*+,-/:;<=>?[]^_`{|}~";

            let erreurTrouvé = false;
            listeLettre.forEach((element) => {
                if (interdit.includes(element)) {
                    setError(email, "Caractère interdit");
                    isValid = false;
                    erreurTrouvé = true;
                }
            });

            if (!erreurTrouvé) {
                if (!emailValue.includes("@") || !emailValue.includes(".")) {
                    setError(email, "Caractère manquant (@ ou .)");
                    isValid = false;
                    erreurTrouvé = true;
                }
            }

            if (!erreurTrouvé) {
                setSuccess(email);
            }
        }
    }

    if (sujetValue == "") {
        setError(sujet, "Le sujet est obligatoire");
        isValid = false;
    } else {
        const listeLettre = sujetValue.split("");

        if (listeLettre.length > 15) {
            setError(sujet, "Sujet trop long");
            isValid = false;
        } else if (listeLettre.length < 3) {
            setError(sujet, "Sujet trop court");
            isValid = false;
        } else {
            let erreurTrouvé = false;
            listeLettre.forEach((element) => {
                if (interdit.includes(element)) {
                    setError(sujet, "Caractère interdit");
                    isValid = false;
                    erreurTrouvé = true;
                }
            });

            if (!erreurTrouvé) {
                setSuccess(sujet);
            }
        }
    }

    if (messageValue == "") {
        setError(message, "Un petit coucou est obligatoire");
        isValid = false;
    } else {
        const listeLettre = messageValue.split("");

        if (listeLettre.length > 200) {
            setError(message, "Message trop long");
            isValid = false;
        } else if (listeLettre.length < 3) {
            setError(message, "Message trop court");
            isValid = false;
        } else {
            setSuccess(message);
        }
    }

    return isValid;
};

const setError = (element, message) => {
    const inputControl = element.parentElement;

    element.value = "";
    element.placeholder = message;

    inputControl.classList.add("error");
    inputControl.classList.remove("success");
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;



    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};