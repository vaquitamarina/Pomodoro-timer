import { useState, useEffect } from "react";
import { Pomodoro } from "./Pomodoro";



export function Timer({time,stopTimer,setSelected, selected}) {
    const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)
    const seconds = time%60 < 10 ? `0${time%60}` : time%60
    const formatedTime = `${minutes}:${seconds}`

    const [pomodoro, setPomodoro] = useState(0)

    useEffect(() => {
        //pomodoro 
        if( minutes == '25' && selected[0] !== null){ // minutes === '25' && seconds === '00'
            stopTimer()
            setSelected([null, 'selected', null])
            
        }
        //short break
        if( minutes == '05' && selected[1] !== null){ // minutes === '05' && seconds === '00'
            stopTimer()
            if( pomodoro === 4){
                setSelected([null, null, 'selected'])
                console.log(pomodoro)
            }
            else{
                setSelected(['selected', null,null])
                console.log(pomodoro)
            }
            setPomodoro(pomodoro + 1)
        }
    },[time])

    if (minutes === '25'){
        
    }
    return (
        <div className="timer">
            
            <h2>{formatedTime}</h2>
            <p>Pomodor count: {pomodoro}</p>
        </div>
    )
}