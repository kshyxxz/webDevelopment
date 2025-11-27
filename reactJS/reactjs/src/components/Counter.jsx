import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [incrementBy, setIncrementBy] = useState(1);

    const handleClickIncrement = () => {
        setCount(count + incrementBy);
    }

    const handleClickDecrement = () => {
        setCount(count - incrementBy);
    }

    const handleChange = (event) => {
        setIncrementBy(Number(event.target.value)); 
    }

    return (
        <>
            <h1>Count value is : {count}</h1>
            <button onClick={handleClickIncrement}>Increment Button</button>
            <button onClick={handleClickDecrement}>Decrement Button</button>

            <h3>We are incrementing/decrementing the count value by : {incrementBy}</h3>

            <input
                type="number"
                value={incrementBy}
                onChange={handleChange}
            />
        </>
    );
}
