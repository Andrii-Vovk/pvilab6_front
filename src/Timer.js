import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { setInterval, clearInterval } from 'timers';

var interval = null;
var timerstarted = false;

const Timer = () => {

    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    var timeLeft;
    const [btnStr, setBtnStr] = useState('Start')

    function startTimer() {
        if (timerstarted) {
            clearInterval(interval);
            setBtnStr("Start");
        }
        else {
            setBtnStr("Stop");
            timeLeft = 5 * 60;
            interval = setInterval(countdown, 1000);
        }
        timerstarted = !timerstarted;
    }

    function countdown() {
        timeLeft--;
        setMinutes(Math.trunc((timeLeft / 60) % 60));
        setSeconds(timeLeft % 60);

        if (timeLeft === 0) {
            clearInterval(interval);
        }
    }

    return (
        <div style={{marginBottom: "10px"}}>
            <div style={{textAlign: "center"}}>
                <p className="maintext">{minutes}:{seconds}</p>
                <Button variant="success" style={{border: "1px solid black"}} onClick={startTimer}>{btnStr}</Button>
            </div>
        </div>
    );
}

export default Timer;