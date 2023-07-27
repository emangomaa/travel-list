import Item from "./Item";
import { useState } from "react";
const PackingList = ({ items, onDeleteItem, onClearList, onToggleItem }) => {
  let [sortBy, setSortBy] = useState("input");
  let sortedItems = items;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  return (
    <div className="list">
      <ul style={items.length >= 10 ? { overflowY: "scroll" } : {}}>
        {items.length ? (
          sortedItems.map((item) => (
            <Item
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
              key={item.id}
            />
          ))
        ) : (
          <em style={{ textAlign: "center" }}>Your Packing List Empty!</em>
        )}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
};
export default PackingList;
