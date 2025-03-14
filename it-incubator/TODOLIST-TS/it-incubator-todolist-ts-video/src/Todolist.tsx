import React, {ChangeEvent, KeyboardEvent, useState} from "react";
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
    changeStatus: (taskId: string, isDone: boolean) => void


}

export function Todolist(props: TodolistType) {

    let [newTaskTitle, setNewTaskTitle] = useState("")

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === "Enter") {
            props.addTask(newTaskTitle)
            setNewTaskTitle("")
        }
    }

    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle("")
    }

    const onAllClickHandler = () => {
        props.changeFilter("all")
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={newTaskTitle}
                onChange={onNewTitleChangeHandler}
                onKeyDown={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            <ul>
                {
                    props.tasks.map((t) =>{

                      const  onRemoveHandler = () =>{
                          props.removeTask(t.id)
                      }
                      return  <li
                            key={t.id}>
                            <input
                                type="checkbox"
                                // checked={t.isDone}
                                onChange={()=>props.changeStatus(t.id, t.isDone)}
                            />
                            <span>{t.title}</span>
                            <button onClick={onRemoveHandler}>x</button>

                        </li>})

                }
            </ul>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedClickHandler}>Completed</button>
        </div>

    </div>
}