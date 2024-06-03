export const generateSeatLayout = (fetchedSeats) => {
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
                row: fetchSeat.row || rowIndex + 1,
                seat: number,
                is_booked: fetchSeat.is_booked || false,
                price: fetchSeat.price || 10,
                type: fetchSeat.type
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
    const lastRowSeatCounts = [19, 20, 19, 20, 20];
    for (let i = 0; i < 5; i++) {
        layout.push(createRow(i + 19, lastRowSeatCounts[i]));
    }

    return layout;
};