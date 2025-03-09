import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    const tasks: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]


    let [CurrentTasks, setNewTasks] = useState(tasks)
    let [] = useState(tasks);


    function removeTask(id: number) {
        let filteredTasks = CurrentTasks.filter(t => t.id !== id);
        setNewTasks(filteredTasks);
    }

    return (
        <div className="App">

            <Todolist
                title="What to lern ?"
                tasks={CurrentTasks}
                removeTask={removeTask}

            />


        </div>


    );
}

export default App;
