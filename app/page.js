'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const TARGET_DATE = new Date("June 1, 2026 10:00:00").getTime();

const TimeUnit = ({ value, label }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setIsAnimating(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [value, displayValue]);

  return (
    <div className={styles.column}>
      <div className={styles.box}>
        <div className={`${styles.flip} ${isAnimating ? styles.animate : ''}`}>
          <span>{displayValue}</span>
        </div>
        <div className={styles.label}>{label}</div>
      </div>
    </div>
  );
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance < 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title1}>NEW BRAND</h1>
        <h2 className={styles.title2}>LAUNCH</h2>

        <div className={styles.timer}>
          <TimeUnit value={timeLeft.days} label="DAYS" />
          <TimeUnit value={timeLeft.hours} label="HOURS" />
          <TimeUnit value={timeLeft.minutes} label="MINUTES" />
          <div className={styles.lastColumn}>
            <TimeUnit value={timeLeft.seconds} label="SECONDS" />
            <div className={styles.underText}>LEFT</div>
          </div>
        </div>
      </div>
    </main>
  );
}
