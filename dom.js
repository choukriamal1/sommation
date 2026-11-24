
////////////////////////////////exo1
let btn = document.getElementById("btn");
let liste = document.querySelector("#produits");
console.log(btn, liste);
let panier= document.getElementById("panier");
console.log(panier); //il affiche null puisque lelement n'existe pas d id panier

///////////////////////////////exo2

// document.getElementsByClassName("info") //get elements par s 
// cherche TOUS les éléments qui ont la classe info (sans le point)
//html collection // Il retourne une HTMLCollection :  une liste, même s’il y a 0 ou 1 élément.  Jamais null : une liste vide si rien []
// On lit un élément avec son numéro : infos[0] est le premier. 
// infos.length donne le nombre.
//Elle est « vivante » : si on ajoute un élément avec cette classe plus tard,  elle se met à jour toute seule.
//⚠ Pas de forEach sur une HTMLCollection : on utilise une boucle for (ou Array.from(infos).forEach(…)).

let produits = document.getElementsByClassName("produit");
console.log(produits.length);
console.log(produits[1]);
for(let i=0; i<produits.length; i++){
    console.log(produits[i].textContent);
};
//produits.textContent retourn NodeList et pas HTMLCollection comme produits

/////////////////////exo3
let ul = document.getElementsByTagName("li");
console.log(ul.length);
console.log(ul[length-1].textContent);
let liste = document.getElementById("produits");
//cherche les <li> seulement à l’intérieur de cette liste. 
let inter= inter.getElementsByTagName("li");
//???liste.children("ul");
console.log(inter.length);

let btn = document.getElementsByTagName("btn");
console.log(btn.length);

/////////////////////////exo4
//"#produits li" → un li dans #produits ; 
//document.querySelector("…")
//Il retourne : le PREMIER élément trouvé, 
// ou null si rien.

let titre = document.querySelector("#titre");
let produit = document.querySelector(".produit.promo");

let p=document.querySelector(".info");
console.log(produit.textContent);
let premier=document.querySelector(".produit");
let sold =document.querySelector(".solde");
//return null

///////////////////exo5
//document.querySelectorAll("…")
//Il retourne une NodeList : 
//Jamais null : une NodeList vide (length vaut 0) si rien.
//statique
//c’est une photo de la page au moment de l’appel, 
// elle ne se met pas à jour toute seule.


let produits=document.querySelectorAll(".produit");
produits.forEach((p)=>console.log(p.textContent));
let p=document.querySelectorAll("p");
console.log(p.length);
let solde=document.querySelectorAll(".solde").length;
console.log(solde);
//return une nodelist vide


// (aucun élément n’a cette classe) ?
//document.querySelector(".solde") return nodelist vide lrngth 0
//document.getElementsByClassName("produit")   //c'est du HTMLCollection 

//.forEach(…) seul en nodelist

//Quelle différence entre querySelector(".produit") et querySelectorAll(".produit") 
// (qu’est-ce que chacun retourne) ?
//=> selector all retourn tout element de meme class en nodelist
//  par contre l autre selector retourn le premier element 


//Qu’est-ce qui change entre getElementById("titre") et querySelector("#titre") ?
//juste l identifiant par # du selecteur en css

//Pourquoi document.querySelectorAll(".produit").textContent ne donne pas le texte des produits ?
//.textContent s'applique à un élément HTML et non à une NodeList
//il faut en premier preciser lee length puis par une loop forEach savoir le textcontent



//////////////exo11

//el.textContent est le texte d’un élément.
let btn1 =document.getElementById("btn");
console.log(btn1.textContent);
btn1.textContent="Promo du jour";
let produit = document.querySelector(".produit.promo");
produit.textContent="Souris -20%";
let paragraph=document.quedySelectorAll(".info");
paragraph.forEach((p)=>{
    p.textContent = "✓ " + p.textContent;
});


////////////////////exo12
//<em>super</em> s’affiche en italique 
//textContent affiche les balises comme du texte,   // innerHTML les transforme en éléments.
//Ne mets jamais dans innerHTML un texte tapé par un utilisateur : // il pourrait y glisser du code. // Pour du simple texte, textContent.
let listes = document.getElementById("produits");
console.log(listes.innerHTML);

let titre=document.getElementById("titre");
titre.innerHTML= "<strong>boutique</strong>";
listes.innerHTML += `<li class="produit">Casque</li>`;
let p = document.querySelectorAll(".info");
//querySelectorAll
p[0].textContent ="<em>Hi</em>";
p[1].innerHTML= `<em>Hi</em>`; 
//le premier s'affiche avec les balises comme texte et le deusieme comme element seulement

/////////////////exo13
let title = document.getElementById("titre");
title.style.color= "blue";
title.style.fontSize="40px";
let btn = document.getElementById("btn");
btn.style.backgroundColor="green";
btn.style.padding="10px";
btn.style.color ="white";
let products = document.querySelectorAll(".produit");
products.forEach((p)=>{
    p.style.fontSize="bold";
});

let paragraph = document.querySelectorAll(".info");
paragraph[1].style.display="none";
//NodeList donc il faut cibler par length 

//el.style.display = "none" cache l’élément ; = "" enlève le style qu’on avait mis.

//////////////////exo14
//!!!! j ai pas compris : el.className : toutes les classes dans une chaîne. // el.className = "carte" REMPLACE toutes les classes d’avant.?????
//====>className represente class="..." en entier. Si tu fais el.className = "carte", tu écrases toute la valeur précédente (comme titre.textContent = "..." écrase l'ancien texte). 
// classList est un objet avec des méthodes (add, remove, toggle, contains) qui modifie uniquement la classe visée sans toucher aux autres.
//el.classList.contains("promo") retourne true ou false
//En général on préfère classList : // on ne risque pas d’effacer les autres classes.
let promo= document.querySelector(".produit.promo");
console.log(promo.className);
promo.classList.add("red");
promo.classList.remove(".promo");
console.log(promo.classList.contains("promo"));
let btnn= document.querySelector("#btn");
btnn.classList.toggle("actif");
console.log(btnn.className);////donne actif
btnn.classList.toggle("actif");
console.log(btnn.className); //////donne "" toggle retire actif
btn.className = "gros"; //la classe actif si elle était là.   elle  l’enlève
////////////////////////exo15
//Pour chaque .produit, il faut utiliser forEach 
// (on ne peut pas faire product.classList.add(...) sur une NodeList
let titles=document.getElementById("titre");
titles.textContent="🔥 Grande promo";
titles.style.color("red");
let info =document.querySelector(".info");
info.innerHTML=`Jusqu’à <strong>-30%</strong> sur tout ! `;
let product = document.querySelectorAll(".produit");
product.forEach((p)=>{
    p.classList.add(".carte");
    p.textContent=p.textContent + " - 30%";});
let promos = document.querySelector(".produit.promo");
promos.style.backgroundColor="yellow";
let products = document.getElementById("produits");
product.innerHTML+=` <li class="produit">Webcam </li>`;
let btntext=document.querySelector("#btn");
btntext.innerHTML = `Voir les promos (${product.length})`;
//??????? utilise getElementById ou querySelectr sans conditon


ce que j'ai pas compris: est ce que il faut faire attention quand on utilise getElementById ou querySelectr et pour textContent qui fonctionne seulement avec HTMLCollection donc il est tjr avec une boucle selon le length d'element

//pas faire produits.textContent, product.classList.add(...) 
// ou paragraph.style.display = "none" directement sur la liste.
//  Il faut cibler un élément (ex: [0], [1]) 
// ou parcourir la liste avec une boucle


//???? text content 
//length.textContent

//À l'écrit (QCM / code sur papier) : Les pièges classiques sont la confusion entre getElementById("id") (sans #) et querySelector("#id") (avec #), la différence entre HTMLCollection (vivante, pas de forEach direct) et NodeList (statique, forEach direct), et l'écrasement des classes via className = "..." vs classList.add(...).

// À l'oral (justification de choix) : On te demandera souvent pourquoi tu utilises textContent plutôt que innerHTML (sécurité XSS quand des données viennent d'un utilisateur ou d'une API, et performance quand tu changes juste du texte) ou pourquoi tu préfères classList (maintenabilité et séparation CSS/JS).

// Dans tes projets (ex. : e-commerce / panier / listes dynamiques) : Tu vas constamment sélectionner des éléments, mettre à jour un compteur ((${items.length})), basculer un état visuel (classList.toggle("active") / classList.add(...)) et injecter des cartes ou lignes HTML.

//document.getElementById("titre") et document.querySelector("#titre") retournent exactement le même élément (ou null s'il n'existe pas).
//Tant que l'ID est unique, les deux retournent le même élément ; getElementById prend juste le nom de l'ID sans #, alors que querySelector prend un sélecteur CSS avec #

// el.className représente la chaîne de texte complète de l'attribut HTML class.

// Si tu fais el.className = "carte", tu remplaces tout ce qu'il y avait avant dans class (ex. : "produit promo" devient "carte").

// C'est pour ça qu'on dit qu'il est « destructif » si on veut juste ajouter une classe.

// el.classList est un objet dédié à la manipulation des classes une par une add remove toogle ou contains → renvoie true ou false

// HTMLCollection vs NodeList : HTMLCollection est vivante et n'a pas .forEach() direct ; NodeList (via querySelectorAll) est statique et a .forEach().

// className = "..." écrase toutes les classes ; classList modifie class par class en sécurité.


//DOM signifie Document Object Model. //C'est une représentation de notre page HTML sous forme d'un arbre d'objets (Tree).
//JavaScript ne travaille pas directement avec le fichier HTML comme un simple texte. Il utilise les objets du DOM pour accéder aux éléments.

//window représente la fenêtre du navigateur (plus précisément le contexte de navigation de la page).

// Il contient plusieurs informations et fonctionnalités :
// - La taille de la fenêtre.
// - L'URL de la page via location.
// - L'historique de navigation.
// - Les méthodes comme alert(), setTimeout().
// - L'objet document.

//