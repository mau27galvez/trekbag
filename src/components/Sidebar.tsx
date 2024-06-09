import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
  addItem,
  markAllItemsAsComplete,
  markAllItemsAsIncomplete,
  resetItemsToInitial,
  removeAllItems,
}: {
  addItem: (text: string) => void,
  markAllItemsAsComplete: () => void,
  markAllItemsAsIncomplete: () => void,
  resetItemsToInitial: () => void,
  removeAllItems: () => void,
}) {
  return (
    <aside className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup
        markAllItemsAsComplete={markAllItemsAsComplete}
        markAllItemsAsIncomplete={markAllItemsAsIncomplete}
        resetItemsToInitial={resetItemsToInitial}
        removeAllItems={removeAllItems}
      />
    </aside>
  )
}
