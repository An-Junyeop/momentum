import React, {useEffect, useState} from "react";

/* 화면 중앙 시계 */
function Clock() {
    const [date, setDate] = useState(new Date());

    // 1초마다 시간 갱신하기
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timerID);
        }
    });

    // 초 마다 새로운 데이터 값 가져오기
    function tick() {
        setDate(new Date());
    }

    return (
        <header>
            <div id="clock">{date.toLocaleTimeString('ko-KR', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })}</div>
        </header>
    )
}

export default Clock;