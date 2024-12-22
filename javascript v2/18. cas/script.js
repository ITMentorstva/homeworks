
const apiUrl = "http://www.omdbapi.com/";
let apiKey = "f7fd3e4";


document.getElementById("searchMovie").addEventListener("click", async () => {

    let movieName = document.getElementById("movieTitle").value.trim();
    let movieYear = document.getElementById("movieYear").value.trim();
    let videoType = document.getElementById("videoType").value;
    let searchError = document.getElementById("searchError");

    let queryArgs = [
        "s="+movieName,
        "type="+videoType
    ];

    searchError.innerText = "";

    if(movieName === '') return alert("Morate uneti ime filma");

    let response = {};

    if(movieYear !== '') {
        queryArgs.push("year="+movieYear)
    }

    response = await callOMDbApi(queryArgs.join('&'));


    if(response.Response === "False") {
        searchError.innerText = response.Error;
    } else {
        const movieList = document.getElementById("movieList");

        for(let movie of response['Search']) {
            appendMovie(movieList, movie);
        }
    }

});



let terminatorResponse = await callOMDbApi("t=Terminator");
console.log(terminatorResponse);

let homeAloneSearch = await callOMDbApi("s=Home Alone&y=1990");
console.log(homeAloneSearch);

async function callOMDbApi(params) {
    const url = apiUrl+"?apiKey="+apiKey+"&"+params;

    const response = await fetch(url);

    return await response.json();
}

function appendMovie(movieList, movie) {
    let movieHolder = document.createElement("a");
    movieHolder.classList = "movieHolder";
    movieHolder.setAttribute('href', 'movie.html?id='+movie.imdbID)

    let movieTitle = document.createElement("h3");
    movieTitle.innerText = movie.Title;

    let moviePoster = document.createElement("img");
    moviePoster.setAttribute('src', movie.Poster);

    let movieType = document.createElement("p");
    movieType.innerText = movie.Type;

    let movieYear = document.createElement("p");
    movieYear.innerText = movie.Year;

    movieHolder.append(movieTitle, moviePoster, movieType, movieYear);

    movieList.append(movieHolder);
}