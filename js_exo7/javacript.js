//Parité

var nombre = window.prompt("Entrez un nombre");
if (nombre%2 == 0 ){
    window.alert (" Le nombre " + nombre + " est pair");
}
else {
    window.alert ("le nombre" + nombre + " est impair");
}

//Age

var age = window.prompt("Donnez votre année de naissance");
if (2022-age >= 18) {
    window.alert("Vous êtes majeur");
}
else {
    window.alert("Vous êtes mineur");
}

//Calculette

var nombre1 = parseInt(window.prompt("Entrez un premier nombre"));
var nombre2 = parseInt(window.prompt("Entrez un second nombre"));
var operateur = window.prompt("Entrez un opérateur(+,-,*,%)");
 if (operateur == "+") {
    var resultat = nombre1 + nombre2;
    window.alert("le résultat est " + resultat);
 }
 else if (operateur == "-") {
    var resultat = nombre1 - nombre2;
    window.alert("le résultat est " + resultat); 
}
 else if (operateur == "*") {
    var resultat = nombre1 * nombre2;
    window.alert("le résultat est " + resultat); 
}

 else if (operateur == "%") {
    var resultat = nombre1 / nombre2;
    window.alert("le résultat est " + resultat);
}

