import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App";
import {AddItemForm} from "./AddItemForm";
import {EditableSpan} from "./EditableSpan";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean

}

export type TodolistType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void


}

export function Todolist(props: TodolistType) {


    const onAllClickHandler = () => {
        props.changeFilter("all", props.id)
    }
    const onActiveClickHandler = () => {
        props.changeFilter("active", props.id)
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed", props.id)
    }

    const removeTodolist = () => {
        props.removeTodolist(props.id)

    }


    const addTask = (title: string)=> {
        props.addTask(title, props.id)
    }

    return <div className="todolist-box">
        <h3>{props.title}
            <button onClick={removeTodolist}>x</button>
        </h3>
        <div>

            <AddItemForm  addItem={addTask}/>
            <ul>
                {
                    props.tasks.map((t) => {

                        const onRemoveHandler = () => {
                            props.removeTask(t.id, props.id)
                        }

                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            // console.log(t.title + e.currentTarget.checked)
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                        }
                        return <li
                            key={t.id}
                            className={t.isDone === true ? "is-done" : ""}
                        >
                            <input
                                type="checkbox"
                                checked={t.isDone}
                                onChange={onChangeHandler}
                            />
                            <EditableSpan title={t.title} editMode={false}/>
                            <button onClick={onRemoveHandler}>x</button>

                        </li>
                    })

                }
            </ul>
            <button
                className={props.filter === "all" ? "active-filter" : ""}
                onClick={onAllClickHandler}
            >All
            </button>
            <button
                className={props.filter === "active" ? "active-filter" : ""}
                onClick={onActiveClickHandler}
            >Active
            </button>
            <button
                className={props.filter === "completed" ? "active-filter" : ""}
                onClick={onCompletedClickHandler}
            >Completed
            </button>
        </div>

    </div>
}



