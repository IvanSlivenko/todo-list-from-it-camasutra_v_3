import React from "react";

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
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>

    </div>
}