import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    useEffect(() => {
        console.log("======================");
        console.log("useEffect() is called.");
        console.log(`isFull: ${isFull}`);
    });

    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count value: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: 16 }}>
            <p>{`total ${count} peoples are accommodated.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                Entrance
            </button>
            <button onClick={decreaseCount}>Exit</button>

            {isFull && <p style={{ color: "red" }}>It&apos;s full</p>}
        </div>
    );
}

export default Accommodate;