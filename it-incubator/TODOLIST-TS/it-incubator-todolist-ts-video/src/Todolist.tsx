import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean

}

export type TodolistType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void


}

export function Todolist(props: TodolistType) {

    let [newTaskTitle, setNewTaskTitle] = useState("")

    const onNewTitleChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTaskTitle}
                onChange={onNewTitleChangeHandler}
                onKeyDown={(e)=>{
                if(e.ctrlKey && e.key === "Enter"){
                    props.addTask(newTaskTitle)
                    setNewTaskTitle("")
                }
                }}

            />
            <button onClick={() => {
                props.addTask(newTaskTitle)
                setNewTaskTitle("")
            }}>+
            </button>
            <ul>
                {
                    props.tasks.map((t) =>
                        <li
                            key={t.id}>
                            <input
                                type="checkbox"
                                checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={() => props.removeTask(t.id)}>x</button>

                        </li>)
                }
            </ul>
            <button onClick={() => props.changeFilter("all")}>All</button>
            <button onClick={() => props.changeFilter("active")}>Active</button>
            <button onClick={() => props.changeFilter("completed")}>Completed</button>
        </div>

    </div>
}