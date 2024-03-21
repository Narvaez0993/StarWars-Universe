import React, { useState, useEffect, createContext } from "react";

export const TimerContext = createContext();

const TimerProvider = ({ children }) => {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const savedTimer = localStorage.getItem('foilTimer');
        if (savedTimer) {
            setTimer(parseInt(savedTimer));
        }
    }, []);

    useEffect(() => {
        if (timer === 0) {
            return;
        }

        const interval = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 0) {
                    clearInterval(interval);
                    return 0;
                } else {
                    const newTimer = prevTimer - 1;
                    localStorage.setItem('foilTimer', newTimer.toString());
                    return newTimer;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <TimerContext.Provider value={{ timer, setTimer }}>
            {children}
        </TimerContext.Provider>
    );
};

export default TimerProvider;