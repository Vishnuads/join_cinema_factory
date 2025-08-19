
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



