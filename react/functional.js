import React, { useState } from "react";

function FunctionalComponent() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Functional Component</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default FunctionalComponent;
