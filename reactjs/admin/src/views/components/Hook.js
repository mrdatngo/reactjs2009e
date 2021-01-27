import React, { useState, useEffect, useCallback, useMemo } from "react";

export default function Hook() {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState("");

    console.log("componentDidUpdate outside");
    useEffect(() => {
        console.log("useEffect [] => componentDidMount");
        return () => {
            console.log("componentWillUnmount");
        };
    }, []);

    useEffect(() => {
        console.log("componentDidUpdate/Mount");
        document.title = counter;
        return () => {
            console.log("Clean");
        };
    });

    useEffect(() => {
        console.log("useEffect counter");
        document.title = counter;
    }, [counter]);

    const onNameChange = (event) => {
        setName(event.target.value);
    };

    const multiplyCounterValue = useMemo(() => {
        console.log("calculate");
        for (var i = 0; i < 1000000000; i++) {}
        return counter * 2;
    }, [counter]);

    const multiplyCounterCallback = useCallback(() => {
        console.log("calculate");
        for (var i = 0; i < 1000000000; i++) {}
        return counter * 2;
    }, [counter]);

    return (
        <div>
            Hook
            <hr />
            Counter: {counter}
            <br />
            multiplyCounterValue: {multiplyCounterValue}
            <br />
            MultiplyCounter: {multiplyCounterCallback()}
            <br />
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <hr />
            <title>Name: </title>
            <input type="text" value={name} onChange={onNameChange} />
        </div>
    );
}
