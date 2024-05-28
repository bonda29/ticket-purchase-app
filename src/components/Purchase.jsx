import React, { useState, useEffect } from 'react';
import Hall from './Hall.jsx';
import './Purchase.css';
import { fetchSeats } from '../services/ticket-service.js';

const generateSeatLayout = (fetchedSeats) => {
    const layout = [];
    let idCounter = 1;

    const generateSeatNumbers = (seatCount) => {
        const seatNumbers = [];
        let odd = 1;
        let even = seatCount % 2 === 0 ? seatCount : seatCount - 1;

        for (let i = 0; i < seatCount; i++) {
            if (i < Math.ceil(seatCount / 2)) {
                seatNumbers.push(odd);
                odd += 2;
            } else {
                seatNumbers.push(even);
                even -= 2;
            }
        }

        return seatNumbers;
    };

    // Helper function to create a row
    const createRow = (rowIndex, seatCount) => {
        const seatNumbers = generateSeatNumbers(seatCount);
        return seatNumbers.map((number, index) => {
            const fetchId = idCounter;
            const fetchSeat = fetchedSeats.find(seat => seat.id === fetchId) || {};
            return {
                id: idCounter++,
                number: number,
                status: fetchSeat.is_booked ? 'booked' : 'available',
                row: fetchSeat.row,
                seat: number,
                is_booked: fetchSeat.is_booked || false,
                price: fetchSeat.price,
            };
        });
    };

    // First 4 rows with 20 seats each
    for (let i = 0; i < 4; i++) {
        layout.push(createRow(i, 20));
    }

    // Next 13 rows with alternating 20 and 19 seats
    const seatCounts = [20, 19, 20, 19, 20, 19, 20, 19, 20, 19, 20, 19, 20];
    for (let i = 0; i < 13; i++) {
        layout.push(createRow(i + 4, seatCounts[i]));
    }

    // One row with 8 seats
    layout.push(createRow(17, 8));

    // One row with 17 seats
    layout.push(createRow(18, 17));

    // Last 5 rows with alternating 20 and 19 seats
    const lastRowSeatCounts = [20, 19, 20, 19, 20];
    for (let i = 0; i < 5; i++) {
        layout.push(createRow(i + 19, lastRowSeatCounts[i]));
    }

    return layout;
};

const Purchase = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [fetchedSeats, setFetchedSeats] = useState([]);
    const [hallLayout, setHallLayout] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchSeats().then(seats => {
            // console.log(seats);
            // seats[3].is_booked = true;
            // seats[10].is_booked = true;
            // seats[4].is_booked = true;
            // seats[13].is_booked = true;
            // seats[14].is_booked = true;
            // seats[15].is_booked = true;
            // seats[16].is_booked = true;
            // seats[17].is_booked = true;
            setFetchedSeats(seats);
            const layout = generateSeatLayout(seats);
            setHallLayout(layout);
        });
    }, []);

    const handleSeatSelect = seats => {
        setSelectedSeats(seats);
    };

    const handlePurchase = () => {
        if (name.length === 0 || email.length === 0) {
            alert('Моля попълнете имена и имейл.');
            return;
        }
        alert('Purchased!');
    };

    return (
        <div className="App">
            <h1>Схема на залата</h1>
            <h4 id="stage">Сцена</h4>
            <Hall hallLayout={hallLayout} onSeatSelect={handleSeatSelect} />
            <div className="summary">
                <h2>Избрани места:</h2>
                <ul id="selected-seats">
                    {selectedSeats.map(seat => (
                        <li key={seat.id}>Ред: {seat.row}, Място: {seat.number}, Цена: {seat.price}</li>
                    ))}
                </ul>
                <form>
                    <div>
                        <label>
                            Имена:
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Имейл:
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                </form>
                <button className="purchase-button" onClick={handlePurchase}>
                    Купи
                </button>
            </div>
        </div>
    );
};

export default Purchase;
