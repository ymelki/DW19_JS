/**
 * 
 * CREATION DE VARIABLE
 * x=3
 * 
 * 
 */

let x=3
var y=2
const z=7 
// a="test3"
function test(){
    let a="test"
}
let a="test2"

test()
console.log(a) // AFFICHE ?


/**
 * CREEZ UNE FONCTION QUI AURA DEUX PARAMETRE QUI VA CALCULER LA MOYENNE DE 2 NOMBRE
 * MOYENNE(12,14)
 * CREEZ UNE FONCTION QUI AURA DEUX PARAMETRE QUI VA CALCULER LA MOYENNE DE 3 NOMBRE
 * CREEZ UNE FONCTION QUI AURA DEUX PARAMETRE QUI VA CALCULER LA MOYENNE DE 4 NOMBRE
 */

 function moyenne2( nb1,nb2   ){
    
    let result=(nb1+nb2)/2
    return result
}

function moyenne3( nb1,nb2,nb3   ){
    
    let result=(nb1+nb2+nb3)/3
    return result
}

function moyenne4( nb1,nb2 , nb3 , nb4 ){
    
    let result=(nb1+nb2+nb3+nb4)/4
    return result
}
 
let monresultat= moyenne4(12,14,13,10) 
console.log(monresultat)


/**
 * Fonction qui me retourne la moyenne d'un nombre de note indefinie
 * moyenne4(12,14,13,10) => 12
 * moyenneindef(     ) => moyenne des 50 nombres X
 * envoyer un tableau en parametre
 * [  ,    ,    ,   ]
 */

//moyenneindef( tab )

let tab = [12,13,14,10,12];
console.log(tab[2])
console.table(tab) 


function moyenneindef(tab){
  let result=0
  for (let i=0; i<tab.length ; i++   ){
      result=result+tab[i]
  }
  result=result/tab.length
  return result
}
console.log(moyenneindef([12,14]))





