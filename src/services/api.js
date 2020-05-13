export const postCard = card => {
    return fetch(`${process.env.API_URL}/api/v1/cards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    })
    .then(res => res.json());
}