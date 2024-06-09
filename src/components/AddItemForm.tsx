import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }: { onAddItem: (text: string) => void } ) {
  const [name, setName] = useState("");
  const newItemNameInput = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const sanitizedName = name.trim();

    if (sanitizedName === "") {
      alert("Please enter a valid item name.");
      newItemNameInput.current?.focus();
      return;
    }

    onAddItem(sanitizedName);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={newItemNameInput}
        type="text"
        name="name"
        id="new-item-name-input"
        autoFocus={true}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button type="primary">Add to list</Button>
    </form>
  )
}
