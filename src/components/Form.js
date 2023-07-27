import { useState } from "react";

const Form = ({ addItem }) => {
  let [description, setDescription] = useState("");
  let [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    const item = {
      id: Date.now(),
      description,
      quantity,
    };
    // console.log(item);
    addItem(item);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (c, i) => i + 1).map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
export default Form;
