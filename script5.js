function mafonction(){
   alert("vous avez cliqué sur le boutton ! ");
   document.getElementById("montexte").value="LA VALEUR QUI M INTERESSE  !"
   document.getElementById("monboutton").value="BOUTTON CLIQUE   !"
   document.getElementById("madiv").innerHTML="ma div a ete changé ! "
}

console.error(document.getElementById("montexte"))
console.error(document.getElementById("monboutton"))
console.error(document.getElementById("madiv"))

/**
 * 
 * 1. RECUPERER UN OBJET DE LA PAGE HTML 
 * document
 * RECUPERER UN DES CHAMP DE CETTE OBJET
 * getElementById("identifiantcorrespondant")
 * Modifier le html
 * .laproprietehtml = valeur // on affecte une valeur a cette propriete
 * 
 * 
 * Modifier le html d'une div on utilier innerHTML
 */

/**
 * EXO 1 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT BIENVENUE SUR LE BOUTTON
 * 2 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT CE QUI ECRIT SUR LE BOUTON
   3 Lorsqu on clique sur le bouton on affiche dans la div le contenue du champs texte

   4 on affiche dans la div le contenue du "Le texte contient : " champs texte
   5  on affiche dans la div le contenue du "Le prix est  : " champs texte La TVA est champs texte*1.2
 */



