function mafonction(){
   alert("vous avez cliqué sur le boutton ! ");
   document.getElementById("montexte").value="LA VALEUR QUI M INTERESSE  !"
   document.getElementById("monboutton").value="BOUTTON CLIQUE   !"
   document.getElementById("madiv").innerHTML="ma div a ete changé ! "
}
 
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
 * EXO 2 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT CE QUI EST ECRIT SUR LE BOUTON
   EXO 3 Lorsqu on clique sur le bouton on affiche dans la div le contenue du champs texte

   EXO 4 on affiche dans la div le contenue du "Le texte contient : " champs texte
   EXO 5  on affiche dans la div le contenue du "Le prix est  : " champs texte La TVA est champs texte*0.2
 */

   // EXO 1 & 2 & 3 
   function alert2(){
       alert("Bienvenue sur le boutton ! ")
       alert(    document.getElementById("boutton").value     )
       document.getElementById("madiv").innerHTML=document.getElementById("montexte").value
       document.getElementById("madiv").innerHTML="Le texte contient : " +  document.getElementById("montexte").value
       RESULT=parseInt(document.getElementById("montexte").value) *0.2
       document.getElementById("madiv").innerHTML="Le prix est  : " +  parseInt(document.getElementById("montexte").value) + "La TVA est   " + RESULT
   }

   // EXO 2
   

/**
 * EXO 6
 * ECRIRE une fonction qui affiche dans la div ce qu il y a dans le champs texte .
 * Cette fonction se declenche au moment ou vous tapez du texte dans le champs texte
 */

