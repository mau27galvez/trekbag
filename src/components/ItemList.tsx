import type { Item } from "../App"

export default function ItemList({
  items,
  onToggleItem,
  onRemoveItem
}: {
  items: Item[],
  onToggleItem: (id: string) => void,
  onRemoveItem: (id: string) => void,
}) {
  return (
    <ul>
      {items.map(item => <Item item={item} onToggleItem={onToggleItem} onRemoveItem={onRemoveItem} key={item.id} />)}
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
        <input type="checkbox" checked={item.isPacked} onClick={() => onToggleItem(item.id)} />
        {item.text}
      </label>

      <button onClick={() => onRemoveItem(item.id)}>❌</button>
    </li>
  )
}
