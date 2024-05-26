import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to={'/'}><h3>Начало</h3></Link></li>
                <li><Link to={'/about'}><h3>За нас</h3></Link></li>
                <li><Link to={'/purchase'}><h3>Купи билет</h3></Link></li>
            </ul>
        </nav>
    );
}