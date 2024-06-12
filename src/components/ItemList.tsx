import Select from "react-select"
import type { Item } from "../App"
import { useMemo, useState } from "react";
import useItemsStore from "../stores/itemsStore";

export default function ItemList() {
  const items = useItemsStore(state => state.items);

  const [sortBy, setSortBy] = useState("default");
  const sortedItems = useMemo(() => [...items].sort((a, b) => {
    if (sortBy === "packed") {
      return Number(b.isPacked) - Number(a.isPacked);
    }
    if (sortBy === "unpacked") {
      return Number(a.isPacked) - Number(b.isPacked);
    }
    return 0;
  }), [items, sortBy])

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
      {sortedItems.map(item => <Item item={item} key={item.id} />)}
    </ul>
  )
}

function Item({ item }: { item: Item }) {
  const { toggleItem, removeItem } = useItemsStore();

  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.isPacked} onChange={() => toggleItem(item.id)} />
        {item.text}
      </label>

      <button onClick={() => removeItem(item.id)}>❌</button>
    </li>
  )
}

function EmptyView() {
  return <section>
    <h3>Empty Packing List</h3>
    <p>Start by adding some items you absolutely don't want to forget</p>
  </section>
}
