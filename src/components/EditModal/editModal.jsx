import './editModal.css';
import Button from '../Button/button';
const EditModal = ({ show, CancelClick, CoverClick,EditChange , EditClick}) => {
  return (
    <div className="EditModal" style={{ display: show ? 'block' : 'none' }}>
      <div className="coverEdit" onClick={CoverClick}></div>
      <div className="cover-box-Edit">
        <input type="text" onChange={EditChange} />
        <div className="editButtons">
          <Button
            title="Cancel"
            width="100px"
            hight="50px"
            bgcolor="green"
            onclick={CancelClick}
          />
          <Button title="Edit" width="100px" hight="50px" bgcolor="red" onclick={EditClick}/>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
