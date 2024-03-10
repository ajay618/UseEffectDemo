import React, { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Mounting..");

        // Cleanup function
        return () => {
            console.log("Clean Up");
        };
    }, []); // Empty dependency array means it runs only once when mounted

    useEffect(() => {
        console.log("Count has changed:", count);
    }, [count]); // useEffect will run only when 'count' changes

    const incrementCount = () => setCount(count + 1);

    const decrementCount = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </div>
    );
}

export default Counter;
