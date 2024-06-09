import { ReactNode } from "react";

export default function Button({
  type,
  children,
  onClick,
}: { type: "primary" | "secondary", children: ReactNode, onClick?: () => void}) {
  return (
    <button
      className={`btn ${type === "secondary" ? "btn--secondary" : ""}`}
      onClick={onClick}
    >{children}</button>
  )
}
