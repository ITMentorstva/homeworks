/**
 * https://dummyjson.com/recipes?sortBy=name&order=asc
 * GET: https://dummyjson.com/login?username=toma&password=12345
 * POST: https://dummyjson.com/login (username: toma, password: 12345)
 *
 * MiddleMan Attack -> POST(https://dummyjson.com/login)
 *
 * Registracija, login, password reset, kupovine
 * OSETLJIVI PODACI = POST
 *
 * https (s = secure)
 * http
 *
 * HTTPS = SSL Sertificate
 *
 *
 * POST = {name: "Toma", password: "12345"}
 *      => HTTP: {name: "Toma", password: "12345"}
 *      => HTTPS: 0dafc5c479d358eefaff7250007f70c78a75c0ae5c2669759322961b5b174965
 *          SHA256
 */

for(let i = 18; i <= 100; i++) {
    let ageOption = document.createElement("option");
    ageOption.innerText = i;

    document.getElementById("age").append(ageOption);
}

document.getElementById("registerButton").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let age = document.getElementById("age").value;

    if(name.trim() === "" || lastName.trim() === "") {
        alert("Morate uneti sve podatke");
        return;
    }

    register(name, lastName, age);

});

document.getElementById("delete").addEventListener("click", function() {

    let apiUrl = 'https://dummyjson.com/users/'+this.getAttribute('userid');

    fetch(apiUrl, {
       method: "DELETE"
    })
        .then(result => result.json())
        .then(function(data) {
            console.log(data);
        })

});

function register(name, lastName, age) {
    fetch('https://dummyjson.com/users/add', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: name,
            lastName: lastName,
            age: age
        })
    })
        .then(response => response.json())
        .then(function(data) {

            let deleteButton = document.getElementById("delete");
            deleteButton.setAttribute("userId", data.id);
            deleteButton.removeAttribute("hidden");

            alert("Uspesno ste se registrovali sa imenom "+data.firstName)
        })
}


fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30,
    })
})
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
    })