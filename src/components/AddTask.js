import React from 'react'
import { useForm } from '../hooks/useForm'

export const AddTask = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ""
    })

    const handleSubmit = (e) => {


        if (description.trim().length < 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo(newTodo)
        reset()
    }

    return (
        <>
            <h4>Add tasks</h4>
            <hr />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Task..."
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                ></input>

                <button
                    type="submit"
                    className="btn btn-dark btn-block my-2"
                >Add</button>
            </form>

        </>
    )
}
