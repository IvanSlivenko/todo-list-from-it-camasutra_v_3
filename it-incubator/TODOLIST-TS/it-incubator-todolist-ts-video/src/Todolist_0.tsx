import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

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

    let [title, settitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (title.trim() !== "" && e.ctrlKey && e.key === "Enter") {
            addTask();
        }
    }

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title, props.id)
            settitle("")
        } else {
            setError("!!!!!")
        }
    }

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

    return <div className="todolist-box">
        <h3>{props.title}
            <button onClick={removeTodolist}>x</button>
        </h3>
        <div>
            <div>
                <input
                    className={error ? "error" : ""}
                    value={title}
                    onChange={onNewTitleChangeHandler}
                    onKeyDown={onKeyPressHandler}
                />
                {
                    error
                        ?
                        <div className={error ? "error-message" : ""}> Field is requared </div>
                        :
                        null

                }


                <button onClick={addTask}>+</button>
            </div>
            <AddItemForm id={props.id} addTask={props.addTask}/>
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
                            <span>{t.title}</span>
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

type AddItemFormPropsType = {
    addTask: (title: string, todolistId: string) => void
    id: string


}

function AddItemForm(props: AddItemFormPropsType) {
    let [title, settitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        settitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (title.trim() !== "" && e.ctrlKey && e.key === "Enter") {
            addTask();
        }
    }

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title, props.id)
            settitle("")
        } else {
            setError("!!!!!")
        }
    }

    return <div>
        <input
            className={error ? "error" : ""}
            value={title}
            onChange={onNewTitleChangeHandler}
            onKeyDown={onKeyPressHandler}
        />
        {
            error
                ?
                <div className={error ? "error-message" : ""}> Field is requared </div>
                :
                null

        }

        <button onClick={addTask}>+</button>
    </div>
}