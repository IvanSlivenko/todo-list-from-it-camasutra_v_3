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
              unit: string) => void,
    changeStatus: (taskId: string, isDone: boolean) => void

}

export function Todolist_test(props: TodolistType) {

    let [isHidden, setIsHidden] = useState(true)

    let [newTaskTitle, setNewTaskTitle] = useState("")
    let [newTaskPeriod, setNewTaskPeriod] = useState("")
    let [newTaskUser, setNewTaskUser] = useState("")
    let [newTaskUnit, setNewTaskUnit] = useState("")
    let [newTaskSumm, setNewTaskSumm] = useState(0)
    let [newTaskQuantity, setNewTaskQuantity] = useState(0)
    let [newTaskPrise, setNewTaskPrise] = useState(0)

    useEffect(() => {
        setNewTaskSumm(parseFloat((newTaskPrise * newTaskQuantity).toFixed(2)))
    }, [newTaskPrise, newTaskQuantity])

    // useEffect(() => {
    //     setNewTaskSumm(Number((newTaskPrise * newTaskQuantity).toFixed(2)));
    // }, [newTaskPrise, newTaskQuantity]);

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
                && newTaskQuantity !== 0
                && newTaskPrise !== 0) {
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
            && newTaskQuantity !== 0
            && newTaskPrise !== 0) {
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

    const onChangeTask = (id: string) => {
        alert(`Ви намагаєтесь редагувати завдання з id : ${id}`)
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

    const onChangeIsHidentInputGroup = (isHidden: boolean) => {
        setIsHidden(!isHidden);
    }


    return <div className={"container"}>
        <div className="title-group">
            <h3>{props.title}</h3>
            {
                isHidden ?
                    <button
                        className="btn-data-group-view"
                        onClick={() => onChangeIsHidentInputGroup(true)}>Відобразити...
                    </button>
                    :
                    <button
                        className="btn-data-group-hidden"
                        onClick={() => onChangeIsHidentInputGroup(false)}>Сховати...
                    </button>
            }

        </div>


        <div className={isHidden ? "data-group-hidden" : "data-group-view"}>
            <div className='input-Mit-Label-Right'>

                <input
                    className="title-group-input-date"
                    id="taskPeriod"
                    type="date"
                    value={newTaskPeriod}
                    onChange={onNewPeriodChangeHandler}
                />
                <label
                    className="title-group-lable-right"
                    htmlFor="taskPeriod">Період
                </label>
            </div>


            <div className='input-Mit-Label'>
                <label
                    className="title-group-lable-right"
                    htmlFor="User">Покупець</label>
                <input
                    className="title-group-input"
                    id="User"
                    value={newTaskUser}
                    onChange={onNewUserChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
            </div>

            <div className='input-Mit-Label'>
                <label
                    className="title-group-lable-right"
                    htmlFor="taskTitle">Товар
                </label>
                <input
                    className="title-group-input"
                    id="taskTitle"
                    value={newTaskTitle}
                    onChange={onNewTitleChangeHandler}
                />
            </div>

            <div className='input-Mit-Label-Midle'>
                <label
                    className="title-group-lable-right"
                    htmlFor="unit">Одиниця
                </label>
                <input
                    className="title-group-input-short"
                    id="unit"
                    value={newTaskUnit}
                    onChange={onNewUnitChangeHandler}
                />

                <label
                    className="title-group-lable-right"
                    htmlFor="quantity">Кількість
                </label>
                <input
                    className="title-group-input-short"
                    id="quantity"
                    type="number"
                    // step="0.01"
                    value={newTaskQuantity}
                    onChange={onNewQuantityChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />

                <label
                    className="title-group-lable-right"
                    htmlFor="prise">Ціна
                </label>
                <input
                    className="title-group-input-short"
                    id="prise"
                    type="number"
                    // step="0.01"
                    value={newTaskPrise}
                    onChange={onNewPriseChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
            </div>

            <div className='input-Mit-Label'>

            </div>

            <div className='input-Mit-Label'>

            </div>

            <div className='input-Mit-Label-Right'>
                <label
                    className="title-group-lable-left"
                    htmlFor="Summ">Cума
                </label>
                <input
                    className="title-group-input-short"
                    id="Summ"
                    type="number"
                    // step="0."
                    value={newTaskSumm}
                    onChange={onNewSummChangeHandler}
                    onKeyDown={onKeyDownHandler}
                />
                <button
                    className={'button-add-task'}
                    onClick={onAddTaskHandler}
                >Додати замовлення
                </button>
            </div>


        </div>

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
                            props.removeTasks(id)
                        }
                        return <li
                            className="table-string"
                            key={t.id}>
                            <input
                                className="span-cheked"
                                type="checkbox"
                                // checked={t.isDone}
                                onChange={() => props.changeStatus(t.id, t.isDone)}
                            />
                            <span className="span-title">{t.title}</span>
                            <span className="span-unit">{t.unit}</span>
                            <span className="span-period">{t.period}</span>
                            <span className="span-quantity">{t.quantity}</span>
                            <span className="span-prise">{t.prise}</span>
                            <span className="span-summ">{t.summ}</span>
                            <span className="span-user">{t.user}</span>
                            <div className="span-change">
                                <button onClick={() => onChangeTask(t.id)}>...</button>
                                <button onClick={() => onRemoveTaskHandler(t.id)}>x</button>
                            </div>

                        </li>
                    })
                }
            </ul>
        </div>

        <button onClick={onAllClickHandler}>All</button>
        <button onClick={onActiveClickHandler}>Active</button>
        <button onClick={onCompletedClickHandler}>Completed</button>
    </div>


}