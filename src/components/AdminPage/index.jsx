import { useEffect, useState } from 'react';
import "./style.css"

export const AdminPage = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/orders');
      const data = await response.json();
      setOrders(data.data);
    };

    fetchItems();
  }, []);

  if (orders === null) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {orders.map((order) => (
        <>
          <div className='kartaObjednávky'>
            <h2>objednávka číslo: {order.id}</h2>
            <div>příjezd: {order.od}</div>
            <div>odjezd: {order.do}</div>
            <div>stav: {order.stav}</div>
          </div>
        </>
      ))}
    </div>
  );
};

