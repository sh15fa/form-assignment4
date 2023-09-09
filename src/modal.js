import ReactDOM  from "react-dom";
import  './modal.css';
import { useState } from "react";
function Modal(props){
    
    let i=0;
    if(!props.open) return null;
    return ReactDOM.createPortal(
        <div className="modal" onClick={()=>props.onClose()}>
        <div className="overlay" >
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