
/**
 * Lorsque on clique sur le bouton GO la texte de la div devient rouge
 * 
 * EXO 1 : Lorsque on clique sur le bouton GO le fond de la page change de la 
 * couleur de facon aleatoire
 * bleu rouge jaune violet
 * 
 * 1 CODER EN FRANCAIS
 * 2 EN CODE
 */
 function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }

   let tab_couleur=["yellow","red","black","green","white" , "purple"]

   // LENGT 5 
/*function changecouleur(){
    document.getElementById("body").style.background = "red";
    document.getElementById("madiv").style.color = "blue";
 
}*/

function changecouleur(){ 
    document.getElementById("body").style.background =   tab_couleur  [  entierAleatoire(0, tab_couleur.length - 1 )  ]  
   }
   

   function changecouleur(){ 
    let couleur=tab_couleur  [  entierAleatoire(0, tab_couleur.length - 1 )  ] 
    
    document.getElementById("body").style.background =   couleur
   }
   


document.getElementById("monboutton").addEventListener("click", changecouleur)



/**
 * 
 * document.body.style.color=TABLEAU[ alea( 0  ,  TABLEAU.LENGTH  )  ]
 * 
 * TABLEAU DE COULEUR ( RED , YELLOW , ORANGE, ) 
 * 
 * UNE FONCTION QUI PARCOURS LE TABLEAU
 * 
 * LORSQUE ON CLIQUE SUR LE BONTON GO
 * CA VA DECLENCHER LA FONCTION QUI VA CHOISIR DE FACON
 * ALEATOIRE UN INDICE DU TABLEAU JUSQU A LA TAILLE 
 * DU TABLEAU ET ON APPLIQUE 
 * document.getElementById("body").style.background = TAB[alea];
 * LE TABLEAU QUI VA CHANGER LE STYLE 
 * LA COULEUR 
 * 
 * 
 */

