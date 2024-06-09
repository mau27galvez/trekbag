import Select from "react-select"
import type { Item } from "../App"
import { useState } from "react";

export default function ItemList({
  items,
  onToggleItem,
  onRemoveItem
}: {
  items: Item[],
  onToggleItem: (id: string) => void,
  onRemoveItem: (id: string) => void,
}) {
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return Number(b.isPacked) - Number(a.isPacked);
    }
    if (sortBy === "unpacked") {
      return Number(a.isPacked) - Number(b.isPacked);
    }
    return 0;
  })

  const sortingOptions = [
    { label: "Sort by default", value: "default" },
    { label: "Sort by packed", value: "packed" },
    { label: "Sort by unpacked", value: "unpacked" },
  ];

  return (
    <ul className="item-list" >
      {items.length === 0 && <EmptyView />}
      {
        items.length > 0 && <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={option => setSortBy(option?.value ?? "default")}
          />
        </section>
      }
      {sortedItems.map(item => <Item item={item} onToggleItem={onToggleItem} onRemoveItem={onRemoveItem} key={item.id} />)}
    </ul>
  )
}

function Item({
  item,
  onToggleItem,
  onRemoveItem
}: {
  item: Item,
  onToggleItem: (id: string) => void,
  onRemoveItem: (id: string) => void,
}) {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.isPacked} onChange={() => onToggleItem(item.id)} />
        {item.text}
      </label>

      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  )
}

function EmptyView() {
  return <section>
    <h3>Empty Packing List</h3>
    <p>Start by adding some items you absolutely don't want to forget</p>
  </section>
}
