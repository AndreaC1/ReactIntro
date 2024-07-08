
import './App.css'
// import HomePage from './components/HomePage'
// import FilmsPage from './components/FilmsPage'
import {HomePage, FilmsPage} from "./pages/index"
// import FilmsPage from './pages/films.page'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'

function App() {

  
  

  return (
    <>
  <BrowserRouter>
  <nav>
    <ul>
      <li>
      <NavLink to="/">Home</NavLink>
      </li>
      <li>
      <NavLink to="/films">Films</NavLink>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element ={<HomePage/>}/>
    <Route path="/films" element ={<FilmsPage/>}/>
  </Routes>
  
  </BrowserRouter>
    </>
  )
}

export default App
