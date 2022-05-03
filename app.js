// api contraseña = 8c6f8b51 
// ejemplo de como usarla = http://www.omdbapi.com/?i=tt3896198&apikey=8c6f8b51
// BATman = http://www.omdbapi.com/?apikey=8c6f8b51&t=batman&y=1989

// VARIABLES 

const formulario = document.getElementById("formulario");
const submit = document.getElementById("submit");
const submit2 = document.getElementById("enviar");



submit.addEventListener("click", function(e){
   /* const titulo = document.querySelector('input[type="text"]').value;
    const anio = document.querySelector('input[type="number"]').value;

    document.getElementById("text").innerHTML = titulo;
    document.getElementById("number").innerHTML = anio;¨

    */
    
    fetch("https://www.omdbapi.com/?apikey=8c6f8b51&t=batman")
        .then(function(res){
            return res.json();
        })
        .then(function(data){
           const contenedor = document.getElementById("contenedor-peli");
           contenedor.innerHTML = `
                
                <h3>information:</h3>
                <li>title: ${data.Title}</li>
                <li>Year: ${data.Year}</li>
                <li>Rated: ${data.Rated}</li>
                <li>Released: ${data.Released}</li>
                <li>Genre: ${data.Title}</li>
                <li>Director: ${data.Director}</li>
                <li>Writer: ${data.Writer}</li>
                <li>Actors: ${data.Actors}</li>
                <img class="imagenpeli" src="${data.Poster}">
                
           `;
        })
    
    e.preventDefault();
    
});


// FUNCIONES 

submit2.addEventListener("click", function(e){
    e.preventDefault();
    let url = "https://www.omdbapi.com/?apikey=8c6f8b51";
    let urln = '';

    let valortitulo = document.querySelector('form#form input[type="text"').value;
    let valoryear = document.querySelector('form#form input[type="number"').value;

    if(valortitulo === '' && valoryear ===''){
        alert("Write a name or his year,bitch!");
    } else if(valoryear === ''){
        urln += `${url}&t=${valortitulo}`;
    } else if(valortitulo === ''){
        alert("write a name plis");
    } else{
        urln += `${url}&t=${valortitulo}&y=${valoryear}`;
        
    }

    fetch(urln)
        .then(function(res){
            return res.json();
        })
        .then(function(data){
            const contenedor = document.getElementById("contenedor-pelis");
           contenedor.innerHTML = `
                
                <h3>information:</h3>
                <li>title: ${data.Title}</li>
                <li>Year: ${data.Year}</li>
                <li>Rated: ${data.Rated}</li>
                <li>Released: ${data.Released}</li>
                <li>Genre: ${data.Title}</li>
                <li>Director: ${data.Director}</li>
                <li>Writer: ${data.Writer}</li>
                <li>Actors: ${data.Actors}</li>
                <img class="imagenpeli" src="${data.Poster}">
                
           `;
        })
            
    document.querySelector('.ejemplos').style.display = 'block'
    
});

