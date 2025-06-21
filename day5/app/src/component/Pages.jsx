/*import Img from "../assets/react.svg"
import "./style/Pages.css"
function Pages(){
    return(
        <>
        <img src={Img} alt="react image" />
        </>
    )
}
export default Pages;

import Img from "../assets/react.svg"
import "./style/Pages.css"  
function Pages(){
    return(
        <div className="container">
          <img className="img" src={Img} alt="react image" />
        </div>
    )
}

export default Pages;*/
import Login from "./Login"
import img from "../assets/react.svg"
function Pages(){
    return(
        <div className="cent">
            <img src={img} alt="not found"/>
         <Login/> 
        </div>
    )
}
export default Pages;
