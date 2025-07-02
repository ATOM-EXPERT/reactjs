import { Minus, Plus } from "lucide-react";
import { useState } from "react";

    function Counter(){
        const [count, setCount]= useState(0)
        const increment = () => setCount(count + 1)
        const decrement = () => {
            if (count < 1) return;
            setCount(count - 1)
        }
        return(
            <div className="flex justify-center items-center gap-3">
                <button onClick={decrement} className="border border-red-400 rounded bg-blue-600 p3 text-green-600"><Minus /></button>
                <div className="mx-4 grid place-items-center font-bold font-mono text-3xl">{count}</div>
                <button onClick={increment} className="border border-red-400 rounded bg-blue-600 p3 text-green-600"><Plus /></button>
            </div>
        )
      
    }
 export default Counter;