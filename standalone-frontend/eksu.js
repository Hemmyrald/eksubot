function myfunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn1')) {
    var myDropdown = document.getElementById("myDropdown1");
    if (myDropdown.classList.contains('show1')) {
        myDropdown.classList.remove('show1');
        }
    }
}

function dropfunction() {
    document.getElementById("Dropdown").classList.toggle("show2");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn2')) {
    var myDropdown = document.getElementById("Dropdown");
        if (myDropdown.classList.contains('show2')) {
            myDropdown.classList.remove('show2');
        }
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}


const navToggle = document.querySelector('.navbar-toggle');
const navBar = document.querySelector('.nav');

navToggle.addEventListener('click', function () {
    navBar.style.display ='block';
})