import React from "react";
import "./TodoCounter.css"

const TodoCounter = ({total, completed}) => {
    return (
        <h2 className="title">Has completado {completed} de {total} Todos</h2>
    );
}

export {TodoCounter};