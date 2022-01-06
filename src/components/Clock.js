import React, {useEffect, useState} from "react";

/* 화면 중앙 시계 */
function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        }
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <header>
            <h1>현재 시간은 {date.toLocaleTimeString()}</h1>
        </header>
    )
}

export default Clock;