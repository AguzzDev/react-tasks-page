import React, { useEffect, useReducer } from 'react'
import { AppReducer } from './appReducer'
import { AppList } from './AppList'
import { AddTask } from './AddTask'

import './style.css'

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || []
}

export const App = () => {

    const [todos, dispatch] = useReducer(AppReducer, [], init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: "delete",
            payload: todoId
        }
        dispatch(action)

    }
    const handleToggle = (todoId) => {
        dispatch({
            type: "toggle",
            payload: todoId
        })
    }
    const handleAddTodo = (newTodo) => {
        dispatch({
            type: "add",
            payload: newTodo
        })

    }

    return (
        <div>
            <h1>Task App ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <AppList
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />

                </div>

                <div className="col-5">
                    <AddTask
                        handleAddTodo={handleAddTodo}
                    />

                </div>
            </div>
        </div>
    )
}
