import React from 'react';
import { Link } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import hallImage from '../assets/hall.jpg';
import cindarellaHeel from '../assets/cindarellaHeel.jpg';
import actingImage from '../assets/acting.jpg';
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
                content={'"Пепеляшка" е класическа постановка, любима на малки и големи.'}
                backgroundImageUrl={cindarellaHeel}
            />
            <HomeContainer
                title={'Актьорите'}
                content={'В реализацията на събитието ще се включат ученици от НПМГ, сред които са редица десетокласници и единадесетокласници.'}
                backgroundImageUrl={actingImage}
            />

        </main>
    );
}