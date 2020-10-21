// Hamburger menu overlay uitklappen
var navHandle = document.querySelector(".handle");
var navBody = document.querySelector("nav");
var handleBarTop = document.getElementById("topBar");
var handleBarMiddle = document.getElementById("middleBar");
var handleBarBottom = document.getElementById("bottomBar");

navHandle.addEventListener('click', openNav);

function openNav() {
    console.log("Hamburgermenu klapt uit en veranderd icoon");
    navBody.classList.toggle("open");

    // Vormgeving streepjes > kruisje
    handleBarTop.classList.toggle("open");
    handleBarMiddle.classList.toggle("open");
    handleBarBottom.classList.toggle("open");
}


// Nav items openklappen
var navTelefoons = document.getElementById("telefoonnav");
var navTelefoonsInhoud = document.querySelector(".telefoonnavinhoud");
var plusje = document.querySelector(".verticalBar");

navTelefoons.addEventListener('click', openTelefoonNav);

function openTelefoonNav(event) {
    console.log("Telefoon nav moet nu openen/sluiten");

    // Maakt minnetje van plusje
    plusje.classList.toggle("extendnav");

    navTelefoonsInhoud.classList.toggle("show");
}



// Afbeeldingen veranderen
var afbeelding = document.querySelector(".detailpg>section:nth-of-type(1)>img");
var span1 = document.querySelector(".detailpg>section:nth-of-type(1)>div>span:nth-of-type(1)");
var span2 = document.querySelector(".detailpg>section:nth-of-type(1)>div>span:nth-of-type(2)");
var span3 = document.querySelector(".detailpg>section:nth-of-type(1)>div>span:nth-of-type(3)");
var span4 = document.querySelector(".detailpg>section:nth-of-type(1)>div>span:nth-of-type(4)");


function slide1() {
    if(kleurActief === "Grijs") {
        afbeelding.src = "images/nordproduct1.png";  
    }
    if(kleurActief === "Blauw") {
        afbeelding.src = "images/nordproduct1blue.png";
    }
    span1.classList.add("galleryactive");
    span2.classList.remove("galleryactive");
    span3.classList.remove("galleryactive");
    span4.classList.remove("galleryactive");
}
function slide2() {
    if(kleurActief === "Grijs") {
        afbeelding.src = "images/nordproduct2.png";  
    }
    if(kleurActief === "Blauw") {
        afbeelding.src = "images/nordproduct2blue.png";
    }
    span1.classList.remove("galleryactive");
    span2.classList.add("galleryactive");
    span3.classList.remove("galleryactive");
    span4.classList.remove("galleryactive");
}
function slide3() {
    if(kleurActief === "Grijs") {
        afbeelding.src = "images/nordproduct3.png";  
    }
    if(kleurActief === "Blauw") {
        afbeelding.src = "images/nordproduct3blue.png";
    }
    span1.classList.remove("galleryactive");
    span2.classList.remove("galleryactive");
    span3.classList.add("galleryactive");
    span4.classList.remove("galleryactive");
}
function slide4() {
    if(kleurActief === "Grijs") {
        afbeelding.src = "images/nordproduct4.png";  
    }
    if(kleurActief === "Blauw") {
        afbeelding.src = "images/nordproduct4blue.png";
    }
    span1.classList.remove("galleryactive");
    span2.classList.remove("galleryactive");
    span3.classList.remove("galleryactive");
    span4.classList.add("galleryactive");
}




// Switch active kleur select button
var buttonGrijs = document.querySelector(".detailpg>section:nth-of-type(3)>ul>li:nth-of-type(1)");
var buttonBlauw = document.querySelector(".detailpg>section:nth-of-type(3)>ul>li:nth-of-type(2)");
var kleurActief = "Grijs"

buttonBlauw.addEventListener('click', switchKleur);
buttonGrijs.addEventListener('click', switchKleur);

function switchKleur() {
    console.log("Kleur moet switchen")
    buttonGrijs.classList.toggle("selected");
    buttonBlauw.classList.toggle("selected");

    var blauwKleur = buttonBlauw.classList.contains("selected")
    var grijsKleur = buttonGrijs.classList.contains("selected")

    if(blauwKleur === true){
        afbeelding.src = "images/nordproduct1blue.png";
        span1.classList.add("galleryactive");
        span2.classList.remove("galleryactive");
        span3.classList.remove("galleryactive");
        span4.classList.remove("galleryactive");
        kleurActief = "Blauw"
    }
    if(grijsKleur === true){
        afbeelding.src = "images/nordproduct1.png";
        span1.classList.add("galleryactive");
        span2.classList.remove("galleryactive");
        span3.classList.remove("galleryactive");
        span4.classList.remove("galleryactive");
        kleurActief = "Grijs"
    }
    console.log(kleurActief)
}


// Switch actieve specs select button
var button12Gb = document.querySelector(".detailpg>section:nth-of-type(3)>ul:nth-of-type(2)>li:nth-of-type(1)");
var button8Gb = document.querySelector(".detailpg>section:nth-of-type(3)>ul:nth-of-type(2)>li:nth-of-type(2)");

button12Gb.addEventListener('click', switchGb);
button8Gb.addEventListener('click', switchGb);

function switchGb() {
    console.log("Geheugen moet switchen")
    button8Gb.classList.toggle("selected");
    button12Gb.classList.toggle("selected");
}   