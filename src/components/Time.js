import React, { useState, useEffect } from 'react';

const Time = () => {
  const [timeRemaining, setTimeRemaining] = useState(2 * 24 * 60 * 60 * 1000); // 2 days in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        const newTime = prevTime - 1000;
        if (newTime <= 0) {
          clearInterval(interval);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 60 * 60 * 1000));
    const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="  text-center">
        <div className="mt-5 grid grid-cols-4  gap-x-1 md:gap-x-4">
          <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white  p-1 md:p-3 rounded">
            <p className=" text-[12px] md:text-[22px] font-bold">{days}</p>
            <p className='text-[8px] md:text-[12px]'>Day</p>
          </div>
          <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white  p-1 md:p-3 rounded">
            <p className=" text-[12px] md:text-[22px] font-bold">{hours}</p>
            <p className='text-[8px] md:text-[12px]'>Hours</p>
          </div>
          <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white  p-1 md:p-3 rounded">
            <p className=" text-[12px] md:text-[22px] font-bold">{minutes}</p>
            <p className='text-[8px] md:text-[12px]'>Minutes</p>
          </div>
          <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white  p-1 md:p-3 rounded ">
            <p className=" text-[12px] md:text-[22px] font-bold">{seconds}</p>
            <p className='text-[8px] md:text-[12px]'>Seconds</p>
          </div>

        
        
        </div>
      </div>
    </div>
  );
};

export default Time;
