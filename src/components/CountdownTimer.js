import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetTime = moment.tz('2024-07-23 19:00:00', 'Asia/Kolkata'); // Adjust deadline date and time here
    const now = moment();
    const diff = moment.duration(targetTime.diff(now));
    return {
      days: diff.days(),
      hours: diff.hours(),
      minutes: diff.minutes(),
      seconds: diff.seconds()
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center">
        <div className="mt-5 grid grid-cols-4 gap-x-1 md:gap-x-4">
          <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
            <p className="text-[12px] md:text-[22px] font-bold">{timeLeft.days}</p>
            <p className="text-[8px] md:text-[12px]">Day{timeLeft.days !== 1 ? 's' : ''}</p>
          </div>
          <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
            <p className="text-[12px] md:text-[22px] font-bold">{timeLeft.hours}</p>
            <p className="text-[8px] md:text-[12px]">Hour{timeLeft.hours !== 1 ? 's' : ''}</p>
          </div>
          <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
            <p className="text-[12px] md:text-[22px] font-bold">{timeLeft.minutes}</p>
            <p className="text-[8px] md:text-[12px]">Minute{timeLeft.minutes !== 1 ? 's' : ''}</p>
          </div>
          <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
            <p className="text-[12px] md:text-[22px] font-bold">{timeLeft.seconds}</p>
            <p className="text-[8px] md:text-[12px]">Second{timeLeft.seconds !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
