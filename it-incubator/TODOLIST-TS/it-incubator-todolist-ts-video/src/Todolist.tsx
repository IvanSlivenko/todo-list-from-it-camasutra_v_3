import React from "react";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean

}

export type TodolistType ={
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void


}

export function Todolist (props: TodolistType) {

    const sendMessage=(title: string)=>{
        alert(`Ви виявили бажання видалити завдання${title}` )

    }

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
                            <button onClick={() => props.removeTask(t.id)}>x</button>

                        </li>)
                }
            </ul>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>

    </div>
}