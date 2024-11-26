import './card.css';

const Card = ({ Text, deleteIconClik, EditIconClick}) => {
  return (
    <div className="card" >
      <p>{Text}</p>
      <div className="icons">
      <i class="fa-solid fa-pen-to-square" onClick={EditIconClick}></i>
      <i class="fa-solid fa-trash" onClick={deleteIconClik}></i> 
      </div>
    </div>
  );
};

export default Card;
