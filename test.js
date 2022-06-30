/**
TAB= [23,34,54,34,45]

for (i=0;i<TAB.length;i++){
    console.log(TAB[i] + " - "   )
}


 * Fonction qui vont prendre en parametre un tableau qui retourne
 *  EXO 1 : le nombre d'éléments dans un tableau
 *  EXO 2 : la somme des éléments d'un tableau
 *  EXO 3 : l'élément maximum d'un tableau
 *  EXO 4 : l'élément minimum d'un tableau
 *  EXO 5 : Trouver le premier élément supérieur à 500
 * EXO 6  :  Trouver le premier élément supérieur à un nombre que vous allez definir
 *  BONUS : Copier les premiers éléments d'un tableau dont la somme fait au moins 500
 */

/**
 * BOUCLE 
 * ACCUMULATION
 * 
 * 
 * 1 ETAPE ECRIRE EN FRANCAIS CE QU IL FAUT FAIRE VOTRE METHODE POUR TROUVER LA SOLUTION
 * 2 ME L ENVOYE
 * 3 CODE
 */

function comptetab(tableau){
   let compteur=0;
   for (i=0; i<tableau.length;i++){
       compteur=compteur+1 // compteur++
   }
   return compteur
}


function sommetab(tableau){
    let result=0
    for(r=0;r<tab.length;r++){
        result=result+tab[r]
    }
    return result
}

function maxtab(Tableau){
    let REF_MAX=0
    for (let i=0; i < tab.length; i++){
        if ( Tableau[i] > REF_MAX    )  {  REF_MAX=Tableau[i]   }
    }
    return REF_MAX

  
}

function mintab(Tableau){
    let REF_MIN=Tableau[0]
    for (let i=0; i < tab.length; i++){
        if ( Tableau[i] < REF_MIN  ) {  REF_MIN=Tableau[i]  }
    }
    return REF_MIN
}

function supcinq(Tableau  , n ){
    for (let i=0;i<Tableau.length;i++ ){
        if ( Tableau[i]  > n   ) {  return Tableau[i]  }
    }
}

let tab=[234, 530, 502, 45,34,45, 99999999999999]
let tab2=["Robert","Jean","Axel",23]
console.log(comptetab(tab))
console.log(sommetab(tab))
console.log(maxtab(tab))
console.log(mintab(tab))
console.log(supcinq(tab, 1000))
/** 
 * MIN DU TABLEAU
 * 
 * REF_MIN=MAX(TABLEAU)
 * 
 * BOUCLE
 * 
 * SI VARIABLE LUE < REF_MIN   '{   MAJ REF_MIN  }
 * 
 * FIN BOUCLE
 * RETOURNE REF_MIN
 * 
 * 
 * MAX D UN TABLEAU
 * [234,45,34,45]
 * 
 * REF_MAX=0
 * BOUCLE DU TABLEAU
 *   SI LA VALEUR LU > REF_MAX alors on met a jours REF_MAX
 * FIN DE LA BOUCLE
 * RENVOIE REF_MAX
 * 
 */


/**
 * Fonction qui
 * 1 prend en parametre un nombre et qui va renvoyer vrai si il est positif  ou faux si il est negatif
 * 2 prend en parametre un nombre et qui va renvoyer vrai si il est pair  ou faux si il est impair
 * 3 prend en parametre une chaine de caractere et qui va renvoyer vrai si il est = à votre prenom
 * 4 prend en parametre une chaine de caractere et qui va renvoyer vrai si il est = au deuxieme parametre
 */



function ispositif(nb){
    if (nb > 0 ){
        return true;
    }
    else {
        return false;
    }
}

console.log(ispositif(4))
console.log(ispositif(-20))

function ispair(nb){
    if ((nb%2===0)) { return true }
    else { return false;}
}
console.log(ispair(4))
console.log(ispair(3))



function monprenom(prenom){
    if (prenom=="Yoel"){
        return true;
    }
    else {
        return false;
    }
}

console.log(monprenom("Yoel"))

function prenomtest(prenom, test){
    if (prenom==test){
        return true
    }
    else {
        return false
    }
}
console.log(prenomtest("yoel","yoel"))