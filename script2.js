// Les conditions

/****
 * 
 * IF 
 * 
 * ELSE
 * 
 * THEN
 * 
 * 
 * 
 * IF ELSE
 * 
 * 
*/

age =  prompt("Veuillez entré votre âge ?"); // variable age va contenir le texte entré par l'uti.
age =parseInt(age) // on transforme age au format numérique


// SI l'age est > 18 alors on ecrit dans la console que la personne est majeur si non la personne est mineur
if (age>18){
    console.error("Vous êtes majeur")
}
if (age<18){
    console.error("vous êtes mineur")
}
if (age==18){ // tester l egalité de la valeur entre deux informations 
    console.error("Vous êtes piles MAJEUR ! ") 
}
// == on veut tester l egalité de la valeur entre deux informations 
// === on veut tester l egalité de la valeur et l'égalité du type entre deux informations 

/**
 * EX 1 : 
 * Demander avec prompt un nombre à l'utilisateur
 * AFficher dans la console si ce le nombre est positif ou négatif
 * 
 */
nombre = prompt("veuillez rentrer un numéro ! ") // ouvre un tiroire pour le nombre entré par l'utilisateur
nombre=parseInt(nombre) // convertir la chaine de caractere en nombre
if ( nombre > 0   )  {
    console.error("le nombre est positif")
}
else  {
    console.error("le nombre est négatif")
}


/**
 * EX 2 : 
 * Demander avec prompt un nombre à l'utilisateur
 * AFficher dans la console si ce le nombre est pair ou impair
 * 
 */
 nombre = prompt("veuillez rentrer un numéro ! ") // ouvre un tiroire pour le nombre entré par l'utilisateur
 nombre=parseInt(nombre) // convertir la chaine de caractere en nombre
 if ( (nombre % 2) == 0   )  {
     console.error("le nombre est pair")
 }
 else  {
     console.error("le nombre est impair")
 }
 
/**
 * 
 * EXO 3
 * Initialiser une variable avec votre prenom
 * prenom=yoel
 * vous demandez à l'utilisateur son prenom
 * si le prenom == à votre prenom alors on ecrit dans la console
 * sympa vous avez le même prenom que moi
 * si non rien ...
 * 
 */

// la variable prenom recoit la saisie utilisateur EX : prenom=Yoel
monprenom="Yoel"
prenom=prompt("Quel est votre prénom ? ");
// la variable mike recoit ce qui est dans la variable prenom mike=Yoel
if ( prenom==monprenom ) {
    console.error("sympa vous avez le même prenom que moi")
}