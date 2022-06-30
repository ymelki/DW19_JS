function entierAleatoire(min, max) {
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxtab(Tableau){
    let REF_MAX=0
    for (let i=0; i < Tableau.length; i++){
        if ( Tableau[i] > REF_MAX    )  {  REF_MAX=Tableau[i]   }
    }
    return REF_MAX

  
}
//Utilisation
// let tab=[234, 530, 502, 45,34,45, 99999999999999]
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
 * BOUCLE SUR VOTRE TABLEAU
 * TABLEAU [I]=NOMBREALEATOIRE(1,100)
 * 
 * EXO 2
 * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR ENTRE 1 ET 100 NOMBRE A L INTERIEUR  . IL SERONT ALEATOIRE ENTRE 1 ET 100
 * 
 */
 var entier = entierAleatoire(1, 100);
 console.log(entierAleatoire(1,10))
 console.log(entierAleatoire(1,100))
 console.log(entierAleatoire(5,15))

 function aleatoire(l){
     return entierAleatoire(1, l)
 }

 console.log(aleatoire(5000))

 function tabf(){
     let tab= new Array();
     for(let i=0; i<10; i++) {
         tab[i]=entierAleatoire(1, 100)
     }

     return tab;


 }

 console.table(tabf())

function tabfalea(){
   
    let m = entierAleatoire(1,100) 
    let tableau =  new Array(m);
    for (let i=0 ; i < m ; i ++){
        tableau[i]=entierAleatoire(1,100)
    }
    return tableau
}

console.table(tabfalea())


/**
 * 1 .Vous avez deja fait une Fonction qui generer des nombre aleatoire dans un tableau 
 * EXO 1 Creer une fonction qui va utiliser la fonction deja creer precedemement en 1. vous aller renvoyer le nombre max du tableau
 * EXO 2 reer une fonction qui va utiliser la fonction deja creer precedemement en 1. On va imaginer qu on a des âges. La fonction renvoie
 * le nombre de personne majeur > 18 ANS
 * EXO 3. Creer une fonction qui va utiliser la fonction deja creer precedemement en 1.  On va imaginer qu on a des prix HT. La fonction renvoyé 
 * le tableau avec les même prix en TTC : prix * 1.2
 * 
*/

function maxtabalea(){
    let tab=tabf() // GENERE UN TABLEAU QUI EST DANS LA VARIABLE TAB
    console.table(tab)
    let max=maxtab(tab) // dans la variable max j ecris la variable max de mon tableau
    console.log(max);

    // return maxtab(tabf())
}
maxtabalea()


function nbmajeurs(){
    let toto=tabf()   // GENERER UN TABLEAU ALEATOIRE AVEC DES NOMBRES 1 ET 100

    console.table(toto)
    let tableausup18=new Array();

    let compteur=0
    // COMPTER LE NOMBRE AGE > 18

    // parcourir le tableau
    for(let i=0; i < toto.length; i ++ ) {

    // SI SUPERIEUR > 18 
       if (toto[i]>18) {
         compteur=compteur+1
         tableausup18[compteur]=toto[i]
       }
    }

    console.log(compteur);
    console.table(tableausup18)


}
nbmajeurs()

/**
 *  EXO 3. Creer une fonction qui va utiliser la fonction deja creer precedemement en 1. 
 *  On va imaginer qu on a des prix HT.
 *  La fonction va renvoyé  * le tableau avec les même prix en TTC : prix * 1.2
 */

function tab_ttc(){
    let tab=tabf() // generer un tableau
    console.table(tab)

    let tab_ttc=new Array() // CREATION D UN NOUVEAU TABLEAU

    for (let i = 0; i < tab.length; i ++ ){
        tab_ttc[i]=tab[i]*1.2
    }
    console.table(tab_ttc)
}
tab_ttc()