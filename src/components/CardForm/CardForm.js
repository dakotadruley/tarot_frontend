import React, { useState } from 'react';
import { postCard } from '../../services/api';
import { useDispatch } from 'react-redux';
import { saveCard } from '../../actions/cardActions';

const CardForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState(1);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    console.log(name, number, image, description);
    const handleSubmit = event => {
        event.preventDefault();

        postCard({ name, number, image, description })
        .then(card => {
        
        dispatch(saveCard(card));
        });
    };

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="name..." />
        <select onChange={({ target }) => setNumber(target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
        </select>
        <img src={image} />
        <input type="text" value={image} onChange={({ target }) => setImage(target.value)} placeholder="image..." />
        <textarea value={description} onChange={({ target }) => setDescription(target.value)} placeholder="description..."></textarea>
        <button>Save Card</button>
    </form>
)};

export default CardForm;