import { useEffect, useState } from 'react';
import './style.css';
import dayjs from 'dayjs';


export const Form = () => {
  const [field1, setField1] = useState('');
  const [field2, setField2] = useState('');
  const [field3, setField3] = useState('');
  const [select, setSelect] = useState('');
  const [check1, setCheck1] = useState('');
  const [check2, setCheck2] = useState('');
  const [check3, setCheck3] = useState('');
  const [field4, setField4] = useState('');
  const [field5, setField5] = useState('');

  const body = {
    od: field1 ,
    do: field2 ,
    pocetOsob: field3,
    stravovani: select,
    mazlicek: check1,
    pristylka: check2,
    bezbarier: check3,
    email: field4,
    telefon: field5,
    stav: 'new',
  };
  
  const fetchPost = async () => {
    await fetch('http://localhost:4000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchPost()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input
          id="field1"
          className="field-input"
          type="date"
          value={field1}
          onChange={(e) => setField1(e.target.value)}
        />

        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input
          id="field2"
          className="field-input"
          type="date"
          value={field2}
          onChange={(e) => setField2(e.target.value)}
        />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input
          id="field3"
          className="field-input"
          type="text"
          value={field3}
          onChange={(e) => setField3(e.target.value)}
        />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select
          id="select"
          className="field-input"
          value={select}
          onChange={(e) => setSelect(e.target.value)}
        >
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          id="check1"
          className="field-input"
          type="checkbox"
          value={check1}
          onChange={(e) => setCheck1(e.target.checked)}
        />

        <label htmlFor="check2" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          id="check2"
          className="field-input"
          type="checkbox"
          value={check2}
          onChange={(e) => setCheck2(e.target.checked)}
        />

        <label htmlFor="check3" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          id="check3"
          className="field-input"
          type="checkbox"
          value={check3}
          onChange={(e) => setCheck3(e.target.checked)}
        />

        <label htmlFor="field4" className="field-label">
          E-mail:
        </label>
        <input
          id="field4"
          className="field-input"
          type="text"
          value={field4}
          onChange={(e) => setField4(e.target.value)}
        />

        <label htmlFor="field5" className="field-label">
          Telefon:
        </label>
        <input
          id="field5"
          className="field-input"
          type="text"
          value={field5}
          onChange={(e) => setField5(e.target.value)}
        />
      </div>
      <div>Celková cena za pobyt: Kč</div>
      <button className="wide" onClick={() => alert('Poptávka odeslána')}>
        Odeslat poptávku
      </button>
    </form>
  );
};
