import "./style.css"

const handleSubmit = (e) => {
  e.preventDefault()
}

export const Form = () => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input id="field1" className="field-input" type="date" />

        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input id="field2" className="field-input" type="date" />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input id="field3" className="field-input" type="text" />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select id="select" className="field-input">
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input id="check1" className="field-input" type="checkbox" />

        <label htmlFor="check2" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input id="check2" className="field-input" type="checkbox" />

        <label htmlFor="check3" className="field-label">
          Bezbariérový přístup:
        </label>
        <input id="check3" className="field-input" type="checkbox" />

        <label htmlFor="field5" className="field-label">
          E-mail:
        </label>
        <input id="field5" className="field-input" type="text" />

        <label htmlFor="field6" className="field-label">
          Telefon:
        </label>
        <input id="field6" className="field-input" type="text" />

      </div>
      <div>Celková cena za pobyt: Kč</div>
      <button className="wide" onClick={() => (alert("Poptávka odeslána"))}>Odeslat poptávku</button>
    </form>
  );
};
