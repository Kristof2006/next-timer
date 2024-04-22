"use client"

import { useEffect, useState } from "react";

export default function PomodoroClient() {
    const [time, setTime] = useState(0);
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setTime(time + 1);
        }, 1000)
        return () => clearInterval(timer);
    });

    const restart = () => {
        setTime(0);
    }
    const stop = () => {
        clearInterval(timer);
    }
    return (
        <div className=" text-center">
            <h1>{time}</h1>

            <button onClick={restart}>Restart</button>
            <button onClick={stop}>Stop</button>

        </div>
    );
}