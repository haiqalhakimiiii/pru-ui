// Get id for each div
var start = document.getElementById("start");
var first = document.getElementById("first");
var second = document.getElementById("second")
var third = document.getElementById("third")
var end = document.getElementById("end")

// Set the div to show and hide by default
start.style.display = "block"
first.style.display = "none"
second.style.display = "none"
third.style.display = "none"
end.style.display = "none"

// This function will make the div show or hide
function firstDisplay(){
   if(first.style.display == "none") {
      first.style.display = "block";
   }
   else{
      first.style.display = "none";
   }
   start.style.display = "none"
}

function secondDisplay(){
   if(second.style.display == "none") {
      second.style.display = "block";
   }
   else{
      second.style.display = "none";
   }
   first.style.display = "none"
}

function thirdDisplay(){
   if(third.style.display == "none") {
      third.style.display = "block";
   }
   else{
      third.style.display = "none";
   }
   second.style.display = "none"
}

function endDisplay(){
   if(end.style.display == "none") {
      end.style.display = "block";
   }
   else{
      end.style.display = "none";
   }
   third.style.display = "none"
}
