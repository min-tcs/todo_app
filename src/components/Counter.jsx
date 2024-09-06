
import { useState } from "react";

export default function Counter({ index, value }) { 
    const uId = index ;
    const [count, setCount] = useState(parseInt(value));
    const increment = () => {
        value++;
        console.log("increment :",value );
        setCount(count + 1);
        
    }

    const decrement = () => {
        console.log("decrement ", count);
        setCount(count - 1);
    }
    return (
        <div>
            <span> {uId}: </span>

            <button onClick={increment}>+</button>

             <span>{count}</span> 
            <button onClick={decrement}>-</button>
        </div>
    )

}