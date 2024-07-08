import { useEffect, useState } from "react";
import { filterFilmsByDirector } from "../helpers/film.helpers";
import { getListOf } from "../helpers/film.helpers";



function FilmsPage() {

    const [movies, setMovies] = useState([]);
    const [searchDirector, setSearchDirector] = useState("")
    const [sortSelection, setSortSelection] = useState("title")


    const handleInputChange = (e) => {
        setSearchDirector(e.target.value);
    }


    function fetchEffect() {

        fetch(`https://studioghibliapi-d6fc8.web.app/films`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setMovies(data);

            })
            .catch(console.error);
    }


    useEffect(fetchEffect, []);


    function sortMovies(films, sortType){
        switch(sortType){
            case "releaseDate":
                return films.toSorted((a,b) => a.release_date - b.release_date);
            case "director":
                return films.toSorted((a, b) => {
                    if(a.director > b.director){
                        return 1;
                    }else if(a.director < b.director){
                        return -1;
                    }else{
                        return 0;
                    }
                })
            case "title":
                return films.toSorted((a, b) => {
                    if(a.title > b.title){
                        return 1;
                    }else if(a.title < b.title){
                        return -1;
                    }else{
                        return 0;
                    }
                })
            case "score":
                return films.toSorted((a, b) => b.rt_score - a.rt_score);
        }
    }

    //Derived State
    const sortedMovies = sortMovies(movies, sortSelection);
    const filteredMovies = filterFilmsByDirector(sortedMovies, searchDirector)

    let uniqueDirectors = getListOf(movies, "director");

    return (
        <>
            <h1>Studio Ghibli Films</h1>
            <label htmlFor="sortSelect"> Sort by</label>
            <select name="sortSelect" id="sortSelect" value={sortSelection} onChange={(changeEvent) =>{
                setSortSelection(changeEvent.target.value)
            }}>
            <option value="releaseDate">Release Date</option>
                <option value="director">Director</option>
                <option value="title">Title</option>
                <option value="score">Rotten Tomatoes Score</option>
            </select>
      
            <form action="">
                <div className="form-group">
                <label htmlFor="searchDirector">Search Director</label>
        <select 
        type="text" 
        id="searchDirector"
        name="searchDirector" 
         onChange={handleInputChange}
        value = {searchDirector}>

        <option value="">All</option>
        {uniqueDirectors.map((director, index)=>{
            return <option key={director+index} value={director}>{director}</option>
        })}
        </select>
        
                </div>
            </form>
            <div>
            <ul>
                {filteredMovies.map((movie) => {
                    return <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.rt_score}</p>
                        <div className="movieInfo">
                        <p>{movie.description}</p>
                        <img src={movie.image} alt={movie.title}/>
                        </div>
                    </li>
                })
                }
            </ul>
            </div>
        </>
    )

}
export default FilmsPage
