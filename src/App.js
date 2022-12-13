import React from "react";
import { useState } from "react";
import AddItem from "./Components/AddItem/AddItem";
import TodoItem from "./Components/TodoItem/TodoItem";

const App = () => {
  // items
  const [items, setItems] = useState([
    { id: 1, name: "ahmed", age: 44 },
    { id: 2, name: "omer", age: 32 },
    { id: 3, name: "anas", age: 12 },
  ]);
  // Add Item handler
  let addItem = (item) => {
    item.id = Math.random();
    items.push(item);
    console.log(items)
    setItems(items)
  };
  // delete handler
  let deleteHandler = (id) => {
    if (items.length > 0) {
      let filterItems = items.filter((item) => {
        return item.id !== id;
      });
      setItems(filterItems);
    }

    if (items.length < 1) {
      console.log("no items");
    }
  };
  return (
    <div>
      <TodoItem items={items} del={deleteHandler} />
      <AddItem addItem={addItem} />
    </div>
  );
};

export default App;
