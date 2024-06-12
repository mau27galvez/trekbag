import { create } from "zustand";
import { Item } from "../App";
import { persist } from "zustand/middleware";

const initialItems = [
    { id: "1", text: "Good mood", isPacked: true },
    { id: "2", text: "Passport", isPacked: false },
    { id: "3", text: "Jacket", isPacked: false },
];

interface ItemState {
    items: Item[];
    addItem: (text: string) => void;
    toggleItem: (id: string) => void;
    removeItem: (id: string) => void;
    markAllItemsAsComplete: () => void;
    markAllItemsAsIncomplete: () => void;
    resetItemsToInitial: () => void;
    removeAllItems: () => void;
    getPackedItemsCount: () => number;
    getTotalItemsCount: () => number;
}

const useItemsStore = create<ItemState>()(persist((set) => ({
    items: initialItems,
    addItem: (text: string) =>
        set((state) => ({
            items: [
                ...state.items,
                {
                    id: new Date().toString(),
                    text,
                    isPacked: false,
                },
            ]
        })),
    toggleItem: (id: string) => {
        set((state) => {
            const updatedItems = state.items.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        isPacked: !item.isPacked,
                    };
                }
                return item;
            });

            return { items: updatedItems };
        });
    },
    removeItem: (id: string) => {
        set((state) => ({
            items: state.items.filter((item) => item.id !== id)
        }));
    },
    markAllItemsAsComplete: () => {
        set((state) => ({
            items: state.items.map((item) => ({
                ...item,
                isPacked: true,
            }))
        }));
    },
    markAllItemsAsIncomplete: () => {
        set((state) => ({
            items: state.items.map((item) => ({
                ...item,
                isPacked: false,
            }))
        }));
    },
    resetItemsToInitial: () => set(() => ({items: initialItems})),
    removeAllItems: () => set(() => ({items: []})),
    getPackedItemsCount: () => {
        let packedItemsCount = 0;

        set((state) => {
            state.items.forEach((item) => {
                if (item.isPacked) {
                    packedItemsCount++;
                }
            });

            return state;
        });

        return packedItemsCount;
    },
    getTotalItemsCount: () => {
        let totalItemsCount = 0;

        set((state) => {
            totalItemsCount = state.items.length;

            return state;
        });

        return totalItemsCount;
    },
}), {
    name: "items",
}));

export default useItemsStore;
