import { useState, useEffect } from 'react'
import './App.css'
import Form from "./components/Form";

function App() {
  const [book, setBook] = useState(null)
  const apiKey = "AIzaSyCq3QKEwLLoOnR0i8gnn4VQ-D8byD3TYUw"

  async function getBooks(title) {
    try {
    const safeQuery = encodeURIComponent(title);
     const apiURL = `https://www.googleapis.com/books/v1/volumes?q=${safeQuery}&maxResults=1&key=${apiKey}`;

      // makes request to URL for data
      let response = await fetch(apiURL);

      // parse the incoming data into JSON so we can use it
      response = await response.json();
      setBook(response);

    } catch (err) {
      console.error(err);
    }
  }

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getBooks("The Great Gatsby");
  }, []);

  return (
    <>
      <div>
        <Form booksearch={getBooks} />
        <br />
        <b>Title:</b> {book?.items?.[0]?.volumeInfo?.title}
        <br /><br />
        <img
            src={book?.items?.[0]?.volumeInfo?.imageLinks?.thumbnail}
            alt={book?.items?.[0]?.volumeInfo?.title}
        />
        <br /><br />
        <b>Author(s:)</b> {book?.items?.[0]?.volumeInfo?.authors.join(', ')}
        <br /><br />
        <b>Publisher:</b> {book?.items?.[0]?.volumeInfo?.publisher}
        <br /><br />
        <b>Published Date:</b> {book?.items?.[0]?.volumeInfo?.publishedDate}
        <br /><br />
        <b>Page Count:</b> {book?.items?.[0]?.volumeInfo?.pageCount}

      </div>
    </>
  )
}

export default App
