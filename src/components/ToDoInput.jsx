/* eslint-disable react/prop-types */
import { useState } from "react";

const ToDoInput = ({addItem}) =>{
    const [name, setName] = useState("");
    const [date,setDate]=useState('')
    
    function updateValue() {
        addItem(name, date)
        setName('')
        setDate('')
    }
    return <div className="kg-row">
        <div className="col5 ">
            <input className='my-col' type="text" name="item-name" id="item-name" value={name}
            onChange={e=>setName(e.target.value)}/>
        </div>
        <div className="col5">
            <input type="date" className='my-col' name="item-date" id="item-date" value={date}
                onChange={e=>setDate(e.target.value) } />
        </div>
        <div className="col2">
        <button type="button" className="my-col my-btn " onClick={updateValue}>Add</button>
         </div>
        
    
  </div>
}


export default ToDoInput;