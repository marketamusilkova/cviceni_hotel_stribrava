import { useEffect, useState } from 'react';
import './style.css';

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

  const fetchConfirmPatch = async (id) => {
    await fetch(`http://localhost:4000/api/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/stav',
          value: 'confirmed',
        },
      ]),
    });
    const response = await fetch('http://localhost:4000/api/orders');
    const data = await response.json();
    setOrders(data.data);
  };

  const fetchRejectPatch = async (id) => {
    await fetch(`http://localhost:4000/api/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        {
          op: 'replace',
          path: '/stav',
          value: 'rejected',
        },
      ]),
    });
    const response = await fetch('http://localhost:4000/api/orders');
    const data = await response.json();
    setOrders(data.data);
  };

  const confirm = async (id) => {
    await fetchConfirmPatch(id);
  };

  const reject = async (id) => {
    await fetchRejectPatch(id);
  };

  if (orders === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {orders.map((order) => (
        <>
          <div className="kartaObjednávky" key={order.id}>
            <h2>objednávka číslo: {order.id}</h2>
            <div>příjezd: {order.od}</div>
            <div>odjezd: {order.do}</div>
            <div>stav: {order.stav}</div>
          </div>
          <button onClick={() => confirm(order.id)}>Potvrdit objednávku</button>
          <button onClick={() => reject(order.id)}>Odmítnout objednávku</button>
        </>
      ))}
    </div>
  );
};
