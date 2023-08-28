import share from "../../images/share.png";
import { useRef, useEffect, useState } from "react";
export default function GroupOrder() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("September 2, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="tw-mt-10 tw-flex tw-flex-col tw-items-center">
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-around tw-items-center tw-gap-4 md:tw-gap-16">
        <img className="group-order-img" src={share} alt="" />
        <div className="tw-text-lg tw-text-slate-500 tw-tracking-wider">
          <h3>
            This will allows you and your friend to order food from the same
            restaurant and share the delivery fee. It is a convenient way to
            organize team meals. You can also track the delivery and enjoy your
            meals.
          </h3>
        </div>
      </div>
      <h3 className="countdown-title | tw-text-2xl tw-font-medium tw-text-slate-400 tw-tracking-wider">
        Countdown release date
      </h3>
      <div className="tw-flex tw-justify-center tw-w-full">
        <div className="timer-container | tw-flex tw-mt-7 tw-font-medium tw-justify-between">
          <div className="days-container tw-flex tw-flex-col tw-items-center">
            <span className="tw-text-5xl tw-text-slate-500">{timerDays}</span>
            <span className="tw-tracking-widest tw-text-slate-400">Days</span>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <span className="tw-text-5xl tw-text-slate-500">{timerHours}</span>
            <span className="tw-tracking-widest tw-text-slate-400">Hours</span>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <span className="tw-text-5xl tw-text-slate-500">
              {timerMinutes}
            </span>
            <span className="tw-tracking-widest tw-text-slate-400">
              Minutes
            </span>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center">
            <span className="tw-text-5xl tw-text-slate-500">
              {timerSeconds}
            </span>
            <span className="tw-tracking-widest tw-text-slate-400">
              Seconds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
