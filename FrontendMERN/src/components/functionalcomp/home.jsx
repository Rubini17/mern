import "../css/nav.css"
//properties or props
function Home(properties) { //or can pass it as {props, props2}
    var a=100;
    return(
        <div>
            <h1><center>HOME</center></h1>
         {/* <h1 style={{ color: "darkgoldenrod"
        }}>This is the HOME Component styled inline</h1> */}
         {/* <h1>im going to implement props</h1>
        <h1>
            the value of a is {a}
        </h1>
       <h1>Value of props is {props} {props2} </h1>
       <h1>Value of props is {properties.props} {properties.props2} </h1> */}
     </div>
    )
  }
  
  export default Home;
  