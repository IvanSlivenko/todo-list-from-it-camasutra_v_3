import React from "react";
import {FilterValuesType} from "./App_test";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
    period: string
    user: string
}

export type TodolistType ={
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number) => void
    changeFilter: (value: FilterValuesType) => void

}

export function Todolist_test (props: TodolistType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
            <ul>
                {
                    props.tasks.map((t) =>
                        <li
                            key={t.id}>
                            <input
                                type="checkbox"
                                checked={t.isDone}/>
                            <span>{t.title}</span>
                            <span>{t.period}</span>
                            <span>{t.user}</span>
                            <button>...</button>
                            <button onClick={()=>props.removeTasks(t.id)}>x</button>
                        </li>)
                }
            </ul>
            <button onClick={()=>props.changeFilter("all")}>All</button>
            <button onClick={()=>props.changeFilter("active")}>Active</button>
            <button onClick={()=>props.changeFilter("completed")}>Completed</button>
        </div>

    </div>
}