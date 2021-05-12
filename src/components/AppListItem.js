import React from 'react'

export const AppListItem = ({ todo, i, handleToggle, handleDelete }) => {
    return (
        <li
            key={todo.id}
            className="list-group-item"
        >
            <p
                className={`${todo.done && "complete"}`}
                onClick={() => handleToggle(todo.id)}
            >
                {i + 1}.{todo.desc}
            </p>

            <button
                className="btn btn-dark mx-2"
                onClick={() => handleDelete(todo.id)}
            >
                Delete</button>
        </li>

    )
}
