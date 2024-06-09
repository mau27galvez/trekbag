import Button from "./Button";

export default function ButtonGroup({
  markAllItemsAsComplete,
  markAllItemsAsIncomplete,
  resetItemsToInitial,
  removeAllItems,
}: {
  markAllItemsAsComplete: () => void,
  markAllItemsAsIncomplete: () => void,
  resetItemsToInitial: () => void,
  removeAllItems: () => void,
}) {
  return (
    <section className="button-group">
      <Button
        type="secondary"
        onClick={markAllItemsAsComplete}
      >Mark all as complete</Button>
      <Button
        type="secondary"
        onClick={markAllItemsAsIncomplete}
      >Mark all as incomplete</Button>
      <Button
        type="secondary"
        onClick={resetItemsToInitial}
      >Reset to initial</Button>
      <Button
        type="secondary"
        onClick={removeAllItems}
      >Remove all items</Button>
    </section>
  )
}
