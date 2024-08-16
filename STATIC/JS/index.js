document.addEventListener('DOMContentLoaded', () => {
    console.log("Homepage loaded");
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");
btn.onclick = function() {
    modal.style.display = "block";
    }
span.onclick = function() {
    modal.style.display = "none";
    }
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }