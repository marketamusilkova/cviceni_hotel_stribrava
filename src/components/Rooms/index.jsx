import "./style.css"

export const Rooms = () => {
  
  return (
    <section className="dark">
    <div className="container">
      <h2>Naše pokoje</h2>
      <p>
        Vyberte si, který z našich pokojů je pro vás ten pravý.
      </p>
      <div className="cards-row">
        <div className="card">
          <img className="card__image" src="img/image1.svg" />
          <div className="card__title">Card 1</div>
          <div className="card__body">Sunt natus</div>
        </div>
      </div>
    </div>
  </section>
  )

}
