/* JEU DU PLUS OU MOINS
* 
* 
* 1 AU CHARGEMENT DE LA PAGE
* ON A UN NOMBRE ALEATOIRE QUI EST TROUVE
* 
* 2 AU CLIQUE SUR LE BOUTON GO 
* L ELEMENT HTML DU TEXTE EST ANALYSE PARSINT ON VERIFIE SI IL EST = AU NOMBRE ALEATOIRE OK VERT
*                                                                  > CEST MOINS ROUGE
*                                                                  < CEST PLUS ROUGE
* 
* UNE DIV INDIQUE L ENSEMBLE DES REPONSES
* 
* AU BOUT DE 10 FOIS IL VOUS MARQUE GAME OVER
* 
*/


// 1 GENERER MON NOMBRE ALEATOIRE



function entierAleatoire(min, max) {
    let nb= Math.floor(Math.random() * (max - min + 1)) + min
    console.log(nb) 
    return nb;
}
 
/**
 * AU CHARGEMENT DE LA PAGE
* ON A UN NOMBRE ALEATOIRE QUI EST TROUVE
 */
    var aleatoire=entierAleatoire(1,100)
    var compteur =10 

function reinitialiser(){
    document.getElementById("monboutton").disabled=false
    document.getElementById("madiv").innerHTML=""
    document.getElementById("madiv2").innerHTML="reponse propose : "
    document.getElementById("madiv3").innerHTML=""
    document.getElementById("montexte").value=""
    var aleatoire=entierAleatoire(1,100)
    compteur=10 
 }
 
function cas_3(){
    document.getElementById("madiv").style.background="red"
    document.getElementById("madiv").innerHTML=" JEU TERMINE ! "
    document.getElementById("monboutton").disabled=true
    document.getElementById("madiv3").innerHTML="<input type='button' id='reset' value='redemarer le jeu'>"
    document.getElementById("reset").addEventListener("click", reinitialiser)
} 

function check(){
    console.log(compteur)
    // RECUPERER L ELEMENT DU TEXTE
    nb_user=parseInt(document.getElementById("montexte").value)
    console.log(nb_user);

    // stocké dans une div les infos
    document.getElementById("madiv2").innerHTML += " " + document.getElementById("montexte").value
 
        if (  nb_user == aleatoire ) {
            document.getElementById("madiv").style.background="green"
            document.getElementById("madiv").innerHTML=" BIEN JOUE ! "
            console.log("OK")
         }



       if (  nb_user > aleatoire ) {
            document.getElementById("madiv").style.background="red"
            document.getElementById("madiv").innerHTML=" c 'est moins ! "
            console.log("c 'est moins ")
            compteur--
        }

        if (  nb_user < aleatoire ) {
            document.getElementById("madiv").style.background="red"
            document.getElementById("madiv").innerHTML=" c 'est plus ! "
            console.log("c 'est plus ")
            compteur--
        }

        if (compteur <= 1) {
            cas_3()
        }

        
        
    }
    
/**
 * 1 . COMPLETER FONCTION QUI CHECK 
 *   1 . QUI VA ECRIRE DANS LA DIV LORSQUE C EST > < = L INFORMATION 
 *   2 . CHANGER DE COULEUR DANS LA DIV . ROUGE KO / VERT OK
 * 
 * 2  1. ECRIRE DANS LA DIV1 LES DIFFERENTS NOMBRES ENTRE PAR LE USER
 *    2. AU BOUT DE 10 NOMBRES => GAME OVER LE JEU NE MARCHE PLUS 
 * 
 * 3 LORSQUE ON ATEINT LES 10 CHANCES ON A UN NOUVEAU BOUTON QUI REINITIALISE LE JEU    
 * EFFACE LES DIV
 * REMET ACTIF NOTRE BOUTON
 * COMPTEUR = 0
 * REINITIALISER NOTRE VARIABLE ALEATOIRE
 * ...
 */

// window.addEventListener("load" , alea)

document.getElementById("monboutton").addEventListener("click", check)



