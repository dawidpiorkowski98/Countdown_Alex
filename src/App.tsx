import { useEffect, useState } from "react";
import "./App.css";

const targetDate = new Date("2026-07-23T13:00:00+01:00").getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function App() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="page">
      <section className="card">
        <h1>Until We See Each Other Again ❤️</h1>

        <div className="timer">
          <div className="box">
            <span>{timeLeft.days}</span>
            <p>Days</p>
          </div>

          <div className="box">
            <span>{timeLeft.hours}</span>
            <p>Hours</p>
          </div>

          <div className="box">
            <span>{timeLeft.minutes}</span>
            <p>Minutes</p>
          </div>

          <div className="box">
            <span>{timeLeft.seconds}</span>
            <p>Seconds</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;