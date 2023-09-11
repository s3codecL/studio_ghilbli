var botonBuscar = document.querySelector('#search-btn');
botonBuscar.addEventListener('click', mostrarPelicula);
function mostrarPelicula() {
    let titulo = document.getElementById("opcion").value;
    var pelicula = titulo.toString().toLowerCase();
    //Selección de pelicula//
    if (titulo === '') {
        alert('Debe seleccionar una opción');

    } else {
        console.log('Campo correcto');
    }
    fetch(`https://studio-ghibli-films-api.herokuapp.com/api/${pelicula}`)
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
            console.log(pelicula)


            //Resultado formato Card de Boostrap en HTML//
            var tituloPelicula = "";

            tituloPelicula += `<div class="card" style="width: 30rem;">
        <img src="${datos.poster}" class="card-img-top" style="justify-content: center" alt="imagen ghibli">
        <div class="card-body"><h5 class="card-title"><b>${datos.title}</b></h5>
        <hr color="#b2b2a2"></hr>
        <p class="card-text"> ${datos.synopsis}</p>
        <hr color="#b2b2a2"></hr>
        <p class="card-text"><b>Título Romanizado:</b> ${datos.hepburn}</p>
        <hr color="#b2b2a2"></hr>
        <p class="card-text"><b>Año de Estreno:</b> ${datos.release}</p>
        <hr color="#b2b2a2"></hr>
        <p class="card-text"><b>Director:</b> ${datos.director}</p>
        <hr color="#b2b2a2"></hr>
        <a href="https://studio-ghibli-films-api.herokuapp.com/" target="black"><button type="button" class="btn-2"><b>Más Información</b></button></a>
                                            
        </div>`;

            document.getElementById("resultado").innerHTML = tituloPelicula;

        })
        //Función error en caso que haya un mal funcionamiento//
        .catch(error => {
            alert("La petición no se ha podido completar");


        })
}
