import './style.css';
import { Form } from '../Form';

export const Detail = ({ room }) => {
  console.log(room);
  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {room.name}, {room.price}
        </h2>
        <div className="columns-2">
          <div className="column">
            <img src={`http://localhost:4000/assets/${room.src}`} />

            <p>{room.description}</p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};



