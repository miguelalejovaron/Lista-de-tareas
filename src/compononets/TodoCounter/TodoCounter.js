import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import "./TodoCounter.css"

const TodoCounter = () => {
    const {totalTodos, completedTodos} = React.useContext(TodoContext)
    return (
        <h2 className="title">Has completado {completedTodos} de {totalTodos} Todos</h2>
    );
}

export {TodoCounter};