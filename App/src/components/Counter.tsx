import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const handleUp = (): void => {
        setCount(count + 1);
    };

    const handleDown = (): void => {
        setCount(count - 1);
    };

    return (
        <div>
            <div>{count}</div>
            <button onClick={handleUp}>Up</button>
            <button onClick={handleDown}>Down</button>
        </div>
    );
};

export default Counter;
