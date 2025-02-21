import Button from "./button";
import trackingbutton from "./trackingbutton";
const HoC=()=>{
    const ButtonTrack= trackingbutton(Button)
    return(
        <div>
            <h1>this is HoC or higher order component</h1>
           <Button value={"Login"}/><br/>
           <ButtonTrack value={"Login"} trackingInfo={{"CusId":"Hello","Password":"Pass"}} />
        </div>
    )
}
export default HoC;