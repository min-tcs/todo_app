export default function List(props) { 
   
    const tempTask = Array.from(props.tasks);
    
    
    return (
        <div>
            { console.log(props.tasks)}
            <ul>{
                
                tempTask.map((task, idx)=>{
                    return (<li onClick={() => { props.deleteTask(idx); }} key={idx}>{task}</li>);
                })

               }
            </ul>
        </div>
    )
}