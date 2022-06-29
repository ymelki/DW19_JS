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
 * 
 * EXO 7
 *  * CREEZ UNE FONCTION QUI AFFICHE  DANS LA DIV UN NUMERO QUI S INCREMENTE DE 1 A CHAQUE FOIS QUE LON CLIQUE SUR LE BOUTON
 * 
 *  * EXO 8
 *  * CREEZ UNE FONCTION QUI AFFICHE DANS LA DIV SI L AGE DANS LE TEXTE EST > 18 OU < EN ECRIVANT MAJEUR OU MINEUR
 */
// EX 6
function mafonction2(){
    document.getElementById("madiv").innerHTML=document.getElementById("montexte").value
}
document.getElementById("montexte").addEventListener(  "input", mafonction2       )

document.getElementById("monboutton").addEventListener(  "click", mafonction       )
document.getElementById("boutton").addEventListener(  "click", alert2       )

// CREEZ UNE FONCTION QUI AFFICHE  DANS LA DIV UN NUMERO QUI S INCREMENTE DE 1 A CHAQUE FOIS QUE LON CLIQUE SUR LE BOUTON
document.getElementById("boutton3").addEventListener( "click" , mafonction3  )
 
 
function mafonction3() {
    
    compteur=parseInt(document.getElementById("madiv2").innerHTML);
    compteur=(compteur*2);
    document.getElementById("madiv2").innerHTML=compteur;
 
}

//CREEZ UNE FONCTION QUI AFFICHE DANS LA DIV SI L AGE DANS LE TEXTE EST > 18 OU < EN ECRIVANT MAJEUR OU MINEUR
/**
 * CREEZ UNE FONCTION 
 * 
 * 1. REFLECHIR A LA QUESTION
 * 2. QUEL EST L EVENEMENT ?  CLICK
 * 3. SUR QUEL ELEMENT HTML L EVENEMENT SE DECLENCHE ? BOUTON
 * 4. CODEZ LE ADDEVENTLISTNER
 * 5. CREEZ LA FONCTION CORRESPONDANT
 * 6. QUELS SONT / EST L ELEMENT HTML DONT VOUS AVEZ BESOIN 
 * 6. APPLIQUER SUR LES CHAMPS HTML CE QUI EST DEMANDE
 * QU EST CE QUE JE VEUX RECUPERER / BESOIN
 * TRAITER SOUS FORME DE VARIABLE
 * CIBLER => AFFICHER
 * 
 */


document.getElementById("boutton4").addEventListener("click",   mafonction4   )

function mafonction4(){
   // 1 RECUPERER LE CHAMPS INPUT AGE DANS LA VARIABLE AGE
    age= parseInt(document.getElementById("age").value)
 

   // 2 CONDITION TESTER SI L AGE EST > ou < 
   if (age > 18 ) {
       document.getElementById("madiv").innerHTML="vous etes majeur"
       console.error("vous etes majeur")
   }
   else {
    document.getElementById("madiv").innerHTML="vous etes mineur"

       console.error("vous etes mineur")
   } 

}

/**
 * CREEZ UN CHAMP TEXTE, UN BOUTON, UNE DIV 
 * DANS LE CHAMPS TEXTE SI ON INSERE UN NOMBRE EX : 4
 * LORSQU ON CLIQUE
 * DANS LA DIV ON A LA TABLE DE MULTIPLICATION CORRESPONDANTE : TABLE DE 4 
 */
document.getElementById("multiplication_boutton").addEventListener("click", multuplication_fonction)

function multuplication_fonction(){
    // 1. RECUPERER CE QUI A DANS L INPUT TEXTE  
    numero=parseInt(document.getElementById("multiplication_texte").value)
    console.error(numero)



    // 2. MODIFIER LA DIV
    document.getElementById("multiplication_div").innerHTML="Table de " + numero
 
    // 3. MULTIPLICATION AVEC LA BOUCLE FOR
    for (i=1;i<10;i++){
        document.getElementById("multiplication_div").innerHTML+="<br />" + numero+" * "+ i + " = " + (numero * i ) 
        console.error(i)
    }
    

}