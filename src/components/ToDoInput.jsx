import { useState } from "react";
import Button from "./Button";

function ToDoInput({ onTaskCreate }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };
  const handleAddClick = () => {
    onTaskCreate(text);
  };
  return (
    <>
      <input
        type="text"
        placeholder="add something"
        value={text}
        onChange={handleChange}
      />
      <Button title="Add" onClick={handleAddClick} />
    </>
  );
}

export default ToDoInput;
