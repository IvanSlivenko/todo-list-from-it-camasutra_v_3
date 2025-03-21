import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";
import {Todolist_test} from "./Todolist_test";
import {AddItemForm} from "./AddItemForm";

import {tasks_test1, tasks_test2} from "./tasks_test";
import {v1} from "uuid";

export type FilterValuesType = "all" | "completed" | "active"

export type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

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

    let [OldcurrentTasks, setOldCurrentTasks] = useState(tasks_test1)
    let [filter, setFilter] = useState<FilterValuesType>("all");

    const removeTasks = (id: string, todolistId: string) => {
        let tasks = tasksObj[todolistId];
        let filteredTasks = tasks.filter(t => t.id !== id);
        // setCurrentTasks(newTasks)
        tasksObj[todolistId] = filteredTasks
        setTasks({...tasksObj});
    }

    function addTask(title: string, newTaskPeriod: string,
                     newTaskUser: string, summ: number,
                     quantity: number, prise: number, unit: string, todolistId: string) {
        let task = {
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

        let tasks = tasksObj[todolistId];

        let newTasks = [task, ...tasks]
        tasksObj[todolistId] = newTasks;
        setTasks({...tasksObj})

    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let tasks = tasksObj[todolistId];
        let task = tasks.find(t => t.id === taskId)
        if (task) {
            task.isDone = isDone;
            setTasks({...tasksObj})
        }


    }


    function changeFilter(value: FilterValuesType, todolistId: string) {
        // setFilter(value);
        let todolist = todolists.find(t => t.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }

    }

//--------------------------------------------------------- Data -----------

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistType>>(
        [
            {id: todolistId1, title: "What to learn", filter: "active"},
            {id: todolistId2, title: "What to bay", filter: "completed"}

        ]
    )

    let removeTodolist=(todolistId: string)=>{
        let filteredTodolist = todolists.filter(t=>t.id !== todolistId )
        setTodolists(filteredTodolist)
        delete tasksObj[todolistId]
        setTasks({...tasksObj});
    }

    let [tasksObj, setTasks] = useState({
        [todolistId1]: tasks_test1,
        [todolistId2]: tasks_test2
    })

    //--------------------------------------------------------- Data -----------
    return (
        <div className="App_custome">

            <div className="app-header">
                <AddItemForm  id={"www"} addItem={()=>{}}/>
                {/*<input*/}
                {/*    type="text"*/}
                {/*    className="input-add-tasks-custome"*/}
                {/*    placeholder="Вкажіть назву "*/}
                {/*/>*/}
                {/*<button>+</button>*/}
            </div>
            {
                todolists.map(tl => {
                    let taskForTodolist = tasksObj[tl.id];
                    // ---------------------------------------------- filtered script home
                    if (tl.filter === "active") {
                        taskForTodolist = taskForTodolist.filter(t => t.isDone === false)
                    }
                    if (tl.filter === "completed") {
                        taskForTodolist = taskForTodolist.filter(t => t.isDone === true)
                    }
                    return <Todolist_test
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={taskForTodolist}
                        removeTasks={removeTasks}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                        removeTodolist={removeTodolist}

                    />
                })
            }


        </div>


    );
}

export default App_test;
