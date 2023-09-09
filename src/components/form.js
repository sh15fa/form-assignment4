import { useState } from 'react';
import './form.css';
import Modal from './modal.js';



function Form(){
    const [form,setForm]=useState({
        name:'',
        number:null,
        age:'',
        employee:false,
        salary:'less 500'
    });
    const [disable,setDisable]=useState(false);
    const [modal,setModal]=useState(false);
    const [msg,setMsg]=useState([]);
    function disableHandller(){
        // console.log('dis'+form.name);
        if(form.name==='' || form.number===''|| form.age==='')
        // if(varr.length===0)
        {
            setDisable(false);
        }
        else{
            setDisable(true);
        }
        
    }
    
    let text=[];
    let msgAge='';
    let msgNum='';
    
    function handlePhoneNumber(e){
        let num=e.target.value;

        setForm({...form,number:num});
        disableHandller();
    }

    function handleAge(e){
        let age=e.target.value;
        setForm({...form,age:age});
        disableHandller();
       
    }
    function handleCheckbox(e){
        setForm({...form,employee:e.target.checked});
        
    }
    function handleSelectSalary(e){
        setForm({...form,salary:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        
    let trueAge=form.age>=18 && form.age<=68;
    if(trueAge){
        setForm({...form,age:form.age});
        msgAge='';
    }
    else{
        
        msgAge=<h4 className='incorrect'>The Age Is Not Allow it must be between 18 and 68</h4>;
        text.push(msgAge);
       
    }
    let trueNum=form.number.length>=8 && form.number.length<=10;
    if(trueNum){
        setForm({...form,number:form.number});
       
        msgNum='';
    }
    else{
       
        msgNum=<h4 className='incorrect'>Phone number is incorrect it must be between 8 and 10 numbers</h4>;
        text.push(msgNum);

        
    }
    if(trueAge && trueNum){
        let correct=<h4 className='correct'>your submit successfully</h4>;
        text.push(correct);
    }
    setMsg([...text]);
    }
    
   function handleName(e){
    let name=e.target.value;
    setForm({...form,name:name});
    disableHandller();
   }

    return <div> <form className='form' onSubmit={handleSubmit}>
        <h1>Requesting a Loan</h1>
        <hr/>
        <label >Name:<br/>
        <input type='text' onChange={handleName}/>
        </label>
        <br/>
        <label >Phone Number:<br/>
        <input type='number' onChange={handlePhoneNumber}/></label>
        <br/>
        <label >Age<br/>
        <input type='number' onChange={handleAge}/></label>
        <br/>
        <label >Are you un employee?<br/>
        <input type='checkbox' onChange={handleCheckbox} checked={form.employee}/></label>
        <span></span>
        <br/>
        <label >Salary:<br/>
        <select id="salary" name="salary" value={form.salary} onChange={handleSelectSalary} >
            <option value="less 500">Less than 500$</option>
            <option value="500-2000">Between 500$ and 2000$</option>
            <option value="above 2000">Above 2000$</option>
            
        </select>
        </label>

        <br/>
        <button type="submit" disabled={!disable} onClick={()=>setModal(true)}>Submit</button>
        
        
    </form>
    <Modal open={modal} onClose={()=>setModal(false)}>{msg}</Modal>
    </div>
}

export default Form;