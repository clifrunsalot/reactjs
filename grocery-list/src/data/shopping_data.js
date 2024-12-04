
// Defines store options
const storeList = [
    { name: "Walmart", tag: "W" },
    { name: "ShopRite", tag: "SR" },
    { name: "Aldi", tag: "A" }
];

// Defines default shopping list.
const shoppingList = [
    { id: 1, name: "Popcorn", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 2, name: "Bagels", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 3, name: "Rice", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 4, name: "Cookies", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 5, name: "Meat", quantity: 1, store: storeList.find((store) => store.tag === "SR"), food: true, selected: false },
    { id: 6, name: "Gum", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 7, name: "Bananas", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 8, name: "Dark Chocolate", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 9, name: "Cereal", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 10, name: "Breakfast Meat", quantity: 1, store: storeList.find((store) => store.tag === "A"), food: true, selected: false },
    { id: 11, name: "Veggies", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: true, selected: false },
    { id: 12, name: "Water Filter", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 13, name: "Toilet Tissue", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 14, name: "Facial Tissue", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 15, name: "Baby Wipes", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 16, name: "Swiffer Duster Refills", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 17, name: "Paper Towels", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 18, name: "Trash Bags Large", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 19, name: "Trash Bags Small", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 20, name: "Incont Pads", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 21, name: "Facial Cloths", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 22, name: "Pre-Moist Facial Cloths", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 23, name: "Toothpaste", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 24, name: "Lotion", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 25, name: "Lip Balm", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false },
    { id: 26, name: "Hand Sanitizer", quantity: 1, store: storeList.find((store) => store.tag === "W"), food: false, selected: false }];

export const getShoppingList = () => {
    const foodList = shoppingList.filter((a) => a.food === true)
                        .sort((a, b) => a.name.localeCompare(b.name));
    const nonFoodList = shoppingList.filter((a) => a.food === false)
                        .sort((a, b) => a.name.localeCompare(b.name));
    return [...foodList, ...nonFoodList];
}

export const getStoreList = () => {
    return storeList;
}
