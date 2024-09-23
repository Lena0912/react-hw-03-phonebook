import { nanoid } from 'nanoid'

export default function ContactForm({ onAdd }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({
            id: nanoid(),
            name: e.target.elements.text.value,
            number: e.target.elements.number.value,

        });
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input type='text' name='text' />
            <p>Number</p>
            <input type='number' name='number'/>

            <button type='submit'>Add contact</button>
</form>
    );
}