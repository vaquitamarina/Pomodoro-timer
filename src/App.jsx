import './App.css'
import { useState } from 'react'
import { Timer } from './components/Timer'
import { Pomodoro } from './components/Pomodoro'
import { Button } from './components/Button'
import { Todo } from './components/Todo'
function App() {
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)
    const [intervalId, setIntervalId] = useState(null)
    const [selected, setSelected] = useState(['selected', null, null])
    
    function startTimer() {
        if(start) return

        if(intervalId === null){
            setStart(true)
            setIntervalId(setInterval(() => {
                setTime(prevTime => prevTime + 1) 
            },1000))   
        }  
        else {
            setStart(true)
            setTime(0)
            setIntervalId(setInterval(() => {
                setTime(prevTime => prevTime + 1) 
            },1000))  
        }
        console.log('start')
    }

    const stopTimer = () => {
        clearInterval(intervalId)
        setStart(false)
        console.log('stop')
    }
    return (
        <>
            <h1 className='title'>Pomodoro <span>timer</span></h1>
            <div className='container'>
                <section className='pomodoroContainer'>
                    <Pomodoro selected={selected}></Pomodoro> 
                    <Timer time={time} stopTimer={stopTimer} setSelected={setSelected} selected={selected}></Timer>
                    <Button onClick={startTimer} >Start</Button>          
                </section>
                <section>
                    <Todo></Todo>
                </section>
            </div>
        </>
    )
}

export default App
