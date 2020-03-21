import React from "react";
import "./List.css";
import { fontawesome, FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function ListItem(props) {
  const items = props.items;
  const ListItems = items.map(item => {
    return (
      <div className="List" key={item.key}>
        <p>
          <input
            type="text"
            id={item.text}
            value={item.text}
            onChange={e => {
              props.setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faIcon"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={500} easing="ease-in-out">
        {ListItems}
      </FlipMove>
    </div>
  );
}

export default ListItem;
