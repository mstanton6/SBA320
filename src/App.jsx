import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [movie, setMovie] = useState(null)
  let title = "Clueless"
  const apiKey = "171e8e29"
  const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`;

  async function getMovies() {
    try {
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
      </div>
    </>
  )
}


export default App
