import { useState, useEffect } from 'react'
import './App.css'
import Form from "./components/Form";

function App() {
  const [movie, setMovie] = useState(null)
  const apiKey = "171e8e29"

  async function getMovies(title) {
    try {
      const apiURL = `https://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;

      // makes request to URL for data
      let response = await fetch(apiURL);

      // parse the incoming data into JSON so we can use it
      response = await response.json();
      setMovie(response);
      console.log(response);

    } catch (err) {
      console.error(err);
    }
  }

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovies("Clueless");
  }, []);

  return (
    <>
      <div>
        <Form moviesearch={getMovies} />
        <h1>{movie?.Title}</h1>
        <h2>{movie?.Year}</h2>
        <h2>{movie?.Rated}</h2>
        <h2>{movie?.Released}</h2>
        <h2>{movie?.Genre}</h2>
      </div>
    </>
  )
}

export default App
