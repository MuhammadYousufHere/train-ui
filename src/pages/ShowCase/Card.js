import "./style.scss";
const Card = ({ icon, tag, text_1, text_2 }) => {
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="avatar">
          <img src={icon} alt="k" />
        </div>
        <div className="punchline-box">
          <h1>{tag}</h1>
        </div>
        <div className="tag-details">
          <p>{text_1}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
