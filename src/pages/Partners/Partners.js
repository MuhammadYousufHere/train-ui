import "./Partners.scss";
import partners from "./data";
const Partners = () => {
  return (
    <main className="partners-container">
      <div className="partners-content">
        <div className="row">
          <h1>These are the train operators we work with</h1>
        </div>
        <div className="row">
          <div className="partners-list .animated-grid">
            {partners.map((partner) => {
              return (
                <div className="partners-item card" key={partner.id}>
                  <img src={partner.imgSrc} alt={partner.imgSrc.toString()} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Partners;
