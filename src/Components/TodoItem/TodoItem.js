import React from "react";
import "./TodoItem.css";
const TodoItem = ({ items, del }) => {
  let length = items.length;
  let listItems = length ? (
    items.map((item) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
          <span>{item.age}</span>
          <span onClick={() => del(item.id)}>&times;</span>
        </div>
      );
    })
  ) : (
    <p>Thers No Itmes To Show</p>
  );

  return (
    <div className="todo">
      <div>
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>
      <div>{listItems}</div>
    </div>
  );
};

export default TodoItem;
