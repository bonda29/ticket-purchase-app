import React, { useState, useEffect } from 'react';
import Hall from './Hall.jsx';
import './Purchase.css';
import { fetchSeats } from '../services/hallService.js';
import { purchaseTickets } from '../services/ticketService.js';
import { generateSeatLayout } from '../utils/seatLayout.js';

const Purchase = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [fetchedSeats, setFetchedSeats] = useState([]);
    const [hallLayout, setHallLayout] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        fetchSeats().then(seats => {
            setFetchedSeats(seats);
            const layout = generateSeatLayout(seats);
            setHallLayout(layout);
        });
    }, []);

    const handleSeatSelect = seat => {
        setSelectedSeats(prevSelectedSeats => {
            if (prevSelectedSeats.some(selectedSeat => selectedSeat.id === seat.id)) {
                return prevSelectedSeats.filter(selectedSeat => selectedSeat.id !== seat.id);
            } else {
                return [...prevSelectedSeats, seat];
            }
        });
    };

    const handleSeatRemove = seatId => {
        setSelectedSeats(selectedSeats.filter(seat => seat.id !== seatId));
    };

    const handlePurchase = async () => {
        if (name.length === 0 || email.length === 0) {
            alert('Моля попълнете имена и имейл.');
            return;
        }

        const order = {
            first_name: name,
            last_name: surname,
            email: email,
            hall_seat_ids: selectedSeats.map(s => s.id)
        }

        // console.log(order);

        purchaseTickets(order).then(urlObj => {
            window.location.href = urlObj.url;
        });

        // alert('Purchased!');
    };

    return (
        <div className="App">
            <h1>Схема на залата</h1>
            <h4 id="stage">Сцена</h4>
            <Hall hallLayout={hallLayout} selectedSeats={selectedSeats} onSeatSelect={handleSeatSelect} />
            <div className="summary">
                <h2>Избрани места:</h2>
                <ul id="selected-seats">
                    {selectedSeats.map(seat => (
                        <li key={seat.id}>Ред: {seat.row}, Място: {seat.number}, Цена: {seat.price} <button className='seatRemoveBtn' onClick={() => handleSeatRemove(seat.id)}>премахни</button></li>
                    ))}
                </ul>
                <form>
                    <div>
                        <label>
                            Име:
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Фамилия:
                            <input
                                type="text"
                                value={surname}
                                onChange={e => setSurname(e.target.value)}
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

