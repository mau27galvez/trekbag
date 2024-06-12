import { useShallow } from "zustand/react/shallow";
import useItemsStore from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  const {
    markAllItemsAsComplete,
    markAllItemsAsIncomplete,
    resetItemsToInitial,
    removeAllItems,
  } = useItemsStore(useShallow(state => ({
    markAllItemsAsComplete: state.markAllItemsAsComplete,
    markAllItemsAsIncomplete: state.markAllItemsAsIncomplete,
    resetItemsToInitial: state.resetItemsToInitial,
    removeAllItems: state.removeAllItems,
  })));

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
  );
}
