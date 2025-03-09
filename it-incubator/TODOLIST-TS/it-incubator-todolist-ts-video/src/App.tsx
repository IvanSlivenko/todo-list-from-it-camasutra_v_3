import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {Todolist_test} from "./Todolist_test";

import {tasks_test} from "./tasks_test";

function App() {

    const tasks: Array<TaskType> = [
        {id: 1, title: "CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]



    let [Currenttasks, setNewTasks] = useState(tasks)


    function removeTask(id: number) {
        let newTasks = Currenttasks.filter(t => t.id !== id);
        setNewTasks(newTasks);
    }

    return (
        <div className="App">

            <Todolist
                title="What to lern ?"
                tasks = {Currenttasks}
                removeTask={removeTask}

            />




        </div>


    );
}

export default App;
