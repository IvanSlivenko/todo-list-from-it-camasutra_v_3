import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App_test";
import './Todolist_test.css'

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
    period: string
    user: string
}

export type TodolistType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string, newTaskPeriod: string, newTaskUser: string) => void

}

export function Todolist_test(props: TodolistType) {

    let [newTaskTitle, setNewTaskTitle] = useState("")
    let [newTaskPeriod, setNewTaskPeriod] = useState("")
    let [newTaskUser, setNewTaskUser] = useState("")

    return <div>
        <h3>{props.title}</h3>
        <div>
            <div className='input-Mit-Label'>
                <label htmlFor="taskTitle">Назва завдання</label>
                <input
                    id="taskTitle"
                    value={newTaskTitle}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setNewTaskTitle(e.currentTarget.value)
                    }}
                />
            </div>

            <div className='input-Mit-Label'>
                <label htmlFor="taskPeriod">Період</label>
                <input
                    id="taskPeriod"
                    value={newTaskPeriod}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setNewTaskPeriod(e.currentTarget.value)
                    }}
                />
            </div>

            <div className='input-Mit-Label'>
                <label htmlFor="User">Користувач</label>
                <input
                    id="User"
                    value={newTaskUser}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setNewTaskUser(e.currentTarget.value)
                    }}
                />
            </div>

            <button
                className={'button-add-task'}
                onClick={() => {
                props.addTask(newTaskTitle, newTaskPeriod, newTaskUser)
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
                            <span>{t.period}</span>
                            <span>{t.user}</span>
                            <button>...</button>
                            <button onClick={() => props.removeTasks(t.id)}>x</button>
                        </li>)
                }
            </ul>
            <button onClick={() => props.changeFilter("all")}>All</button>
            <button onClick={() => props.changeFilter("active")}>Active</button>
            <button onClick={() => props.changeFilter("completed")}>Completed</button>
        </div>

    </div>
}