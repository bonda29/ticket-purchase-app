import React from 'react';
import './Seat.css';

const Seat = ({ seat, onSeatClick }) => {
  const seatClass = `seat ${seat.status}`;

  return (
    <div
      className={seatClass}
      onClick={() => onSeatClick(seat)}
    >
      {seat.number}
    </div>
  );
};

export default Seat;
