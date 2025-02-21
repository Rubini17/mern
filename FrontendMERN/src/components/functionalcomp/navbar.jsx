import "../css/nav.css"
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar=()=>{

    // var [dropdown,showDropdown]= useState(false);
    // const setDrop=()=>{
    //     showDropdown(!dropdown);

    // }
    return(
        <header>
            <nav>
                <li><Link to='/home' class="link">Home</Link></li>
                <li><Link to='/login' class="link">Login</Link></li>
                <li><Link to='/about' class="link">About</Link></li>
                <li><Link to='/gallery' class="link">Gallery</Link></li>
                <li><Link to='/signup' class="link">Signup</Link></li>
                <li><Link to='/useEffect' class="link">UseEffect</Link></li>
                <li><Link to='/useMemo' class="link">UseMemo</Link></li>
                {/* <li><Link to='/useRef' class="link">UseRef</Link></li> */}
                {/* <li><Link to='/useCallback' class="link">UseCallback</Link></li> */}
                <li><Link to='/useMemoize' class="link">UseMemoize</Link></li>
                <li><Link to='/hoC' class="link">HoC</Link></li>
                
            </nav>
        </header>
    )
}
export default NavBar;