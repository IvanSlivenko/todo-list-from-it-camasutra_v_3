import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Todolist_test} from "./Todolist_test";

import {tasks_test} from "./tasks_test";

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

    const removeTasks = (id: number) => {
        let newTasks = currentTasks.filter(t => t.id !== id);
        setCurrentTasks(newTasks)
    }

    return (
        <div className="App">

            <Todolist_test
                title="What to lern ?"
                tasks={currentTasks}
                removeTasks={removeTasks}

            />

        </div>


    );
}

export default App_test;
