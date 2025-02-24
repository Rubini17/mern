import Exam from "./Exam";
import CoE from "./CoE";
const Faculty=(res)=>{

    return(
        <>
        
        <h1>Faculty correcting papers</h1>
        <CoE sgpa={res.cgpa} cgpa={res.cgpa}/>
        </>
    )
}
export default Faculty;