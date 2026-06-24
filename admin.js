function login(){

let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
let message=document.getElementById("message");

if(username==="admin" && password==="12345"){

message.style.color="green";
message.innerHTML="Connexion réussie...";

setTimeout(function(){

window.location="dashboard.html";

},1000);

}else{

message.style.color="red";
message.innerHTML="Nom d'utilisateur ou mot de passe incorrect.";

}

}const form=document.getElementById("memberForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;

let table=document.querySelector("#memberTable tbody");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;
row.insertCell(1).innerHTML=email;
row.insertCell(2).innerHTML=phone;

form.reset();

});

}const projectForm=document.getElementById("projectForm");

if(projectForm){

projectForm.addEventListener("submit",function(e){

e.preventDefault();

let name=document.getElementById("projectName").value;

let description=document.getElementById("projectDescription").value;

let table=document.querySelector("#projectTable tbody");

let row=table.insertRow();

row.insertCell(0).innerHTML=name;

row.insertCell(1).innerHTML=description;

projectForm.reset();

});

}const newsForm = document.getElementById("newsForm");

if(newsForm){

newsForm.addEventListener("submit", function(e){
e.preventDefault();

let title = document.getElementById("title").value;
let message = document.getElementById("message").value;

let container = document.getElementById("newsList");

let card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h3>${title}</h3>
<p>${message}</p>
`;

container.prepend(card);

newsForm.reset();

});

}console.log("ANDESAPS-MAC Admin System Loaded");

// ========== MEMBERS ==========
const memberForm = document.getElementById("memberForm");

if(memberForm){
memberForm.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

let table = document.querySelector("#memberTable tbody");

let row = table.insertRow();
row.insertCell(0).innerHTML = name;
row.insertCell(1).innerHTML = email;
row.insertCell(2).innerHTML = phone;

memberForm.reset();
});
}

// ========== PROJECTS ==========
const projectForm = document.getElementById("projectForm");

if(projectForm){
projectForm.addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("projectName").value;
let desc = document.getElementById("projectDescription").value;

let table = document.querySelector("#projectTable tbody");

let row = table.insertRow();
row.insertCell(0).innerHTML = name;
row.insertCell(1).innerHTML = desc;

projectForm.reset();
});
}

// ========== NEWS ==========
const newsForm = document.getElementById("newsForm");

if(newsForm){
newsForm.addEventListener("submit", function(e){
e.preventDefault();

let title = document.getElementById("title").value;
let message = document.getElementById("message").value;

let container = document.getElementById("newsList");

let card = document.createElement("div");
card.className = "card";

card.innerHTML = `
<h3>${title}</h3>
<p>${message}</p>
`;

container.prepend(card);

newsForm.reset();
});
}