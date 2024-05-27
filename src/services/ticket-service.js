
const BASE_URL = '';

export function fetchSeats() {

    const seats = fetch(BASE_URL)
                    .then(data => data.json())
                    .then(seats => console.log(seats))
                    .catch(error => console.log(error));
    
    return seats;
}