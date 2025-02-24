
import Faculty from "./Faculty";
const Exam=(res)=>{

    return(
        <>
         <h1>This is Student writing exams</h1>
        <Faculty sgpa={res.sgpa} cgpa={res.cgpa}/>
        </>
    )
}
export default Exam;