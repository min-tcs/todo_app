import {useEffect, useState} from "react"

export default function UseEffectVariations() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");
    const [data, setData] = useState("");
    console.log("Rendering started....");

    //called on rendering for first time and whenever state change
    useEffect(() => {
        console.log("Called for the first time useEffect")
    }

    )
    


    //called on rendering for first time and whenever state change-Empty dependency array
    useEffect(() => {
        console.log("only mounting time useEffect")
    }, []

    )

    useEffect(() => {
        console.log("Third Variation")
    }, [count]

    )
    
    useEffect(() => {
        console.log("fourth Variation");
        return (() => console.log("cleanup function"));
    }, [value]

    )
    
    useEffect(() => { 
            async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const result = await response.json();
            setData(result);
                console.log(data);
            }
            fetchData();
        }, []
             
        
        
    )
    
    const handleChange=(e) => { 
        setValue(e.target.value);
    }

    return (
        <div>
            <button onClick={()=>setCount(count+1) }>+</button>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)}>-</button>
            <input type="text" value={value} onChange={handleChange} />
            <div>{data ? <p>{data.title}</p>:<p>Loading...</p>}</div>
        </div>
    )

    console.log("Rendering ended...."); 


}