import { useState } from "react"
import BackgroundHeading from "./components/BackgroundHeading"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ItemList from "./components/ItemList"
import Sidebar from "./components/Sidebar"

export type Item = {
  id: string,
  text: string,
  isPacked: boolean,
}

function App() {
  const [items, setItems] = useState<Item[]>([
    { id: new Date().setMinutes(2).toString(), text: "Good mood", isPacked: true },
    { id: new Date().setMinutes(1).toString(), text: "Passport", isPacked: false },
    { id: new Date().setMinutes(6).toString(), text: "Jacket", isPacked: false },
  ]);

  const addItem = (text: string) => setItems((prevItems) => [...prevItems, {
    id: new Date().toString(),
    text,
    isPacked: false
  }])

  const toggleItem = (id: string) => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isPacked: !item.isPacked,
          };
        }
        return item;
      });
    });
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  const markAllItemsAsComplete = () => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return {
          ...item,
          isPacked: true,
        };
      });
    });
  }

  const markAllItemsAsIncomplete = () => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        return {
          ...item,
          isPacked: false,
        };
      });
    });
  }

  const resetItemsToInitial = () => { }

  const removeAllItems = () => setItems([])

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList
          items={items}
          onToggleItem={toggleItem}
          onRemoveItem={removeItem}
        />
        <Sidebar
          addItem={addItem}
          markAllItemsAsComplete={markAllItemsAsComplete}
          markAllItemsAsIncomplete={markAllItemsAsIncomplete}
          resetItemsToInitial={resetItemsToInitial}
          removeAllItems={removeAllItems}
        />
      </main>

      <Footer />
    </>
  )
}

export default App
