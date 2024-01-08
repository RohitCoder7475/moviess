const fetchMovie = async(nameMovie)=>{

  const api = `https://www.omdbapi.com/?i=tt3896198&apikey=ef3a9515&s=${nameMovie}`;
  const data = await fetch(api);
  const jsonData = await data.json();
  return jsonData.Search 
}


const showData = (movie)=>{
  

return `<div class="col"><div class="card" style="width: 18rem;">
<img src="${movie.Poster}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${movie.Title}</h5>
  <button class="btn btn-primary" onclick="fevuriteData('${movie.Poster}','${movie.Title}')">Add Card</button>
</div>
</div></div>`
}
const fevuriteData=(Poster,title)=>{
  alert(`Title: ${title}\nPoster: ${Poster}`);
}

const showMovies = async()=>{
  const val = document.getElementById('movies_list');
  let movie = document.getElementById('searchBox').value;
  const MovieArray = await fetchMovie(movie);
  MovieArray.forEach((a)=>{
      val.innerHTML += showData(a);
  })
}