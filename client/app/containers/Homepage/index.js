import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FaFacebook, FaTiktok, FaInstagram } from 'react-icons/fa';
import './ComingSoon.css'; // Custom CSS for Coming Soon page

const ComingSoon = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date("December 31, 2024 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming-soon-wrapper">
      <div className="background-animation"></div>
      <Container className="text-center coming-soon-content">
        <h1 className="logo animate__animated animate__fadeInDown">ICart</h1>
        <h2 className="coming-soon-title animate__animated animate__fadeInUp">Coming Soon</h2>
        <p className="coming-soon-subtitle animate__animated animate__fadeInUp">We're working hard to bring you something amazing. Stay tuned!</p>
        
        <div className="countdown">
          <div className="countdown-item animate__animated animate__fadeIn">
            <span className="countdown-number">{days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <div className="countdown-item animate__animated animate__fadeIn">
            <span className="countdown-number">{hours}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <div className="countdown-item animate__animated animate__fadeIn">
            <span className="countdown-number">{minutes}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <div className="countdown-item animate__animated animate__fadeIn">
            <span className="countdown-number">{seconds}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>

        <div className="social-icons mt-4 animate__animated animate__fadeIn">
          <Button color="link" href="https://www.facebook.com/intelligentcart/">
            <FaFacebook />
          </Button>
          <Button color="link" href="https://www.tiktok.com/@intelligentcart">
  <FaTiktok />
</Button>


          <Button color="link" href="https://www.instagram.com/intelligentcart/">
            <FaInstagram />
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ComingSoon;
