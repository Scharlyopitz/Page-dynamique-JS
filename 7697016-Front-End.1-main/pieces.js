// liaison avec le fichier json
const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();



function hoomyGod(pieces){
for (let i = 0; i < pieces.length; i++) {
    


// creation des balises
const article = pieces[i];
const sectionFiches = document.querySelector(".fiches");

const pieceElement = document.createElement("article");

const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";

const stockElement =  document.createElement("p");
stockElement.innerText = article.disponibilité;
if (article.disponibilité == false){
    stockElement.innerText = "Rupture de stock";
}else{
    stockElement.innerText = "En stocks";
}
    
    // Rattachement des balises au DOM
    sectionFiches.appendChild(pieceElement);
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement)
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement)
    pieceElement.appendChild(stockElement)
    pieceElement.appendChild(imageElement);
}
}

hoomyGod(pieces)
    


// Création des boutons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
    const pieceOrdonnes = Array.from(pieces);
    pieceOrdonnes.sort(function (a,b) {
        return a.prix - b.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    hoomyGod(pieceOrdonnes);
    console.log(pieceOrdonnes)
});


const boutonFilter = document.querySelector(".btn-filtrer");

boutonFilter.addEventListener("click", function(){
    const piecesFilter = pieces.filter(function(piece){
        return piece.prix <= 35;
    });
    document.querySelector(".fiches").innerHTML = "";
    hoomyGod(piecesFilter);
    console.log(piecesFilter);
})


const boutonDescription = document.querySelector(".btn-description");

boutonDescription.addEventListener("click", function(){
    const piecesDescprition = pieces.filter(function(description){
        return description.description;
    })
    document.querySelector(".fiches").innerHTML = "";
    hoomyGod(piecesDescprition);
    console.log(piecesDescprition);
})


const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function(){
    const pieceDesordonnes = Array.from(pieces);
    pieceDesordonnes.sort(function(a,b){
        return b.prix - a.prix;
    })
    document.querySelector(".fiches").innerHTML = "";
    hoomyGod(pieceDesordonnes);
    console.log(pieceDesordonnes);
})

