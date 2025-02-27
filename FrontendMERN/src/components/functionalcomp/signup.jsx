import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const style1 = {
    fontSize: "2em",
  };
  const style2 = {
    fontSize: "1em",
    backgroundColor: "rgba(0, 0, 0, 0.83)",
    color: "darkgoldenrod",
  };
  const style3 = {
    fontSize: "25px",
    fontStyle: "italic",
    width: "100px",
    backgroundColor: "rgba(0, 0, 0, 0.83)",
    color: "white",
  };
  const style4={
    textDecoration:"none",
    color:"inherit"
  }

  const navigate=useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phone, setPhone] = useState(0);
  const handleSignup =  async(event) => {
    event.preventDefault();
    console.log("Button Clicked");
   const req=  await axios.post("https://backend-mern-6jhn.onrender.com/signup", 
      {
        name:name,
        email:email,
        password:password,
        phone:phone,
      }
    );
    console.log(email,password);
    console.log(req.data);
    const message= req.data.message;
    const isSignup= req.data.isSignup;
    if(isSignup){
      alert(message);
      navigate('/login');
    }
    else{
      alert(message)
    }
  };

  return (
    <div class="container2">
      <h1>
        <center>Sign Up</center>
      </h1>
      <form onSubmit={handleSignup}>
        <center>
          {" "}
          <label htmlFor="name" style={style1}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your username"
            style={style2}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </center>{" "}
        <br></br>
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
        </center>{" "}
        <br></br>
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
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </center>
        <br></br>
        <center>
          {" "}
          <label htmlFor="phone" style={style1}>
            Phone:
          </label>
          <input
            type="number"
            id="phone"
            placeholder="Enter your phone no"
            style={style2}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </center>
        <br />
        <br />
        <center>
          <button type="submit" style={style3}>SignUp </button>
        </center>
        <br />
        <h3>
          <center>
            Already a user? <button style={style3}><Link to="/login" style={style4} >Login</Link></button>
          </center>
        </h3>
      </form>
    </div>
  );
}

export default Signup;
