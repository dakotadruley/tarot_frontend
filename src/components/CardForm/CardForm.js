import React from 'react';
import { postCard } from '../../services/api';

const CardForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = uesState(1);
    const [image, setImage] = uesState('');
    const [description, setDescription] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        postCard({ name, number, image, description })
        .then(card => {

        });
    };

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="name..." />
        <select onChange={({ target }) => setNumber(target.value)}>
            <option value={number}>1</option>
            <option value={number}>2</option>
            <option value={number}>3</option>
            <option value={number}>4</option>
        </select>
        <img src={image} />
        <input type="text" value={image} onChange={({ target }) => setImage(target.value)} placeholder="image..." />
        <textarea value={description} onChnage={({ target }) => setDescription(target.value)} placeholder="description..."></textarea>
        <button>Save Card</button>
    </form>
)};

export default CardForm;