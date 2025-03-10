import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValuesType = "all" | "completed" | "active"

function App() {

    const initTasks: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]


    let [tasks, setTasks] = useState<Array<TaskType>>(initTasks);
    let [filter, setFilter] = useState<FilterValuesType>("all");



    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks);
    }

    function changeFilter (value: FilterValuesType){
        setFilter(value)
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
                title="What to lern ?"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}

            />


        </div>


    );
}

export default App;
