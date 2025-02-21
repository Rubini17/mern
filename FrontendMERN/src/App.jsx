import Home from "./components/functionalcomp/home.jsx"
import About from "./components/functionalcomp/about.jsx"
import Login from "./components/functionalcomp/login.jsx"
import Signup from "./components/functionalcomp/signup.jsx"
import Gallery from "./components/functionalcomp/gallery.jsx"
import NavBar from "./components/functionalcomp/navbar.jsx"
import UseEffect from "./components/functionalcomp/hooks/useEffect.jsx"
import UseMemo from "./components/functionalcomp/hooks/useMemos.jsx"
import UseRef from "./components/functionalcomp/hooks/useRef.jsx"
import UseCallback from "./components/functionalcomp/hooks/useCallback.jsx"
import UseMemoize from "./components/functionalcomp/hooks/useMemoize.jsx"
import HoC from "./components/functionalcomp/hoc/hoC.jsx"
import Memo from "./components/functionalcomp/memoisation/memo.jsx"
import Number from "./components/functionalcomp/memoisation/number.jsx"
import Text from "./components/functionalcomp/memoisation/text.jsx"
import LazyLoading from "./components/functionalcomp/memoisation/lazyloading.jsx"
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
      <Route path='/useEffect' element={<UseEffect/>}/>
      <Route path='/useMemo' element={<UseMemo/>}/>
      <Route path='/useRef' element={<UseRef/>}/>
      <Route path='/useCallback' element={<UseCallback/>}/>
      <Route path='/useMemoize' element={<UseMemoize/>}/>
      <Route path='/hoC' element={<HoC/>}/>
      <Route path="/memo" element={<Memo/>} />
      <Route path="/number" element={<Number/>}/>
      <Route path="/text" element={<Text/>}/>
      <Route path="/lazy" element={<LazyLoading/>}/>
    </Routes>
    </BrowserRouter>

  
  
  </main>
  )
}


export default App
