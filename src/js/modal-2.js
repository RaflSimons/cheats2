var modal2 = document.getElementById('myModal-2');


var btn2 = document.getElementById("btn-2");


var span2 = document.getElementsByClassName("close-2")[0];


btn2.onclick = function() {
    modal2.style.display = "block";
};


span2.onclick = function() {
    modal2.style.display = "none";
};


window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
};