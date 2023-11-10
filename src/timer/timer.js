import React from "react";
import useTimer from 'react-timer-hook';

import { Button } from "@mui/material";

import './timer.css';

function Timer(){
    const expiryTimestamp = new Date();
    expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 1500); // 25 minutes timer, can be switched to props to allow for different times for different timers

    const {
        seconds,
        minutes,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp, autoStart:false, onExpire: () => console.warn('onExpire called') });

    const restartTimer = () => {
        const time = new Date();
        time.setSeconds(time.getSeconds() + 1500); //25 minute timer
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
                    <Button variant="contained" type="button" alt="Start Timer" onClick={resume}>Start</Button>
                    <Button variant="contained" type="button" alt="Pause Timer" onClick={pause}>Pause</Button>
                    <Button variant="contained" type="button" alt="Restart Timer" onClick={() => restartTimer()}>Reset</Button>
                </div>
            </div>
        </>
    );
}

export default Timer;