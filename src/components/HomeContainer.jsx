import React from 'react';
import './HomeContainer.css';
import { Link } from 'react-router-dom';

export default function HomeContainer({ title, content, backgroundImageUrl }) {
    return (
        <Link className='homeLinks' to='/about'>
            <section className='homeSection' style={{     backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '20px', color: 'white' }}>
                <h3>{title}</h3>
                <p>{content}</p>
            </section>
        </Link>
    );
}
