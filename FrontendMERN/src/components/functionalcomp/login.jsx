import { useNavigate } from "react-router-dom"
import "../css/nav.css"
function Login() {
    const navigate= useNavigate();
    function signup(){
      navigate("/signup");
    }

    const style1={
       fontSize: "2em",
       
      }
      const style2={
        fontSize:"1em",
        backgroundColor: "rgba(0, 0, 0, 0.83)",
        color: "darkgoldenrod"
      }
      const style3={
        fontSize:"2em",
        fontStyle:"italic",
        width: "150px",
         backgroundColor: "rgba(0, 0, 0, 0.83)",
        color: "white",
        

      }
    
    return(
      <div class="container2"><br/>
        <h1 ><center>Login</center></h1>
       <center> <label style={style1}>Name:</label>
        <input type="text" placeholder="Enter your username" style={style2}></input></center> 
        <br/>
        <center><label style={style1}>Password:</label>
        <input type="password" placeholder="Enter your password" style={style2}></input></center>
        <br/>
        <center><button style={style3}>Login </button></center>
        <br/>
        <h3><center>Forgot password? <button>Help</button></center></h3>
        <h3><center>Already not a user?  <button onClick={signup}>SignIn</button></center></h3>
        

      </div>
    );
  }
  

  export default Login;