import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({
  packedItemsCount,
  totalItemsCount,
}: {
  packedItemsCount: number;
  totalItemsCount: number;
}) {
  return (
    <header>
        <Logo />
        <Counter checked={packedItemsCount} total={totalItemsCount} />
    </header>
  )
}
