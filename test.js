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

let tab=[234,45,34,45,99999999999999]
console.log(comptetab(tab))
console.log(sommetab(tab))
console.log(maxtab(tab))

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

