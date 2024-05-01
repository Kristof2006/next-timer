"use client"

import { useEffect, useState } from "react";

export default function StopperClient() {
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
    const start = () => {
        if (timer != null) {
            clearInterval(timer);
        }
        timer = setInterval(() => {
            setTime(time + 1);
        }, 1000)
        
    }
    return (
        <div className="flex flex-col items-center text-center bg-gray-300 rounded-lg p-3 gap-4">
            <h1 className="font-bold text-5xl bg-white rounded-full p-2">{time}</h1>
            <div className="flex flex-row gap-4">
            <button onClick={restart} className="bg-yellow-500 hover:bg-yellow-700 text-white rounded-lg px-4 font-bold py-2">Restart</button>
            <button onClick={stop} className="bg-red-500 hover:bg-red-700 text-white rounded-lg px-4 font-bold py-2">Stop</button>
            <button onClick={start} className="bg-green-500 hover:bg-green-700 text-white rounded-lg px-4 font-bold py-2">Start</button>
            </div>
        </div>
    );
}