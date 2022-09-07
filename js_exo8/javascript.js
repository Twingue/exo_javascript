//Saisie

/*
var i = 1;
var none = 0;
while (i>0 ){
var prenom = window.prompt("Saisissez le prenom n°" +i);
    console.log(prenom);
    console.log("Nombre de prénom :" + i);

    i++
    if(prenom==null || prenom==none)
    {
        break;
    }
}

console.log("fin de boucle")

//Entier

var i=0;
var nombre = window.prompt("Saisissez un nombre");
for (i=0; i<nombre; i++)
{
console.log(i);
}
*/

//Moyenne

/*
 let i=true;
 let total=0;
 let div=0;
while (i)
    {
        let nombre = parseInt(window.prompt("Saisissez un nombre "));
        console.log(nombre);
        if(nombre==0 || nombre==null)
        {
             break;
        }
        else {
        total=nombre+nombre;
        div++
        }
       
     }

console.log("La moyenne est de :"+ total/div);   
console.log("La somme est de :" + total); 
*/

//Multiples

/*
let y=0;
let resultat=0;
let x = parseInt(window.prompt("Saisissez un nombre entier"));
let n = parseInt(window.prompt("Saisissez le nombre de multiple à afficher"));
for (y=1;y<=n;y++)
{
  resultat=y*x;
  console.log(resultat);
}
*/



//Voyelle

/*
let mots =window.prompt("Saisissez un mot");
console.log(mots);

function compterNbVoyelle(mot) {
      var nbVoyelle = 0;
      for (i = 0; i < mot.length; i++) {
        if (mot[i].toLowerCase() === "a" || mot[i].toLowerCase() === "e" || mot[i].toLowerCase() === "y" || mot[i].toLowerCase() === "u" || mot[i].toLowerCase() === "i" || mot[i].toLowerCase() === "o") {
          nbVoyelle++;
        }
      }
      console.log("le mot "+ mots + " contient " + nbVoyelle + " voyelle(s) " );
}

compterNbVoyelle(mots);

*/