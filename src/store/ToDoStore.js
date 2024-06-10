import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useListStore = create(
	persist(
		(set, get) => ({
			list: [],
			addListItem: (listItem) => set({ list: [...get().list, listItem] }),
			removeListItem: (id) =>
				set({
					list: get().list.filter((listItem) => listItem.id !== id),
				}),
			updateListItem: (updatedItem) =>
				set({
					list: get().list.map((data) =>
						data.id === updatedItem.id ? { ...data, ...updatedItem } : data,
					),
				}),
		}),
		{
			name: "todo-list",
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);
