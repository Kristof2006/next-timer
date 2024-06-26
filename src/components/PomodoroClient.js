"use client"

import { useEffect, useState } from "react";

export default function PomodoroClient() {
    const [time, setTime] = useState(20);
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setTime(time - 1);
            if(time===0) {
                clearInterval(timer);
            }
        }, 1000)
        if (time ===0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    });

    const restart = () => {
        setTime(20);
    }
    const stop = () => {
        clearInterval(timer);
    }
    const start = () => {
        if (timer != null) {
            clearInterval(timer);
        }
        if(time != 0) {
            timer = setInterval(() => {
                setTime(time - 1);
            }, 1000)
        }
        
    }
    return (
        <div className="flex flex-col text-center bg-gray-300 rounded-lg p-3 gap-4 items-center">
            <h1 className="font-bold text-5xl bg-white rounded-full p-2">{time}</h1>
            <div className="flex flex-row gap-4">
            <button onClick={restart} className="bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg px-4 font-bold py-2">Restart</button>
            <button onClick={stop} className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-4 font-bold py-2">Stop</button>
            <button onClick={start} className="bg-green-500 hover:bg-green-700 text-white rounded-lg px-4 font-bold py-2">Start</button>
            </div>
        </div>
    );
}