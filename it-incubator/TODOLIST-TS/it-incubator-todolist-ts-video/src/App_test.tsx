import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Todolist_test} from "./Todolist_test";

import {tasks_test} from "./tasks_test";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active"

function App_test() {

    const tasks1 = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]

    const tasks2 = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "Avatar", isDone: true},
        {id: 3, title: "Jentelmens of fortune", isDone: true}
    ]

    let [currentTasks, setCurrentTasks] = useState(tasks_test)
    let [filter, setFilter] = useState<FilterValuesType>("all");

    const removeTasks = (id: string) => {
        let newTasks = currentTasks.filter(t => t.id !== id);
        setCurrentTasks(newTasks)
    }

    function addTask(title: string, newTaskPeriod: string,
                     newTaskUser: string, summ: number,
                     quantity: number, prise: number, unit: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false,
            period: newTaskPeriod,
            user: newTaskUser,
            summ: summ,
            quantity: quantity,
            prise: prise,
            unit: unit


        }
        let newTasks = [newTask, ...currentTasks]
        setCurrentTasks(newTasks)
    }


    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = currentTasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone;
        }
        setCurrentTasks([...currentTasks])
    }

    let taskForTodolist = currentTasks;
    // ---------------------------------------------- filtered script home
    if (filter === "active") {
        taskForTodolist = currentTasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        taskForTodolist = currentTasks.filter(t => t.isDone === true)
    }
    // ---------------------------------------------- filtered script end

    return (
        <div className="App">

            <Todolist_test
                title="What to learn ?"
                tasks={taskForTodolist}
                removeTasks={removeTasks}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter = {filter}

            />

        </div>


    );
}

export default App_test;
