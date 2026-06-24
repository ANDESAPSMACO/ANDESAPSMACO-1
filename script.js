/* =====================================================
   ANDESAPS-MAC OFFICIAL SYSTEM
   SCRIPT.JS - FINAL CLEAN VERSION
===================================================== */

/* ===============================
   LANGUAGE SYSTEM
================================ */

function setLang(lang){

document.querySelectorAll('[data-fr]').forEach(el=>{

el.style.display = (lang==='fr') ? 'block' : 'none';

});

document.querySelectorAll('[data-sw]').forEach(el=>{

el.style.display = (lang==='sw') ? 'block' : 'none';

});

document.querySelectorAll('[data-en]').forEach(el=>{

el.style.display = (lang==='en') ? 'block' : 'none';

});

document.querySelectorAll('[data-ar]').forEach(el=>{

el.style.display = (lang==='ar') ? 'block' : 'none';

});

document.querySelectorAll('[data-ur]').forEach(el=>{

el.style.display = (lang==='ur') ? 'block' : 'none';

});

}

/* ===============================
   COUNTERS (MEMBERS / DONATIONS)
================================ */

let members = 0;
let donations = 0;

function addMember(){

members++;
document.getElementById("totalMembers").innerText = members;

localStorage.setItem("members", members);

}

function addDonation(amount){

donations += amount;

document.getElementById("totalDonations").innerText = donations + " FC";

localStorage.setItem("donations", donations);

}

/* Load saved data */

window.onload = function(){

if(localStorage.getItem("members")){
members = parseInt(localStorage.getItem("members"));
document.getElementById("totalMembers").innerText = members;
}

if(localStorage.getItem("donations")){
donations = parseInt(localStorage.getItem("donations"));
document.getElementById("totalDonations").innerText = donations + " FC";
}

}

/* ===============================
   SIMPLE SLIDER
================================ */

let slideIndex = 0;

function showSlides(){

let slides = document.querySelectorAll(".slide");

for(let i=0;i<slides.length;i++){
slides[i].style.display = "none";
}

slideIndex++;

if(slideIndex > slides.length){
slideIndex = 1;
}

if(slides[slideIndex-1]){
slides[slideIndex-1].style.display = "block";
}

setTimeout(showSlides, 3000);

}

showSlides();

/* ===============================
   FORM HANDLING (MEMBERSHIP)
================================ */

function submitMember(){

alert("Merci! Membre enregistré avec succès.");

addMember();

}

/* ===============================
   DONATION FORM
================================ */

function donate(amount){

alert("Merci pour votre don de " + amount + " FC");

addDonation(amount);

}

/* ===============================
   BASIC ERROR FIX
================================ */

console.log("ANDESAPS-MAC SYSTEM LOADED SUCCESSFULLY");
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  // unaweza kuongeza button kwenye UI yako
  console.log("App ready to install");
});

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      deferredPrompt = null;
    });
  }
}