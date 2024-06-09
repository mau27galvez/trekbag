import { useEffect, useState } from "react"
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
  const initialItems = [
    { id: "1", text: "Good mood", isPacked: true },
    { id: "2", text: "Passport", isPacked: false },
    { id: "3", text: "Jacket", isPacked: false },
  ];
  const [items, setItems] = useState<Item[]>(() => {
    const savedItems = JSON.parse(localStorage.getItem("items") || "[]");

    if (savedItems && savedItems.length > 0) {
      return savedItems;
    }

    return initialItems;
  });

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

  const resetItemsToInitial = () => setItems(initialItems)

  const removeAllItems = () => setItems([])

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header packedItemsCount={items.filter(item => item.isPacked).length} totalItemsCount={items.length}  />
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
