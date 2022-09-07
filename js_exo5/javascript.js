
var nom = window.prompt("Entrez votre nom");
var prenom = window.prompt("Entrez votre prénom");
if (window.confirm("Etes-vous un homme ?") == true) 
{
    window.alert ("Bonjour Monsieur " + nom + " " + prenom +  " " + "\n Bienvenue sur notre site web") 
} else {
    window.alert ("Bonjour Madame " + nom + " " + prenom +  " " + "\n Bienvenue sur notre site web") 
}
