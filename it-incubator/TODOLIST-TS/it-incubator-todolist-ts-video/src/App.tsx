import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from 'uuid'


export type FilterValuesType = "all" | "completed" | "active"

export type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

function App() {

    const initTasks: Array<TaskType> = [
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: false}
    ]


    let [Oldtasks, setOldTasks] = useState<Array<TaskType>>(
        [
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false}
        ]
    );
    let [filter, setFilter] = useState<FilterValuesType>("all");


    function removeTask(id: string, todolistId: string) {
        let tasks = tasksObj[todolistId]
        let filteredTasks = tasks.filter(t => t.id !== id);
        tasksObj[todolistId] = filteredTasks;
        setTasks({...tasksObj});
    }

    function addTask(title: string, todolistId: string) {
        let task = {
            id: v1(),
            title: title,
            isDone: false
        }

        let tasks = tasksObj[todolistId]

        let newTasks = [task, ...tasks];
        tasksObj[todolistId]=newTasks;
        setTasks({...tasksObj});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone
            setTasks({...tasksObj});
        }
    }

    // let tasksForTodolist = tasksObj;


    function changeFilter(value: FilterValuesType, todolistId: string) {
        // setFilter(value)
        let todolist = todolists.find(t => t.id === todolistId);
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }


    }

    let [value, setValue] = useState("")

    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    // ===============================================

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>(
        [
            {id: todolistId1, title: "What to learn", filter: "active"},
            {id: todolistId2, title: "What to bay", filter: "completed"}

        ]
    )

    let [tasksObj, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "React", isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: "nodeJs", isDone: true},
            {id: v1(), title: "MatirialUA", isDone: true},
            {id: v1(), title: "Redux", isDone: false}
        ]
    })

    return (
        <div className="App">
            <div className="app-header">
                <input type="text"
                       className="input-add-tasks"
                       placeholder="Вкажіть назву"
                       onChange={onChangeValue}

                />
                <button
                    onClick={() => console.log(value)}>
                    +
                </button>
            </div>

            <div className="App-box">
                {
                    todolists.map((tl) => {
                        let tasksForTodolist = tasksObj[tl.id];
                        // ---------------------------------------------- filtered script home
                        if (tl.filter === "active") {
                            tasksForTodolist = taskForTodolist.filter(t => t.isDone === false)
                        }
                        if (tl.filter === "completed") {
                            tasksForTodolist = taskForTodolist.filter(t => t.isDone === true)
                        }

                        return <Todolist
                            key={tl.id} // Додаємо унікальний ключ
                            id={tl.id}
                            title={tl.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={tl.filter}

                        />
                    })
                }
            </div>

        </div>

    );
};

export default App;
