const BASE_URL = 'https://pepeliyashka.net/api/v1/event-halls/1/hall-seats';

export async function fetchSeats() {
    try {
        const response = await fetch(BASE_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin' // or 'include' if needed
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const seats = await response.json();
        return seats;
    } catch (error) {
        console.error('Failed to fetch seats:', error.message);
        if (error instanceof TypeError) {
            console.error('This is likely a network or CORS issue.');
        }
        throw error;
    }
}
