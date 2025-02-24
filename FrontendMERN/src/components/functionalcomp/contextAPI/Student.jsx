import Exam from "./Exam";
const Student=(res)=>{

    return(
        <div>
           <Exam sgpa={res.sgpa} cgpa={res.cgpa}/>
        <h1>This is inside StudentResults</h1>
        <h1>Results</h1>
        <h1>Sgpa is {res.sgpa}</h1>
        <h1>Cgpa is {res.cgpa}</h1>
        </div>
    )
}
export default Student;