document.getElementById('imageHolder').addEventListener('click', function(slikaNaKojuKliknulo) {

    if(slikaNaKojuKliknulo.target.classList != "images")
    {
        slikaNaKojuKliknulo.target.classList.toggle('zoom');
    }
    

});
