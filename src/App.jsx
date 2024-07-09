import { Header } from "./Header"
import { ItemDetails } from "./ItemDetails"
import { MovieCard } from "./MovieCard"
import { TvShow } from "./TvShow"
import { NavBar } from "./navBar"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Error } from "./Error"
import { About } from "./About"
function App() {

  return(
    <>
     <BrowserRouter>
     <NavBar/>
      <Routes>
        <Route path={'/'}  element={<MovieCard />} />
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/tvshows'}  element={<TvShow />} />
        <Route path={'/:id/details'} element={<ItemDetails />}/>
        <Route path={'*'} element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
