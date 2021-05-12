import React from 'react'
import { AppListItem } from './AppListItem'

export const AppList = ({ todos, handleDelete, handleToggle }) => {

    return (

        <ul className="list-group list-group-flush">
            {
                todos.map((todo, i) => (
                    <AppListItem
                        key={todo.id}
                        todo={todo}
                        i={i}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))
            }
        </ul>
    )
}
