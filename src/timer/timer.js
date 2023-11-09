import React from "react";
import { Button } from "@mui/material";
import useTimer from 'react-timer-hook';

import './timer.css';


function Timer(){
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1500); // 25 minutes timer

    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, autoStart:false, onExpire: () => console.warn('onExpire called') });

      const restartTimer = () => {
        // Restarts to 25 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1500);
        restart(time, false);
      }


    return(
        <>
            <div id="timerContainer">
                <h1>Timer</h1>
                <div id="timer">
                    <span>{minutes}</span>:<span>{seconds}</span>
                </div>
                <div id="timerButtons">
                    <Button variant="contained" type="button" onClick={resume}>Start</Button>
                    <Button variant="contained" type="button" onClick={pause}>Pause</Button>
                    <Button variant="contained" type="button" onClick={() => restartTimer()}>Reset</Button>
                </div>
            </div>
        </>
    );
}


export default Timer;