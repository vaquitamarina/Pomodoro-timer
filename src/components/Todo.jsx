import { useState } from "react"
import { useEffect } from "react"
import { Task } from "./Task"
export function Todo() {
    useEffect(() => {
        const inputBox = document.getElementById('inputBox')
           
    }, [])
    const [tasks, setTasks] = useState([])

    function addTask(){
        if(inputBox.value === '') return
        setTasks([...tasks, inputBox.value])
    }

    function removeTask(index){
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        console.log(index, newTasks)
        setTasks(newTasks)
    }

    return (
        <div className="toDoContainer">
            <h3>To do list <img src="../../public/icon.svg " alt="icon" /> </h3>
            <header className="toDoHeader">
                <input type="text" id="inputBox" placeholder="add a task"/>
                <button onClick={addTask}>add</button>
            </header>
            <ul>
                {
                    tasks.map((task,index ) => {
                        return <Task key={index} index={index} removeTask={removeTask}>{task}</Task>
                    })
                }                
            </ul>
        </div>
    )
}