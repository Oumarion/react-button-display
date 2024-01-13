import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Berlin", "Paris", "Hamburg"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group"></ul>
      {items.map((item, index) => (
        <li
          className={
            selectedIndex === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item}
          onClick={() => setSelectedIndex(index)}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
