var modal = document.getElementById('myModal');


var btn = document.getElementById("btn-1");


var span = document.getElementsByClassName("close-1")[0];


btn.onclick = function() {
    modal.style.display = "block";
};


span.onclick = function() {
    modal.style.display = "none";
};


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};