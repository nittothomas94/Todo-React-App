import './deleteModal.css'
import Button from '../Button/button';

const DeleteModal = ({ show, noDelClick, yesDelClick }) => {
  return (
    <div className="deleteModal" style={{ display: show ? 'block' : 'none' }}>
      <div className="cover" onClick={noDelClick}></div>
      <div className="cover-box">
        <p>Are you sure you want to delete</p>
        <div className="buttons">
          <Button
            title="No"
            width="100px"
            hight="45px"
            bgcolor="green"
            onclick={noDelClick}
          />
          <Button
            title="Yes"
            width="100px"
            hight="45px"
            bgcolor="red"
            onclick={yesDelClick}
          />
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
