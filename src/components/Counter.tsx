export default function Counter({
  checked,
  total,
}: {
  checked: number;
  total: number;
}) {
  return (
    <p><b>{checked}</b> / {total} items packed</p>
  )
}
