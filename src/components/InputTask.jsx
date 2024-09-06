
import { useState } from "react";

export default function InputTask(props) { 
    const [task, setTask] = useState('');
    
    const handleChange =(e) =>{
        setTask(e.target.value);
        
        
    }

    const handleAddTask = () =>{
        props.addTask( task );
        console.log("added Task", { task });
        setTask("")

    }


    return (
        <>
            <input type='text' placeholder="input your task" value={task} onChange={handleChange} />
            <button onClick={handleAddTask}>Add Task</button>
        </>
    )
}