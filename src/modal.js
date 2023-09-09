import ReactDOM  from "react-dom";
import  './modal.css';
import { useState } from "react";
function Modal(props){
    const [toggle,setToggle]=useState(props.open);
    console.log(toggle);
    let i=0;
    if(!props.open) return null;
    return ReactDOM.createPortal(
        <div className="modal">
        <div className="overlay" onClick={()=>!props.open}>
        <div className="content">
        <ul>{props.children.map((e)=>{
           return <li key={i++}>{e}</li>
        })}</ul>
        </div></div>
        </div>,
        document.getElementById("modal-root")

    );
}

export default Modal;