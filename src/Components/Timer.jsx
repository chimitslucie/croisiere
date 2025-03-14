import React, { useState, useEffect } from "react";

function Timer() {
    // Récupérer la date cible en UTC
    const isSummerTime = new Date().getTimezoneOffset() === -120; // Vérifie si on est en UTC+2
    const targetDate = new Date(`2025-05-24T${isSummerTime ? "18:00" : "19:00"}`).getTime();
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
    const [visible, setVisible] = useState(true);

    function getTimeRemaining() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        const handleScroll = () => {
            if (window.scrollY >= 10) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [visible]);

    return (
        <div className={`timer-container ${visible ? "visible" : "hidden"}`}>
            <h2>Départ dans :</h2>
            <div className="timer">
                <div className="time-box">
                    <span>{timeLeft.days}</span>
                    <p>Jours</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.hours}</span>
                    <p>Heures</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.minutes}</span>
                    <p>Minutes</p>
                </div>
                <div className="time-box">
                    <span>{timeLeft.seconds}</span>
                    <p>Secondes</p>
                </div>
            </div>
        </div>
    );
}

export default Timer;