import { useState, useEffect } from 'react';

const Countdown = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const now = new Date();

        const difference = now.getTime() - targetDate.getTime();

        const timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <p className='text-sm font-bold text-white'>
                {timeLeft.days} Days {timeLeft.hours} Hours {timeLeft.minutes} Minutes
            </p>
        </div>
    );
};

export default Countdown;