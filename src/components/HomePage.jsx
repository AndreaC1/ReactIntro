import "./HomePage.css"



function HomePage(){

    return (
        <>
        <h1>Movies</h1>
        <form id="form">
        <label for="form">Enter Movie</label>
        <input type="text" id="input" />
        <button type ="submit">Add movie</button>
        <ul>
            <li>
                Mrs Doubtfire
            </li>
            <li>
                Office Space
            </li>
            <li>
                Devil Wears Prada
            </li>
        </ul>



        </form>
        </>
      )
}

export default HomePage