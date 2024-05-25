import { useEffect, useState } from 'react';
import './style.css';
import { Detail } from '../Detail';

export const Rooms = () => {
  const [rooms, setRooms] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRooms(data.data);
    };

    fetchItems();
  }, []);

  if (rooms === null) {
    return <p>Loading...</p>;
  }
  console.log(selectedId);
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro vás ten pravý.</p>
        <div className="cards-row">
          {rooms.map((room) => (
            <div
              className="card"
              key={room.id}
              onClick={() => setSelectedId(room.id)}
            >
              <img
                className="card__image"
                src={`http://localhost:4000/assets/${room.src}`}
              />
              <div className="card__title">{room.name}</div>
              <div className="card__body">{room.price}</div>
            </div>
          ))}
        </div>
        {selectedId !== null ? (
          <Detail room={rooms.find((item) => item.id === selectedId)} />
        ) : null}
      </div>
    </section>
  );
};
