var modal3 = document.getElementById('myModal-3');


var btn3 = document.getElementById("btn-3");


var span3 = document.getElementsByClassName("close-3")[0];


btn3.onclick = function() {
    modal3.style.display = "block";
};


span3.onclick = function() {
    modal3.style.display = "none";
};


window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
};