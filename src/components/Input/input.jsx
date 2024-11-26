import './input.css';

const Input = ({ placeholder, onchange, keyPress, inputValue }) => {
  return (
    <input
      className="userInput"
      placeholder={placeholder}
      onChange={onchange}
      onKeyDown={keyPress}
      value={inputValue}
    />
  );
};
export default Input;
