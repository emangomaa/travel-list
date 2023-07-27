import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  let [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function clearList() {
    let confirm = window.confirm(
      "Are You Sure To Delete All Items Of The List ?"
    );
    if (confirm) {
      setItems([]);
    }
  }

  function toggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onClearList={clearList}
        onToggleItem={toggleItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
