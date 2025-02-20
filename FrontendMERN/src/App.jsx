import Home from "./components/functionalcomp/home.jsx"
import About from "./components/functionalcomp/about.jsx"
import Login from "./components/functionalcomp/login.jsx"
import Signup from "./components/functionalcomp/signup.jsx"
import Gallery from "./components/functionalcomp/gallery.jsx"
import NavBar from "./components/functionalcomp/navbar.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App(){
  return(
  <main>
    <BrowserRouter>
    <NavBar/> 
    <Routes>
    <Route path='/home' element={<Home/>}/>
       <Route path='/about'element={<About/>}/>
      <Route path='/login' element={<Login/>}/>     
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
  
  
  </main>
  )
}


export default App
