
for(let i = 1; i <= 100; i++) {
    var div = document.createElement("div");

    if(i % 2 == 0) {
        div.className = "kvadrat parniKvadrat";
    } else {
        div.className = "kvadrat neparniKvadrat";
    }

    
    document.getElementById("blockHolder").append(div);
}

var brojKvadrata = document.getElementsByClassName('kvadrat').length;
for(let i = 0; i <= brojKvadrata; i++) {

    document.getElementsByClassName('kvadrat')[i].addEventListener('click', function() {
        this.style.backgroundColor = "black";
    });

}
