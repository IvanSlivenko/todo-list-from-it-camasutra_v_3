import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from 'uuid'

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

    function addTask(title: string){
        let newTask = {
            id: v1(),
            title: title,
            isDone: false
        }
        let newTasks=[newTask,...tasks]
        setTasks(newTasks)
    }

    function changeFilter (value: FilterValuesType){
        setFilter(value)
    }

    function changeStatus (taskId : string, isDone: boolean) {
        let task = tasks.find(t=> t.id === taskId);
        if(task){
            task.isDone = !task.isDone
        }
        let newTask = [...tasks]
        setTasks(newTask)
    }

    let tasksForTodolist = tasks;
    // ---------------------------------------------- filtered script home
    if(filter === "completed") {
        tasksForTodolist = tasks.filter(t=>t.isDone === true)
    }
    if(filter === "active") {
        tasksForTodolist = tasks.filter(t=>t.isDone === false)
    }

    // ---------------------------------------------- filtered script end

    return (
        <div className="App">

            <Todolist
                title="What to learn ?"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeStatus={changeStatus}

            />


        </div>


    );
}

export default App;
