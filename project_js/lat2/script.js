let slideIndex = 0;

const updateSlide = (n) => {
    slideIndex += n;
    showSlide(slideIndex);
}

const showSlide = (n) => {
    const slides = document.getElementsByClassName("slider-item");
    if (n > slides.length - 1) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length -1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    
}

showSlide(slideIndex);


function btnResultClick(){
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (email == '' || message == '') {
        alert("Email dan Message harus diisi");
        
    } else {

        if(regex.test(email))
        {
        alert("Isian sudah benar");    //The pop up alert for a valid email address
        }
        else
        {
        alert("email yang anda masukan INVALID");    //The pop up alert for an invalid email address
        }
    }

}

const accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
    this.classList.toggle("is-open");
    const panel =this.nextElementSibling;

    if (panel.style.display == "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
});

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = $(".myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function image(event)  {    
    modal.style.display = "block";
    modalImg.src = event.target.src;
    captionText.innerHTML = event.target.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}