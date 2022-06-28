/**
 * FONCTIONS
 * 
 * 
 * parsint : FONCTION METHODE JS CONVERTIT TEXTE EN NUMERIQUE
 */

// CREATION DE LA FONCTION QUE L ON DECRIT
function mafonction(){
    console.error("je teste ma premiere fonction ! ")
}
// appel
mafonction()

// EXO 1 : CREEZ UNE FONCTION QUI AFFICHE UNE ALERT HELLO WORLD

function afficher_hello(){
    alert("Hello world")
}

afficher_hello()

// EXO 1 : CREEZ UNE FONCTION QUI AFFICHE UNE ALERT HELLO WORLD
/* EXO 2 : 1. Recuperer l'age de l'utilisateur via la commande prompt
2. Affichez l'age de l'utilisateur dans la console
3. Affiche quel age aura l'utilisateur dans 2 ans dans la console
Si 25 est inséré dans la console il sera écrit
L'utilisateur aura 27 ans dans 2 ans
*/

function recup_age(){
    
    // 1 PROMPT 
    age = prompt("Veuillez entré votre âge ?"); // variable age va contenir le texte entré par l'uti.
    console.error(typeof(age)) // affiche dans la console la donnée qui est entrée. TYPEOF LE TYPE DE VARIABLE
    // 2  Affichez l'age de l'utilisateur dans la console
    // Afficher dans la console : L'utilisateur à 25 ans.
    console.error("L'utilisateur à " + age + " ans");
    //3  Affichez
    AGEPLUSDEUX=parseInt(age)+2 // CONVERTIR UNE CHAINE DE CARACTERE EN NOMBRE
    console.error("L'utilisateur aura " + AGEPLUSDEUX + " ans")

}

recup_age()

