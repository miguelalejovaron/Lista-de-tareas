import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css"

const TodoCounter = () => {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
        <h2 className="title">You have completed {completedTodos} of {totalTodos} To do's</h2>
    );
}

export {TodoCounter};