import React, {ChangeEvent} from "react";
import {FilterValuesType} from "./App_test";
import './Todolist_test.css'
// import {AddItemForm} from "./AddItemForm_test";
import {AddItemForm_test} from "./AddItemForm_test";
import {
    EditableSpan_test,
    EditableSpanPeriod,
    EditableSpanPrise,
    EditableSpanQuantity,
    EditableSpanSumm,
    EditableSpanUnit,
    EditableSpanUser
} from "./EditableSpan_test";


export type TaskTypeTest = {
    id: string,
    title: string,
    isDone: boolean,
    period: string,
    user: string,
    summ: number,
    quantity: number,
    prise: number
    unit: string
}

export type TodolistType = {
    id: string,
    title: string
    tasks: Array<TaskTypeTest>
    removeTasks: (id: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    addTaskItem: (title: string, newTaskPeriod: string, newTaskUser: string,
                  newTaskSumm: number, quantity: number, prise: number,
                  unit: string, todolistId: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean,
                       todolistId: string) => void,
    filter: FilterValuesType
    removeTodolist: (todolistId: string) => void

}

export function Todolist_test(props: TodolistType) {


    const onChangeTask = (id: string) => {
        alert(`Ви намагаєтесь редагувати завдання з id : ${id}`)
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

    const addTask = (title: string, period: string, user: string, summ: number, quantity: number, price: number, unit: string) => {
        props.addTaskItem(title, period, user, summ, quantity, price, unit, props.id);
    };


    return <div className={"container"}>

        <h3>{props.title}
            <button onClick={removeTodolist}>x</button>

        </h3>

        <AddItemForm_test addItem={addTask} id={props.id}/>

        <div className="headerTable">
            <span className="tableHeader-span-cheked">S</span>
            <span className="tableHeader-span-title">Товар</span>
            <span className="tableHeader-span-unit">Од. виміру</span>
            <span className="tableHeader-span-period">Період</span>
            <span className="tableHeader-span-quantity">Кількість</span>
            <span className="tableHeader-span-prise">Ціна</span>
            <span className="tableHeader-span-summ">Cума</span>
            <span className="tableHeader-span-user">Покупець</span>
            <span className="tableHeader-span-change">Дії</span>
        </div>
        <div className="table-body">
            <ul>
                {
                    props.tasks.map((t) => {
                        const onRemoveTaskHandler = (id: string) => {
                            props.removeTasks(id, props.id)
                        }
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            // console.log(t.title + e.currentTarget.checked)
                            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id)
                        }
                        return <li
                            className={t.isDone === true
                                ?
                                "table-string" && "is-done"
                                :
                                "table-string"
                            }
                            key={t.id}>
                            <input
                                className="span-cheked"
                                type="checkbox"
                                checked={t.isDone}
                                onChange={onChangeHandler}
                            />

                            <EditableSpan_test title={t.title}/>
                            <EditableSpanUnit unit={t.unit}/>
                            <EditableSpanPeriod period={t.period}/>
                            <EditableSpanQuantity quantity={t.quantity}/>
                            <EditableSpanPrise prise={t.prise}/>
                            <EditableSpanSumm summ={t.summ}/>
                            <EditableSpanUser user={t.user}/>
                            <div className="span-change">
                                {/*<button onClick={() => onChangeTask(t.id)}>...</button>*/}
                                <button onClick={() => onRemoveTaskHandler(t.id)}>x</button>
                            </div>

                        </li>
                    })
                }
            </ul>
        </div>


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
}

