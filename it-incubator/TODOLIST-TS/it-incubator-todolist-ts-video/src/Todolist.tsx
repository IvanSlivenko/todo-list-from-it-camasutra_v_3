import React, {ChangeEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean

}

export type TodolistType ={
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void


}

export function Todolist (props: TodolistType) {

    let [newTaskTitle, setNewTaskTitle] = useState("")

    const titleChangeHadler= (e:ChangeEvent<HTMLInputElement>)=>{
        setNewTaskTitle(e.currentTarget.value)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTaskTitle}
                onChange={ (e:ChangeEvent<HTMLInputElement>)=>{setNewTaskTitle(e.currentTarget.value)}}
                // onChange={ (e)=>titleChangeHadler(e.currentTarget.value)}

            />
            <button onClick={()=> {props.addTask(newTaskTitle)}}>+</button>
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
            <button onClick={()=>props.changeFilter("all")}>All</button>
            <button onClick={()=>props.changeFilter("active")}>Active</button>
            <button onClick={()=>props.changeFilter("completed")}>Completed</button>
        </div>

    </div>
}