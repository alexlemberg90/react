import React, {useEffect, useReducer, useState} from "react";
import{useSelector, useDispatch} from "react-redux"
import "./App.css";


export default function App() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${counter}`)
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: "SET_TODO", payload: json });
            });
    }, [counter]);

    const onClickHandler = () => setCounter((prev) => prev + 1);

    const onStatusChange = () => dispatch({ type: "CHANGE_TODO_STATUS" });

    const onTitleChange = () =>
        dispatch({
            type: "CHANGE_TODO_TITLE",
            payload: Math.random(100 - 10) * 100
        });

    return (
        <div className="App">
            <button onClick={onClickHandler}>inc</button>
            <button onClick={onStatusChange}>change todo status</button>
            <button onClick={onTitleChange}>change todo title</button>

            <h1>Counter value: {counter}</h1>
            {!!state && (
                <>
                    <h2>{state.id}</h2>
                    <h2>{state.title}</h2>
                    <h2>{state.completed.toString()}</h2>
                </>
            )}
        </div>
    );
}

