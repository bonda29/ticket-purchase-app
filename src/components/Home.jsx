import React from 'react';
import { Link } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import hallImage from '../assets/hall.jpg';
import './Home.css';

export default function Home() {

    return (
        <main>
            <section id='ticket-purchase-container'>
                <h3>
                    Билети за "Пепеляшка"
                </h3>
                    <Link to={'/purchase'}>
                        <button>
                            Купи
                        </button>
                    </Link>
            </section>
            <HomeContainer
                title={'Инициатива'}
                content={'Средствата, събрани от покупката на билети, ще отидат в подкрепа на онкоболни деца.'}
                backgroundImageUrl={hallImage}
            />
            <HomeContainer
                title={'За постановката'}
                content={'Пепеляшка е една от най-обичаните постановки за малки и големи.'}
                backgroundImageUrl={hallImage}
            />
            <HomeContainer
                title={'Актьорите'}
                content={'Най-обичаните ученици от НПМГ ще се включат в реализацията на събитието.'}
                backgroundImageUrl={hallImage}
            />

        </main>
    );
}