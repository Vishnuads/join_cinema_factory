// import React, { useState, useEffect } from 'react';

// const Time = () => {
//   // Function to get the current IST time
//   const getCurrentISTTime = () => {
//     const now = new Date();
//     const utcOffset = now.getTimezoneOffset() * 60000; // Get UTC offset in milliseconds
//     const istOffset = 5.5 * 60 * 60 * 1000; // IST offset is 5 hours 30 minutes ahead of UTC
//     const istTime = new Date(now.getTime() + utcOffset + istOffset);
//     return istTime;
//   };

//   // Set the target date and time in IST (Kolkata time)
//   const getTargetTimeIST = () => {
//     const targetTime = getCurrentISTTime();
//     targetTime.setDate(targetTime.getDate() + 5); // Add 5 days
//     targetTime.setHours(targetTime.getHours() + 8); // Add 8 hours
//     targetTime.setMinutes(targetTime.getMinutes() + 20); // Add 50 minutes
//     targetTime.setSeconds(0);
//     targetTime.setMilliseconds(0);
//     return targetTime;
//   };

//   const targetTimeIST = getTargetTimeIST().getTime();

//   const calculateTimeRemaining = () => {
//     const now = new Date().getTime();
//     const timeRemaining = targetTimeIST - now;
//     return timeRemaining > 0 ? timeRemaining : 0;
//   };

//   const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTimeRemaining(calculateTimeRemaining());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const formatTime = (time) => {
//     const days = Math.floor(time / (24 * 60 * 60 * 1000));
//     const hours = Math.floor((time % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
//     const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
//     const seconds = Math.floor((time % (60 * 1000)) / 1000);
//     return { days, hours, minutes, seconds };
//   };

//   const { days, hours, minutes, seconds } = formatTime(timeRemaining);

//   return (
//     <div className="flex flex-col justify-center items-center">
//       <div className="text-center">
//         <div className="mt-5 grid grid-cols-4 gap-x-1 md:gap-x-4">
//           <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
//             <p className="text-[12px] md:text-[22px] font-bold">{days}</p>
//             <p className="text-[8px] md:text-[12px]">Day</p>
//           </div>
//           <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
//             <p className="text-[12px] md:text-[22px] font-bold">{hours}</p>
//             <p className="text-[8px] md:text-[12px]">Hours</p>
//           </div>
//           <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
//             <p className="text-[12px] md:text-[22px] font-bold">{minutes}</p>
//             <p className="text-[8px] md:text-[12px]">Minutes</p>
//           </div>
//           <div className="border-2 border-white bg-gradient-to-b from-gray-700 to-gray-900 text-white p-1 md:p-3 rounded">
//             <p className="text-[12px] md:text-[22px] font-bold">{seconds}</p>
//             <p className="text-[8px] md:text-[12px]">Seconds</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Time;


import React from 'react';
import CountdownTimer from './CountdownTimer';
import moment from 'moment-timezone';

const WebinarPage = () => {
  const webinarStartTime = moment.tz('2024-07-25 12:00:00', 'Asia/Kolkata'); // Adjust webinar start time here

  return (
    <div>
      {/* <h1>Webinar Countdown Timer</h1> */}
      <CountdownTimer targetTime={webinarStartTime} />
    </div>
  );
};

export default WebinarPage;



