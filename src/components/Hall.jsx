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
                <React.Fragment key={rowIndex}>
                    {rowIndex === 18 && <h3 className="separator">Балкон</h3>}
                    <div className="row">
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
                </React.Fragment>
            ))}
        </div>
    );
};

export default Hall;