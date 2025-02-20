import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate= useNavigate();

  const style1={
    fontSize: "2em",
    
   }
   const style2={
     fontSize:"1em",
     backgroundColor: "rgba(0, 0, 0, 0.83)",
     color: "darkgoldenrod"
   }
   const style3={
     fontSize:"25px",
     fontStyle:"italic",
     width: "100px",
      backgroundColor: "rgba(0, 0, 0, 0.83)",
     color: "white",
     

   }

   function login(){
    navigate("/login");
   }
 
 return(
   <div class="container2">
     <h1 ><center>Sign Up</center></h1>
     <forms>
    <center> <label style={style1}>Name:</label>
     <input type="text" placeholder="Enter your username" style={style2}></input></center> 
 <center> <label style={style1}>Age:</label>
     <input type="number" placeholder="Enter your age " style={style2}></input></center>
     <center> <label style={style1}>Email:</label>
     <input type="email" placeholder="Enter your email" style={style2}></input></center>  
     <center> <label style={style1}>Phone:</label>
     <input type="number" placeholder="Enter your phone no" style={style2}></input></center> 
     <center><label style={style1}>Password:</label>
     <input type="password" placeholder="Enter your password" style={style2}></input></center>
     <center> <label style={style1}>Date of Birth:</label>
     <input type="date" placeholder="Enter your date of birth" style={style2}></input></center> 
     
     <br/><center><button style={style3}>SignUp </button></center>
     <br/>
    
     <h3><center>Already a user?  <button onClick={login}>Login</button></center></h3>
     
</forms>
   </div>
 );}
  
  export default Signup;