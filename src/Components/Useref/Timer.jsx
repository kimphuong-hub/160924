import React, { useRef } from 'react';

const Timer = () => {
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <button onClick={startTimer}> bắt đầu</button>
      <button onClick={stopTimer}> dừng</button>
    </div>
  );
};

export default Timer;
