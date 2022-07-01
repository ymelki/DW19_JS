
/**
 * Lorsque on clique sur le bouton GO la texte de la div devient rouge
 */

document.getElementById("monboutton").addEventListener("click", changecouleur)

function changecouleur(){
    document.getElementById("body").style.background = "red";
    document.getElementById("madiv").style.color = "blue";
 
}