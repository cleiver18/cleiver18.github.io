const nameInput = document.getElementById("name");
const year = document.getElementById("year");
const enviar = document.getElementById("enviar");
const resultado = document.getElementById("resultado");
const batmanUrl = "http://www.omdbapi.com/?apikey=8c6f8b51&t=batman&y=1989";

enviar.addEventListener("click", async () => {
  console.log(nameInput, year, nameInput.value, year.value);
  const url = `https://www.omdbapi.com/?apikey=8c6f8b51&t=${nameInput.value}&y=${year.value}`;

  resultado.innerHTML = ` 
  <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
  
  `;

  const data = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  console.log(data);
  if (data.Error) {
    alert("pelicula no encontrada");
    return;
  }
  resultado.innerHTML = `<h3>information:</h3>
  <li class="list">title: ${data.Title}</li>
  <li class="list">Year: ${data.Released}</li>
  <li class="list">Rated: ${data.Rated}</li>
  <li class="list">Genre: ${data.Genre}</li>
  <li class="list">Director: ${data.Director}</li>
  <li class="list">Writer:  ${data.Writer}</li>
  <li class="list"> Actors: ${data.Actors}</li>
  <img class="imagenpeli" src="${data.Poster}">
  `;
});
