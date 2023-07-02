
function enter() {


    var enter = document.getElementById("enter");
    enter.classList.add("hide");

    // BODY

    var body = document.getElementById("body");
    body.style.height = "fit-content";


    // HEADER
    var navBar = document.getElementById("navBar");
    navBar.classList.remove("hide");
    navBar.classList.add("animacija");
    var header = document.getElementById("header");
    header.classList.remove("hide");

    // MAIN
    var mainContainer = document.getElementById("mainContainer");
    mainContainer.classList.remove("hide");
    mainContainer.classList.add("container");
    mainContainer.classList.add("mainContainer");
    var productNaslov = document.getElementById("productNaslov");
    productNaslov.classList.remove("hide");

    // CONTAINERS

    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    var container3 = document.getElementById("container3");


    container1.classList.remove("hide");
    container2.classList.remove("hide");
    container3.classList.remove("hide");



    // FOOTER

    var footer = document.getElementById("footer");
    footer.classList.remove("hide");
    footer.classList.add("footerStyle");
    var division = document.getElementById("oneDivision");
    division.classList.remove("hide");
    var loginButton = document.getElementById("loginButton");
    loginButton.classList.remove("hide");
}

// SLIDESHOW ---------------------------------
const slika1 = document.getElementById("slika1");
const slika2 = document.getElementById("slika2");
const slika3 = document.getElementById("slika3");
const slika4 = document.getElementById("slika4");
const next = document.getElementById("next");
const previous = document.getElementById("previous");
const slika = document.getElementsByClassName("slika");

let currentSlide = 0;
slika1.currentSlide;
slika1.classList.add("slikaSlide")
slides = [slika1, slika2, slika3, slika4];


// NEXT -------------------------------------

next.addEventListener("click", function () {


    if (currentSlide == 0) {


        currentSlide += 1
        slika1.classList.remove("slikaSlide");
        slika2.classList.add("slikaSlide");
        slika2.classList.add("animacija4");
        return
    }

    if (currentSlide == 1) {

        currentSlide += 1
        slika3.classList.add("slikaSlide");
        slika3.classList.add("animacija4");
        slika2.classList.remove("slikaSlide");
        return
    }

    if (currentSlide == 2) {

        currentSlide += 1
        slika2.classList.remove("slikaSlide");
        slika3.classList.add("slikaSlide");
        slika3.classList.add("animacija4");
        return

    }

    if (currentSlide == 3) {

        slika4.classList.add("slikaSlide");
        slika4.classList.add("animacija4");
        slika3.classList.remove("slikaSlide");
        return

    }


})

// PREVIOUS -------------------------------------

previous.addEventListener("click", function () {


    if (currentSlide == 1) {


        currentSlide -= 1
        slika2.classList.remove("slikaSlide");
        slika1.classList.add("slikaSlide");
        return
    }

    if (currentSlide == 2) {

        currentSlide -= 1
        slika2.classList.add("slikaSlide");
        slika3.classList.remove("slikaSlide");
        return
    }

    if (currentSlide == 3) {

        currentSlide -= 1
        slika4.classList.remove("slikaSlide");
        slika3.classList.add("slikaSlide");
        return

    }


})




// SCROLL ANIMATION  -------------------------------------




const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {


        if (entry.isIntersecting) {

            entry.target.classList.add("show");
            return


        }

        else {


            entry.target.classList.remove("show");



        }



    });
});


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

