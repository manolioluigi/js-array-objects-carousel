//Creo array oggetto immagini
const imagesArray = [
    
    {
        immagine: "01.webp",
        titolo: "Spider-Man: Miles Morales",
        descrizione: "blablabla blablabla?"
    },
    {
        immagine: "02.webp",
        titolo: "Ratchet & Clank: Rift Apart",
        descrizione: "blablabla blablabla?"
    },
    {
        immagine: "03.webp",
        titolo: "Fortnite",
        descrizione: "blablabla blablabla?"
    },
    {
        immagine: "04.webp",
        titolo: "Stray",
        descrizione: "blablabla blablabla?"
    },
    {
        immagine: "05.webp",
        titolo: "Marvel's Avengers",
        descrizione: "blablabla blablabla?"
    }

];

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i].immagine}">
        <h2 class="titolo">${imagesArray[i].titolo}</h2>
        <p class="descrizione">${imagesArray[i].descrizione}</p>
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    circles[itemActive].classList.remove('active');
    items[itemActive].classList.remove('active');

    if(itemActive+1 == imagesArray.length){
        
        itemActive = 0;
        
        
    } else {   
        itemActive++;
    }

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');


});

prev.addEventListener('click', function(){

    circles[itemActive].classList.remove('active');
    items[itemActive].classList.remove('active');

    if(itemActive-1 == -1){
        
        itemActive = imagesArray.length-1;

    } else {
        
        itemActive--;
        
    }

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');


})

//funzione autoplay 
function autoCarousel(){
    circles[itemActive].classList.remove('active');
    items[itemActive].classList.remove('active');

    if(itemActive+1 == imagesArray.length){
        
        itemActive = 0;
        
        
    } else {   
        itemActive++;
    }

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
}

//funzione reverseAutoPlay
function reverseAutoCarousel(){
    circles[itemActive].classList.remove('active');
    items[itemActive].classList.remove('active');

    if(itemActive-1 == -1){
        
        itemActive = imagesArray.length-1;

    } else {
        
        itemActive--;
        
    }

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
}

// Autoplay

const autoPlay = document.querySelector('.autoplay');
const reverseAutoPlay = document.querySelector('.reverse');
const stopAutoPlay = document.querySelector('.stop');

let stoppaTutto = setInterval(autoCarousel, 3000);

autoPlay.addEventListener('click', function(){
    
    clearInterval(stoppaTutto);
    stoppaTutto = setInterval(autoCarousel, 3000);

});

reverseAutoPlay.addEventListener('click', function(){
    
    clearInterval(stoppaTutto);
    stoppaTutto = setInterval(reverseAutoCarousel, 3000);
   
});

stopAutoPlay.addEventListener('click', function(){
    
    clearInterval(stoppaTutto);

});

itemsSlider.addEventListener('mouseenter', function() {

    clearInterval(stoppaTutto);

});

itemsSlider.addEventListener('mouseleave', function() {

    stoppaTutto = setInterval(autoCarousel, 3000);

});