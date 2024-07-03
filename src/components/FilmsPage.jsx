import { useEffect, useState } from "react";
import "./FilmsPage.css";


function FilmsPage() {

    const [movies, setMovies] = useState([]);


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




    return (
        <>
            <h1>Films Page</h1>
            <ul>
                {movies.map((movie) => {
                    return <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <div className="movieInfo">
                        <p>{movie.description}</p>
                        <img src={movie.image} alt={movie.title}/>
                        </div>
                    </li>
                })
                }
            </ul>
        </>
    )

}
export default FilmsPage
