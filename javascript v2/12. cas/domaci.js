// napraviti funkciju login
// Ako se unese username "admin" i lozinka "admin" vratiti true
// Ako se unese bilo sta drugo, ispisati false

function login(username, password)
{
    if(username.toLowerCase() === "admin" && password.toLowerCase() === "admin")
    {
        return true;
    }

    return false;
}

let result = login('adMiN', 'aDmin');
console.log(result)