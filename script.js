var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contacttext = document.querySelector("#contacttext");


home.addEventListener("click", function(){
    textcontent();
    hometext.style.display = "block"
    //abouttext.style.display = "none"
    //contacttext.style.display = "none"
})
about.addEventListener("click", function(){
    textcontent();
    abouttext.style.display = "block"
   // hometext.style.display = "none"
   // contacttext.style.display = "none"
})
contact.addEventListener("click", function(){
    textcontent();
    contacttext.style.display = "block"
  //  abouttext.style.display = "none"
    //hometext.style.display = "none"
})
function textcontent(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
    
}