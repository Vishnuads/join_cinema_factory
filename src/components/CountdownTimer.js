import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetTime = moment.tz('2024-08-10 19:00:00', 'Asia/Kolkata'); // Adjust deadline date and time here
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
    <div class="flex flex-col justify-center items-center">
      <div class="text-center">
        <div class="mt-5 grid grid-cols-4 gap-x-1 md:gap-x-4">
          <div class="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
            <p class="text-[12px] md:text-[22px] font-bold">{timeLeft.days}</p>
            <p class="text-[8px] md:text-[12px]">Day{timeLeft.days !== 1 ? 's' : ''}</p>
          </div>
          <div class="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
            <p class="text-[12px] md:text-[22px] font-bold">{timeLeft.hours}</p>
            <p class="text-[8px] md:text-[12px]">Hour{timeLeft.hours !== 1 ? 's' : ''}</p>
          </div>
          <div class="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
            <p class="text-[12px] md:text-[22px] font-bold">{timeLeft.minutes}</p>
            <p class="text-[8px] md:text-[12px]">Minute{timeLeft.minutes !== 1 ? 's' : ''}</p>
          </div>
          <div class="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
            <p class="text-[12px] md:text-[22px] font-bold">{timeLeft.seconds}</p>
            <p class="text-[8px] md:text-[12px]">Second{timeLeft.seconds !== 1 ? 's' : ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
