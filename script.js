/*
Commentaire : 
Nous allons apprendre 
1. LES VARIABLES
2. LES CONDITONS
3. LES BOUCLES
4. LES FONCTIONS
*/

//  Les variables

/* 

1. Pourquoi les variables ?   pour stocker des données    EX: Nom d'un jeu = "jeu du plus ou du moins";
2. Une variable : le nom de la variable et la valeur de la variable : Tiroir qui porte un nom
EX: Tiroir A <= 10 Valeur  
Le numérique ne contient pas de guillement
Les chaines de caracteres  contient  des guillements
Additionner des nombes ca fonctionnent
Addition une chaine de caractere avec autre choses fait de la concetanation
*/
a=10 // 10 rentre dans la variable A
b=50 // PAREIL
c="80" // PAREIL
b=90 // B va contenir 90

console.error(a+parseInt(c));
console.error(typeof(c));
console.error(b);

// EXO : LES VARIABLES
SEL=100;
SUCRE=80;
console.error("Nous avons du SEL en Q. de " + SEL + ". Nous avons du sucre en quantité de " + SUCRE)

// VOTRE CODE INVERSE LES VARIABLES

// CREEZ UN USTENSIL / VARIABLE QUI SERT DE MEMOIRE
TEMP=SEL; // TEMP SAUVEGARDE AVEC LA VALEUR DE SEL
SEL=SUCRE; // SEL ON PEUT L ECRASER AVEC LA DE SUCRE
SUCRE=TEMP;// SUCRE ON PEUT GARDER LA VALEUR DE SEL
 // SEL NE PAS CONTENIR LA VALEUR DU SUCRE INITIAL CAR IL A ETE ECRASE

console.error("Nous avons du SEL en Q. de " + SEL + ". Nous avons du sucre en quantité de " + SUCRE);
// Nous avons du SEL en Q. de 80  Nous avons du sucre en quantité de 100

/*
EXO 2 :
1. Recuperer l'age de l'utilisateur via la commande prompt
2. Affichez l'age de l'utilisateur dans la console
3. Affiche quel age aura l'utilisateur dans 2 ans dans la console
Si 25 est inséré dans la console il sera écrit
L'utilisateur aura 27 ans dans 2 ans
*/




// 1 PROMPT 
age = prompt("Veuillez entré votre âge ?"); // variable age va contenir le texte entré par l'uti.
console.error(typeof(age)) // affiche dans la console la donnée qui est entrée. TYPEOF LE TYPE DE VARIABLE
// 2  Affichez l'age de l'utilisateur dans la console
// Afficher dans la console : L'utilisateur à 25 ans.
console.error("L'utilisateur à " + age + " ans");
//3  Affichez
AGEPLUSDEUX=parseInt(age)+2 // CONVERTIR UNE CHAINE DE CARACTERE EN NOMBRE
console.error("L'utilisateur aura " + AGEPLUSDEUX + " ans")


A=25;
B=A+2
console.error(B); // 27


/*
EXO 3 :
1. DEMANDER UN PRIX D UN ARTICLE VIA LA COMMANDE PROMPT
2. Affichez DANS LA CONSOLE : l'article vaut 45 euros. 45 etant le prix
3. Affichez DANS LA CONSOLE : l'article vaut 54 euros TTC . prix * 1.2
*/
PRICE = prompt("Veuillez entré LE PRIX DE L ARTICLE ?"); // variable age va contenir le texte entré par l'uti.
console.error("L ARTICLE VAUT  " + PRICE + " EUROS");
PRICE_TTC=parseInt(PRICE)*1.2

console.error("L ARTICLE VAUT  " + PRICE_TTC + " ttc");


/**
 * 
 * Exo 4  : afficher dans la consolle aujourdui nous somme le DATEDUJOUR
 * 
 */
date=new Date();
console.error(date);
day = date.getDate();
MOIS = date.getMonth()  + 1 ;
annee=date.getFullYear()
console.error(day + " " + MOIS + " " + annee)




