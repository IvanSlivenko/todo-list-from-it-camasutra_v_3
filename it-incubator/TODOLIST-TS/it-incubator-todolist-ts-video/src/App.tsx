import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from 'uuid'
import {log} from "node:util";

export type FilterValuesType = "all" | "completed" | "active"

function App() {

    const initTasks: Array<TaskType> = [
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false}
    ]


    let [tasks, setTasks] = useState<Array<TaskType>>(
        [
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false}
        ]
    );
    let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(id: string) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    function changeStatus(taskId: string, isDone: boolean) {
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
        }
        setTasks([...tasks])

    }

    let tasksForTodolist = tasks;
    // ---------------------------------------------- filtered script home
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    // ---------------------------------------------- filtered script end

    // ===============================================
    let [value, setValue] = useState("")

    const onChangeValue = (e: ChangeEvent<HTMLInputElement> )=>{
        setValue(e.target.value)
    }
    // ===============================================


    let todolists = [
        {id: v1(), title: "What to learn", filter: "active"},
        {id: v1(), title: "What to bay", filter: "completed"}

    ]

    return (
        <div className="App">
            <div className="app-header">
                <input type="text"
                       className="input-add-tasks"
                       placeholder="Вкажіть назву"
                       onChange={onChangeValue}

                />
                <button
                 onClick={()=>console.log(value)}>
                    +</button>
            </div>

            {
                todolists.map(tl=>{
                    return  <Todolist
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={filter}

                    />
                })
            }




        </div>


    );
}

export default App;
