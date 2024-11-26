import './button.css';

const Button = ({ title, onclick, width, hight, bgcolor='white' }) => {
  return (
    <div className="button">
      <button onClick={onclick} style={{width:width, height:hight, backgroundColor:bgcolor}}>{title}</button>
    </div>
  );
};

export default Button;
