var modal4 = document.getElementById('myModal-4');


var btn4 = document.getElementById("btn-4");


var span4 = document.getElementsByClassName("close-4")[0];


btn4.onclick = function() {
    modal4.style.display = "block";
};


span4.onclick = function() {
    modal4.style.display = "none";
};


window.onclick = function(event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
};