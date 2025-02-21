const trackingbutton=(Component)=>{
    return(props)=>{
        const handleB=()=>{
            alert("The tracking info on clicking this button "+ props.trackingInfo.Password);
        }
        return(
            <form onClick={handleB}>
                Email:<input type="text" /><br/>
                Password:<input type="text"/>
            <Component {...props}/>
            </form>
        )
    }
}
export default trackingbutton;