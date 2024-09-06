import InputBox from './InputTask';
import List from './List';
import { useState } from "react";


export default function ToDoList() { 
    const [tasksArr, setTasksArr] = useState([]);

    function addTask(newTask) {
        if (newTask.trim() == '') {
            return;
        }
        if (tasksArr.indexOf(newTask) < 0) {
       
            setTasksArr([...tasksArr, newTask]);
        }
        
    }
    function deleteTask(idx) { 
        setTasksArr(tasksArr.filter((task,id) => (
              id!==idx 
        )))

    }


    return (
        <>
            <InputBox addTask={addTask } />
            <List tasks={tasksArr} deleteTask={deleteTask} />
        </>
    )
}