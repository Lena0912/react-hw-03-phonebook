export default function Contact({ data, onDelete }) {

    if (!data) {
        return <p>No data</p>
    }
  
    const { id, name, number } = data;
    return (
        <div>
            <p>{name }</p>
            <p>{ number}</p>
            <button type="submit" onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}