import { useEffect, useState } from "react";


const Counter = () => {
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log("Hello World" + num);
    }, [num])

    return (
        <div className="flex items-center gap-3 mx-auto my-4 w-max">
            <button className="border rounded w-10 h-10 text-blue-600 hover:text-white hover:bg-blue-600 cursor-pointer" onClick={() => setNum(num + 1)}>+</button>
            <span className="text-2xl">{num}</span>
            <button className="border rounded w-10 h-10 text-blue-600 hover:text-white hover:bg-blue-600 cursor-pointer" onClick={() => setNum(num - 1)}>-</button>
        </div>
    );
};

export default Counter;