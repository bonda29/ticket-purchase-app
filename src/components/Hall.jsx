import React from 'react';
import Seat from './Seat.jsx';
import './Hall.css';

const Hall = ({ hallLayout, selectedSeats, onSeatSelect }) => {

  const handleSeatClick = (seat) => {
    if (seat.status === 'booked') return;

    onSeatSelect(seat);
  };

  return (
    <div className="hall">
      {hallLayout.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map(seat => (
            <Seat
              key={seat.id}
              seat={{
                ...seat,
                status: selectedSeats.some(selectedSeat => selectedSeat.id === seat.id) ? 'selected' : seat.status
              }}
              onSeatClick={() => handleSeatClick(seat)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Hall;

