import React from "react";
import "../App.css";





const ButtonCom = ({btnFunc,btnText}) => {
    return <button  className="loginbtn"
    onClick={btnFunc}
>{btnText}</button>
    

}


export default ButtonCom;