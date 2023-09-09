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
        // console.log(form.age);

        // console.log(form.age);
        
        // if(num.length>=8 && num.length<=10){
        //     setForm({...form,number:num});
            // console.log(num.length);
        //     msgNum='';
        // }
        // else{
           
        //     msgNum='Phone number is incorrect it must be between 8 and 10 numbers';
        //     // msg.push('Phone number is incorrect it must be between 8 and 10 numbers');
            // console.log(msgNum);
            // console.log(form.age);
            
        // }
        // disableHandller();

       
    }

    function handleAge(e){
        let age=e.target.value;
        // console.log(age);
        setForm({...form,age:e.target.value});
        disableHandller();
        // console.log('aggg'+form.name);
        
        // console.log(form.employee);
        // if(age>=18 && age<=68){
        //     setForm({...form,age:age});
            // console.log(form.age);
        //     msgAge='';
        // }
        // else{
        //     msgAge='The Age Is Not Allow it must be between 18 and 68';
            
        //     // msg.push('The Age Is Not Allow it must be between 18 and 68');
            // console.log(msgAge);
        // }
        // disableHandller();

        

       
    }
    function handleCheckbox(e){
        // console.log(e.target.checked);
        setForm({...form,employee:e.target.checked});
        
    }
    function handleSelectSalary(e){
        setForm({...form,salary:e.target.value});
    }
    function handleSubmit(e){
        e.preventDefault();
        // console.log('submitted');
        // console.log(form);
        
        
    //     if(msgAge!==''){
    //         msg.push(msgAge);
    //     }
    //    else if(msgNum!=='')
    //     {
    //         msg.push(msgNum);
    //     }
    //     else{
    //         msg.push('You submitted successfully')
    //     }
    let trueAge=form.age>=18 && form.age<=68;
    if(trueAge){
        setForm({...form,age:form.age});
        // console.log(form.age);
        msgAge='';
    }
    else{
        // setMsg("The Age Is Not Allow it must be between 18 and 68");
        msgAge=<h4 className='incorrect'>The Age Is Not Allow it must be between 18 and 68</h4>;
        text.push(msgAge);
        // msg.push('The Age Is Not Allow it must be between 18 and 68');
        // console.log(msgAge);
    }
    let trueNum=form.number.length>=8 && form.number.length<=10;
    if(trueNum){
        setForm({...form,number:form.number});
        // console.log(form.number);
        msgNum='';
    }
    else{
       
        // setMsg("Phone number is incorrect it must be between 8 and 10 numbers");
        msgNum=<h4 className='incorrect'>Phone number is incorrect it must be between 8 and 10 numbers</h4>;
        // console.log(msgNum);
        text.push(msgNum);
        // console.log(form.age);

        
    }
    if(trueAge && trueNum){
        let correct=<h4 className='correct'>your submit successfully</h4>;
        // console.log(msgNum);
        text.push(correct);
    }
    // console.log(text);
    setMsg([...text]);
    // console.log(msg);
    }
    
    // msg.push(msgAge);
    //    console.log(msg);
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
        {/* onClick={()=>setModal(true)} */}
        <button type="submit" disabled={!disable} onClick={()=>setModal(true)}>Submit</button>
        
        
    </form>
    <Modal open={modal} className='modal'>{msg}</Modal>
    </div>
}

export default Form;