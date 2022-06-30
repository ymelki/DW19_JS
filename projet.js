function entierAleatoire(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
var entier = entierAleatoire(1, 100);
console.log(entier)
/**
 * RECUPERER LA FONCTION
 * ET AFFICHER DANS LA LOG UN NOMBRE ENTRE 1 ET 10 .. ENTRE 1 ET 100 .. ENTRE 5 ET 15
 * 
 * CREER UNE FONCTION QUI VA RENVOYER UN NOMBRE ENTRE 1 et un parametre de la fonction
 * 
 * 
 * EXO 1
 * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR 10 NOMBRE A L INTERIEUR . IL SERONT ALEATOIRE ENTRE 1 ET 100
 * 
 *  * EXO 2
 * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR ENTRE 1 ET 100 NOMBRE A L INTERIEUR  . IL SERONT ALEATOIRE ENTRE 1 ET 100
 * 
 */