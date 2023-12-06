import { useState, useEffect } from 'react';
// import './App.css';

function Clock() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isRunning]);

    const handleStartPause = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setIsRunning(false);
        setTime(0);
    };

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
       <div className='flex items-center min-h-screen'>
         <div className="space-y-4 bg-blue-200 h-[230px] rounded py-5 w-1/4 mx-auto">
            <div className=' text-center'>
                <h1 className='text-3xl font-semibold text-green-600'>Stopwatch</h1>
                <div><p className='text-6xl font-semibold py-4'>
                    {formatTime(time)}</p></div>
                <div className="flex justify-around gap-10">
                    <button className={`text-white py-2 w-32 text-xl rounded ${isRunning ? 'bg-red-500' : 'bg-green-500'}`} onClick={handleStartPause}>{isRunning ? 'Pause' : 'Start'}</button>
                    <button className='text-white py-2 w-32 text-xl rounded bg-orange-600' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
       </div>
    );
}

export default Clock;
