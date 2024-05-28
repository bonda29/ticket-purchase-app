const BASE_URL = 'http://localhost:8080/api/v1/tickets/purchase';

export async function purchaseTickets(order) {
    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const urlObj = await response.json();
        return urlObj;
    } catch (error) {
        console.error('Failed to purchase:', error.message);

    }
}



// {
//     "first_name": "Nikolay",
//     "last_name": "Boychev",
//     "email": "bondableglobe10@gmail.com",
//     "hall_seat_ids": [
//         1,
//         81,
//         400
//     ]
// }