import "./HomePage.css"
import { useState } from "react";



function HomePage(){

    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState("");

    const handleInputChange = (e) => {
        setNewMovie(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setMovies([...movies, newMovie]);
        console.log("test");
        setNewMovie('');
    }

    const handleRemoveMovie = (index) =>{
        setMovies(movies.filter((_, i)=> i !== index));
    }

    return (
        <>
        <h1>Movies</h1>
        <form onSubmit={handleFormSubmit}>
        
        <label htmlFor="movieInput">Enter Movie</label>
        <input 
        type="text" 
        id="movieInput"
        name="movieInput" 
         onChange={handleInputChange}
        value = {newMovie}
        />
        <button type ="submit">Add movie</button>
        <ul>
         {
            movies.map((movie,index) =>(
                <li key={index}>
                    {movie}
                    <button onClick={() => handleRemoveMovie(index)}>Remove</button>
                </li>
            ))
         }
        </ul>
        </form>
        </>
      )
}

export default HomePage