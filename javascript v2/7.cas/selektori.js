

/**
 * - getElementById -> prosledite ID, dobijete element
 * - getElementByClassName
 *      -> Prosledite klasu i dobijete array sa elementima
 *      -> Vraca nam array sa elementima
 */
let elements = document.getElementsByClassName("description");
elements[0].style.color = "red";
elements[1].style.color = "blue";

for(let e in elements) {
    elements[e].innerText = e;
}



let hTitle = document.getElementsByClassName("title");
hTitle[0].style.color = "green";

// Koliko elemenata imamo sa klasom "description", "2", "3"
console.log(elements.length);