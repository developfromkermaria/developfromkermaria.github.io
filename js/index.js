const form = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const result = document.getElementById("result");

let search = "";
let movies = [
{"title": "La déradicalisation : une fausse bonne solution ?", "image": "https://images3.livreshebdo.fr/sites/default/files/assets/images/france_culture_0.jpg", "piste": "https://rf.proxycast.org/efe5e9db-c510-46ca-9c44-f4e3cefbf552/18064-18.04.2021-ITEMA_22639721-2021C29973E0015.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624", "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624", "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624", "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624",  "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624",  "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624",  "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624",  "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624",  "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624",  "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"},
{"title": "Peut-on imposer un islam de France ?", "image": "https://www.rts.ch/2019/12/23/15/37/8051050.image/16x9/scale/width/624",  "piste": "https://rf.proxycast.org/f5f23523-d84c-4d1c-b356-dd42d408af7d/10175-19.04.2021-ITEMA_22640481-2021C36267S0109.mp3"}
];

/* const fetchMovies = async () => {
  movies = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}`
  ).then((res) => res.json());
  console.log(movies);
};

const moviesDisplay = async () => {
  await fetchMovies();

  movies.results.length = 12;

  result.innerHTML = movies.results
    .map(
      (movie) =>
        `
      <li>
        <h2>${movie.original_title}</h2>
        <div class="card-content">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
          <div class="infos">
            <p>${movie.overview}</p>
            <p>Popularité : ${movie.popularity} ⭐</p>
          </div>
        </div>
      </li>
    `
    )
    .join("");
}; */

const moviesDisplay = () => {

  result.innerHTML = movies.map(
    (movie) =>
      `
    <li>
      <div class="card-content">
      <img src="${movie.image}" alt="illustration">
      <div class="titre">${movie.title}</div>
      <audio class="lecteur" controls src="${movie.piste}">
                Your browser does not support the
                <code>audio</code> element.
      </audio>
        
        </div>
     
    </li>
  `
  )
  .join("");


};

moviesDisplay();

/* form.addEventListener("submit", (e) => {
  e.preventDefault();
  search = searchInput.value;
  moviesDisplay();
}); */
