import  { useState, useEffect } from 'react';
import './App.scss'; // Importa el archivo CSS

function App() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const targetDate = new Date('2023-11-13T00:00:00').getTime();

    const updateCountdown = () => {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;

      if (timeRemaining <= 0) {
        // Mantenimiento finalizado
        clearInterval(countdownInterval);
      } else {
        const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hoursRemaining = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesRemaining = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const secondsRemaining = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setDays(daysRemaining);
        setHours(hoursRemaining);
        setMinutes(minutesRemaining);
        setSeconds(secondsRemaining);
      }
    };

    // Actualiza el contador cada segundo
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className="maintenance-page"> {/* Cambia "style" por "className" */}
      <div className="maintenance-content"> {/* Cambia "style" por "className" */}
        <h1 className="h1">Estamos en mantenimiento.</h1> {/* Cambia "style" por "className" */}
        <h2 className="h2">¡Pronto estaremos de vuelta con una nueva versión del portafolio!</h2> {/* Cambia "style" por "className" */}
        <div className="countdown"> {/* Cambia "style" por "className" */}
          <span className="countdown-number">{days}</span> {/* Cambia "style" por "className" */}
          <p className="countdown-label">días</p> {/* Cambia "style" por "className" */}
          <span className="countdown-number">{hours}</span> {/* Cambia "style" por "className" */}
          <p className="countdown-label">horas</p> {/* Cambia "style" por "className" */}
          <span className="countdown-number">{minutes}</span> {/* Cambia "style" por "className" */}
          <p className="countdown-label">minutos</p> {/* Cambia "style" por "className" */}
          <span className="countdown-number">{seconds}</span> {/* Cambia "style" por "className" */}
          <p className="countdown-label">segundos</p> {/* Cambia "style" por "className" */}
        </div>
      </div>
    </div>
  );
}

export default App;
