import React, { useState } from 'react';
import Seat from './Seat.jsx';
import './Hall.css'

const Hall = ({ hallLayout, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (seat.status === 'booked') return;

    const updatedSeats = [...selectedSeats];
    const seatIndex = updatedSeats.findIndex(s => s.id === seat.id);

    if (seatIndex > -1) {
      updatedSeats.splice(seatIndex, 1);
    } else {
      updatedSeats.push(seat);
    }

    setSelectedSeats(updatedSeats);
    onSeatSelect(updatedSeats);
  };

  return (
    <div className="hall">
      {hallLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map(seat => (
            <Seat
              key={seat.id}
              seat={{ ...seat, status: selectedSeats.includes(seat) ? 'selected' : seat.status }}
              onSeatClick={handleSeatClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Hall;
