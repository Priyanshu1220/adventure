let move = document.getElementsByClassName("circle")[0]; 
document.addEventListener("mousemove", function(e){
    move.style.left = e.clientX + "px";
    move.style.top = e.clientY + "px";
});