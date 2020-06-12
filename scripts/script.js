var mainNav = document.getElementById('mainNav');
var scrollProgress = document.getElementById('scrollProgress');
var gotoTop = document.getElementById('gotoTop');
var theme = document.getElementById('theme');
const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        mainNav.style.backgroundColor = 'rgba(0,0,0,1)';
        this.scrollProgress.style.display = 'block';
        this.gotoTop.style.opacity = 1;
        this.theme.style.opacity = 1;

    } else {
        mainNav.style.backgroundColor = 'rgba(0,0,0,0)';
        this.scrollProgress.style.display = 'none';
        this.gotoTop.style.opacity = 0;
        this.theme.style.opacity = 0;
    }
};

theme.addEventListener("click", function (){
    if(document.body.classList.contains("invertBody")){
        this.style.backgroundColor = "#000";
        this.firstChild.src = "images/gearicon.svg";
        document.body.classList.remove("invertBody");
    }
    else {
        this.style.backgroundColor = "#fff";
        this.firstChild.src = "images/gearicon-dark.svg";
        document.body.classList.add("invertBody");
    }
});

document.onscroll = function() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
}


function responsiveNav() {
    if (mainNav.className === "topnav") {
        mainNav.className += " responsive";
    } else {
        mainNav.className = "topnav";
    }
}

function contactSubmit(e, thisForm) {
    e.preventDefault();
    var name = thisForm.name.value;
    var email = thisForm.email.value;
    var message = thisForm.message.value;
    var nameerror = document.getElementById('nameerror');
    var emailerror = document.getElementById('emailerror');
    var msgerror = document.getElementById('msgerror');
    var error = false;
    if (!name) {
        nameerror.innerHTML = "Fullname is required.";
        nameerror.nextElementSibling.style.border = "1px solid red";
    } else {
        nameerror.innerHTML = "";
        nameerror.nextElementSibling.style.border = "1px solid black";
    }
    if (!email) {
        emailerror.innerHTML = "Email is required.";
        emailerror.nextElementSibling.style.border = "1px solid red";
        error = true;
    } else if (!email.match(emailpattern)) {
        emailerror.innerHTML = "Email is not valid.";
        emailerror.nextElementSibling.style.border = "1px solid red";
        error = true;
    } else {
        emailerror.innerHTML = "";
        emailerror.nextElementSibling.style.border = "1px solid black";
    }
    if (!message) {
        msgerror.innerHTML = "Message is required.";
        msgerror.nextElementSibling.style.border = "1px solid red";
        error = true;
    } else {
        msgerror.innerHTML = "";
        msgerror.nextElementSibling.style.border = "1px solid black";
    }
    if (!error) {
        alert('Contact Message Sent');
    }
}