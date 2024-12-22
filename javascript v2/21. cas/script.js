
// username = admin || admin == Admin
// password = 123456
// localStorage upisati "loggedIn" true

const loggedIn = localStorage.getItem("loggedIn");

if(loggedIn === null) {
    document.getElementById("loginForm").style.display = "block";
} else {
    document.getElementById("loggedInData").style.display = "block";
}

document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.reload();
});


document.getElementById("loginBtn").addEventListener("click", () => {

    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim();

    if(username !== "admin" || password !== "123456") {
        return alert("Niste uneli dobre podatke");
    }

    localStorage.setItem("loggedIn", true);
    window.location.reload();
});

