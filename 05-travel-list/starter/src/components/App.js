import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleDeleteAllItems() {
    if (window.confirm("Are you sure you want to delete all items?")) {
      setItems([]);
    }
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleAddItems(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleToggleItem(id) {
    setItems((prev) =>
      prev.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el))
    );
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteAllItems={handleDeleteAllItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
