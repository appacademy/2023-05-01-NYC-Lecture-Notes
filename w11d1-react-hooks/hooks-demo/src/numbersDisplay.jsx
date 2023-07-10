
import React, {useState} from "react";

function NumbersDisplay() {
    // let count = 0;
    const [count, setCount] = useState(0);  //[0, function]

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    };

    return(
        <>
            <h1>Current Count: {count} </h1>
            <button onClick={incrementCount}>+</button>
            <br />
            <button onClick={decrementCount}>-</button>
            <br />
            <button onClick={resetCount} >reset</button>
            <br />
        </>


    );
};

export default NumbersDisplay;