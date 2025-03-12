import React, {KeyboardEvent, ChangeEvent, useState, useEffect} from "react";
import {FilterValuesType} from "./App_test";
import './Todolist_test.css'

export type TaskType = {
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
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string, newTaskPeriod: string, newTaskUser: string,
              newTaskSumm: number, quantity: number, prise: number,
              unit: string) => void

}

export function Todolist_test(props: TodolistType) {

    let [newTaskTitle, setNewTaskTitle] = useState("")
    let [newTaskPeriod, setNewTaskPeriod] = useState("")
    let [newTaskUser, setNewTaskUser] = useState("")
    let [newTaskUnit, setNewTaskUnit] = useState("")
    let [newTaskSumm, setNewTaskSumm] = useState(0)
    let [newTaskQuantity, setNewTaskQuantity] = useState(0)
    let [newTaskPrise, setNewTaskPrise] = useState(0)

    useEffect(()=>{setNewTaskSumm(parseFloat((newTaskPrise * newTaskQuantity).toFixed(2)))},[newTaskPrise,newTaskQuantity])

    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }

    const onNewPeriodChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskPeriod(e.currentTarget.value)
    }

    const onNewUserChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskUser(e.currentTarget.value)
    }

    const onNewUnitChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskUnit(e.currentTarget.value)
    }

    const onNewSummChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length !== 0) {
            const summ = parseFloat(e.currentTarget.value);
            setNewTaskQuantity(parseFloat(summ.toFixed(2)));
        } else {
            setNewTaskSumm(0); // У випадку, якщо введено 0, ми можемо встановити значення в 0
        }

        setNewTaskSumm(parseFloat(parseFloat(e.currentTarget.value).toFixed(2)))
    }
    const onNewQuantityChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.currentTarget.value.length !== 0) {

            let quantity = parseFloat(e.currentTarget.value);

            setNewTaskQuantity(parseFloat(quantity.toFixed(2)));
        } else {
            setNewTaskQuantity(0); // У випадку, якщо введено 0, ми можемо встановити значення в 0
        }
    }




    const onNewPriseChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.value.length !== 0) {
            const prise = parseFloat(e.currentTarget.value);
            setNewTaskPrise(parseFloat(prise.toFixed(2)));
            console.log(newTaskPrise)
        } else {
            // Якщо поле порожнє, встановіть значення в 0
            setNewTaskPrise(0);
        }
    }


    const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && e.key === "Enter") {
            if (newTaskTitle.trim() !== ""
                && newTaskPeriod.trim() !== ""
                && newTaskUser.trim() !== ""
                && newTaskUnit.trim() !== ""
                && newTaskQuantity !==0
                && newTaskPrise !==0) {
                props.addTask(newTaskTitle, newTaskPeriod, newTaskUser,
                    newTaskSumm, newTaskQuantity, newTaskPrise, newTaskUnit);

                setNewTaskTitle("");
                setNewTaskPeriod("");
                setNewTaskUser("");
                setNewTaskUnit("")
                setNewTaskQuantity(0);
                setNewTaskPrise(0);
                setNewTaskSumm(0);

            }
        }
    };

    const onAddTaskHandler = () => {
        if (newTaskTitle.trim() !== ""
            && newTaskPeriod.trim() !== ""
            && newTaskUser.trim() !== ""
            && newTaskUnit.trim() !== ""
            && newTaskQuantity !==0
            && newTaskPrise !==0) {
            props.addTask(newTaskTitle, newTaskPeriod, newTaskUser,
                newTaskSumm, newTaskQuantity, newTaskPrise, newTaskUnit);

            setNewTaskTitle("");
            setNewTaskPeriod("");
            setNewTaskUser("");
            setNewTaskUnit("")
            setNewTaskQuantity(0);
            setNewTaskPrise(0);
            setNewTaskSumm(0);

        }
    };

    const onRemoveTaskHandler = (id: string) => {
        props.removeTasks(id)
    }

    const onChangeTask =(id: string)=>{
        alert(`Ви намагаєтесь редагувати завдання з id : ${id}`)
    }


    return <div className={"top"}>
        <h3>{props.title}</h3>
        <div>

            <div className='input-Mit-Label'>
                <label htmlFor="User">Покупець</label>
                <input
                    id="User"
                    value={newTaskUser}
                    onChange={onNewUserChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
            </div>
            <div className='input-Mit-Label'>
                <label htmlFor="taskTitle">Товар</label>
                <input
                    id="taskTitle"
                    value={newTaskTitle}
                    onChange={onNewTitleChangeHandler}
                />
            </div>

            <div className='input-Mit-Label'>
                <label htmlFor="unit">Одиниця</label>
                <input
                    id="unit"
                    value={newTaskUnit}
                    onChange={onNewUnitChangeHandler}
                />
            </div>

            <div className='input-Mit-Label'>
                <label htmlFor="taskPeriod">Період</label>
                <input
                    id="taskPeriod"
                    type="date"
                    value={newTaskPeriod}
                    onChange={onNewPeriodChangeHandler}
                />
            </div>

            <div className='input-Mit-Label'>
                <label htmlFor="quantity">Кількість</label>
                <input

                    id="quantity"
                    type="number"
                    // step="0.01"
                    value={newTaskQuantity}
                    onChange={onNewQuantityChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
            </div>

            <div className='input-Mit-Label'>
                <label htmlFor="prise">Ціна</label>
                <input
                    id="prise"
                    type="number"
                    // step="0.01"
                    value={newTaskPrise}
                    onChange={onNewPriseChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
            </div>

            <div className='input-Mit-Label'>
                <label htmlFor="Summ">Cума</label>
                <input
                    id="Summ"
                    type="number"
                    // step="0."
                    value={newTaskSumm}
                    onChange={onNewSummChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
            </div>


            <button
                className={'button-add-task'}
                onClick={onAddTaskHandler}
            >+
            </button>
            <div className="headerTable">
                <span className="span-title">Товар</span>
                <span className="span-user">Од.виміру</span>
                <span className="span-period">Період</span>
                <span className="span-user">Кількість</span>
                <span className="span-user">Ціна</span>
                <span className="span-user">Cума</span>
                <span className="span-user">Покупець</span>
                <span className="span-change">Дії</span>
            </div>
            <ul>
                {
                    props.tasks.map((t) =>
                        <li
                            key={t.id}>
                            <input
                                className="string-task"
                                type="checkbox"
                                checked={t.isDone}/>
                            <span className="span-title">{t.title}</span>
                            <span className="span-title">{t.unit}</span>
                            <span className="span-period">{t.period}</span>
                            <span className="span-period">{t.quantity}</span>
                            <span className="span-period">{t.prise}</span>
                            <span className="span-period">{t.summ}</span>
                            <span className="span-user">{t.user}</span>
                            <button onClick={() => onChangeTask(t.id)}>...</button>
                            <button onClick={() => onRemoveTaskHandler(t.id)}>x</button>
                        </li>)
                }
            </ul>
            <button onClick={() => props.changeFilter("all")}>All</button>
            <button onClick={() => props.changeFilter("active")}>Active</button>
            <button onClick={() => props.changeFilter("completed")}>Completed</button>
        </div>

    </div>
}