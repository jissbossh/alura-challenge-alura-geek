async function listCards() {
    const connection = await fetch("http://localhost:3000/cards")
    const connectionJson = await connection.json();

    return connectionJson;
}

async function addCard(image, name, price) {
    const connection = await fetch("http://localhost:3000/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            image: image,
            name: name,
            price: price
        })
    });

    const connectionJson = await connection.json();
    return connectionJson;
}

async function deleteCard(id) {
    const connection = await fetch(`http://localhost:3000/cards/${id}`, {
        method: "DELETE"
    });

    if (!connection.ok) {
        throw new Error('No se puede elimnar la tarjeta de producto');
    }

}

export const connectApi = {
    listCards,
    addCard,
    deleteCard
}
