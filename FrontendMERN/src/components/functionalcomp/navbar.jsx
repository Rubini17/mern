import "../css/nav.css"
import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <header>
            <nav>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
            </nav>
        </header>
    )
}
export default NavBar;