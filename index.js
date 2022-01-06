const dataLowerCase = "azertyuiopmlkjhgfdsqwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "&é'-è_çà=^$ù%!:;,?./@";


function passwordGenerator() {
    let data = [];
    let password = "";

    if (lowerCase.checked) data.push(...dataLowerCase);
    if (upperCase.checked) data.push(...dataUpperCase);
    if (numbers.checked) data.push(...dataNumbers);
    if (symbols.checked) data.push(...dataSymbols);

    if (data.length === 0) {
        alert("Veuillez sélectionner au moins 1 critère");
        return;
    }


    for (i = 0; i < passwordLength.value; i++) {
        password += data[Math.floor(Math.random() * data.length)];
    }

    passwordOutput.value = password;
    passwordOutput.select();
    document.execCommand("copy");

    generate.textContent = "Copié !";
    setTimeout(() => {
        generate.textContent = "Générer un mot de passe";
    }, 2000);
}
generate.addEventListener("click", passwordGenerator);