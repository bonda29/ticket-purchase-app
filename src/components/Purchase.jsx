import React from 'react';
import Hall from './Hall.jsx';
import './Purchase.css';
import { useState } from 'react';

const initialLayout = [
    // Define your hall layout here, example below
    [{ id: 1, number: 'A1', status: 'available' }, { id: 2, number: 'A2', status: 'available' }, { id: 3, number: 'A3', status: 'booked' }],
    [{ id: 4, number: 'B1', status: 'available' }, { id: 5, number: 'B2', status: 'available' }, { id: 6, number: 'B3', status: 'available' }],
    // More rows...
  ];

export default function Purchase() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSeatSelect = (seats) => {
      setSelectedSeats(seats);
    };

    const handlePurchase = () => {
      if (name.length === 0 || email.length === 0) {
        alert('Моля попълнете имена и имейл.');
        return;
      }

      alert('Purchased!');
    }
  
    return (
      <div className="App">
        <h1>Схема на залата</h1>
        <h4 id='stage'>Сцена</h4>
        <Hall hallLayout={initialLayout} onSeatSelect={handleSeatSelect} />
        <div className="summary">
          <h2>Избрани места:</h2>
          <ul id='selected-seats'>
            {selectedSeats.map(seat => (
              <li key={seat.id}>{seat.number}</li>
            ))}
          </ul>
          <form>
          <div>
            <label>
              Имена:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Имейл:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
        </form>
          <button className="purchase-button" onClick={() => handlePurchase()}>
            Купи
          </button>
        </div>
      </div>
    );
}