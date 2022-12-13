import React from "react";
import { useState } from "react";
import "./AddItem.css";
const AddItem = ({ addItem }) => {
  const [newItem, setnewItem] = useState({
    age: "",
    name: "",
  });

  // hander change
  let getName = (e) => {
    newItem.name = e.target.value;
  };
  let getAge = (e) => {
    newItem.age = e.target.value;
  };
  // add handler
  let additem = (e) => {
    e.preventDefault();
    addItem(newItem);
    console.log(newItem);
  };
  return (
    <div>
      <form onSubmit={additem}>
        <input type="text" id="name" onChange={getName} />
        <input type="text" id="age" onChange={getAge} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddItem;
