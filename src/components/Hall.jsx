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
      <h3 id='mainHall'>Основна зала</h3>
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
      <h3 id='balcony'>Балкон</h3>
    </div>
  );
};

export default Hall;

