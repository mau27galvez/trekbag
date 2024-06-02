import Button from "./Button";

export default function ButtonGroup() {
  const secondaryButtons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items"
  ];

  return (
    <section className="button-group">
      {
        secondaryButtons.map((buttonText, index) => {
          return <Button key={index} type="secondary">{buttonText}</Button>
        })
      }
    </section>
  )
}
