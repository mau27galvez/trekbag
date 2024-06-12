import useItemsStore from "../stores/itemsStore";

export default function Counter() {
  const getTotalItemsCount = useItemsStore(state => state.getTotalItemsCount);
  const getPackedItemsCount = useItemsStore(state => state.getPackedItemsCount);

  return (
    <p><b>{getPackedItemsCount()}</b> / {getTotalItemsCount()} items packed</p>
  )
}
