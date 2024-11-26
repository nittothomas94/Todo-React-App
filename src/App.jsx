import './App.css';
import Header from './components/Header/header';
import Button from './components/Button/button';
import Card from './components/Card/card';
import Input from './components/Input/input';
import DeleteModal from './components/DeleteModal/deleteModal';
import EditModal from './components/EditModal/editModal';

import { useState } from 'react';

function App() {
  let [input, setInput] = useState([]);
  let [inputData, setInputData] = useState();

  const onInputChange = e => {
    setInputData(e.target.value);
  };

  const onAddElement = () => {
    setInput([...input, inputData]);
    setInputData('');
  };

  const onkeypress = event => {
    if (event.key == 'Enter') {
      onAddElement();
    }
  };

  let [showModal, setShowModal] = useState(false);
  let [showEditModal, setEditShowModal] = useState(false);
  let [selectItem, setSelectItem] = useState();

  const onDeleteIconClik = ind => {
    setSelectItem(ind);
    setShowModal(true);
  };

  const onNoDelClick = () => {
    console.log('jello');
    setShowModal(false);
  };

  const onYesDelClick = () => {
    console.log('yes ');
    input.splice(selectItem, 1);
    setInput([...input]);
    setShowModal(false);
  };

  const [editIndex, setEditIndex] = useState();

  const OnEditIconClick = index => {
    setEditIndex(index);
    setEditShowModal(true);
  };

  const OnCancelClick = () => {
    setEditShowModal(false);
  };

  const [editText, setEditText] = useState();
  const onEditChange = e => {
    setEditText(e.target.value);
  };

  const onEditClick = () => {
    input[editIndex] = editText;
    setInput([...input]);
    setEditShowModal(false);
  };
  // console.log(editIndex);

  return (
    <div className="main">
      <DeleteModal
        show={showModal}
        noDelClick={onNoDelClick}
        yesDelClick={onYesDelClick}
      />

      <EditModal
        show={showEditModal}
        CancelClick={OnCancelClick}
        CoverClick={OnCancelClick}
        EditChange={onEditChange}
        EditClick={onEditClick}
      />

      <Header title="Todo App" />

      <div className="userInputField">
        <Input
          keyPress={onkeypress}
          placeholder="Add todo Here"
          bgColour="white"
          onchange={onInputChange}
          inputValue={inputData}
        />
        <Button title="Add" onclick={onAddElement} width="300px" hight="60px" />
      </div>
      <div className="todos">
        {input.map((item, index) => {
          return (
            <Card
              Text={item}
              deleteIconClik={() => onDeleteIconClik(index)}
              EditIconClick={() => OnEditIconClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
