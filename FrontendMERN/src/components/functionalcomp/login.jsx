import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../css/nav.css";
function Login() {
  const navigate = useNavigate();
  function signup() {
    navigate("/signup");
  }

  const style1 = {
    fontSize: "2em",
  };
  const style2 = {
    fontSize: "1em",
    backgroundColor: "rgba(0, 0, 0, 0.83)",
    color: "darkgoldenrod",
  };
  const style3 = {
    fontSize: "2em",
    fontStyle: "italic",
    width: "150px",
    backgroundColor: "rgba(0, 0, 0, 0.83)",
    color: "white",
  };
  const style4={
    textDecoration:"none",
    color:"inherit"
  }
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin= async(event)=>{
    event.preventDefault();
    console.log("Button Clicked");
    const req= await axios.post("https://backend-mern-6jhn.onrender.com/login" ,
      {
        email:email,
        password:password,
      }
    );

    const message= req.data.message;
    const isLogin= req.data.isLogin;
    if(isLogin)
    {
      alert(message);
      navigate('/hoc');
    }
    else{
      alert(message)
    }

  };


  return (
    <div class="container2">
      <br />
      <h1>
        <center>Login</center>
      </h1>
      <form onSubmit={handleLogin}>
        <center>
          {" "}
          <label htmlFor="email" style={style1}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            style={style2}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </center>
        <br />
        <center>
          <label htmlFor="password" style={style1}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            style={style2}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </center>
        <br />
        <center>
          <button type='submit'style={style3}>Login </button>
        </center>
        {/* <br />
        <h3>
          <center>
            Forgot password? <button>Help</button>
          </center>
        </h3>
        <h3>
          <center>
            Already not a user? <button style={style3}><Link to="/signup" style={style4} >Signup</Link></button>
          </center>
        </h3> */}
      </form>
    </div>
  );
}

export default Login;
