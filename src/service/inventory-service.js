import productsData from '../data/products.json';
export class InventoryService {}

InventoryService.ITEMS = productsData;

InventoryService.ITEMS.forEach((item, i) => {
  // Dynamically map our item IDs based on their positions in the item array
  item.id = i;
});

InventoryService.ITEMS_NAME_AZ = InventoryService.ITEMS.slice().sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

InventoryService.ITEMS_NAME_ZA = InventoryService.ITEMS_NAME_AZ.slice().reverse();


InventoryService.ITEMS_PRICE_LOHI = InventoryService.ITEMS.slice().sort(function(a, b) {
  return a.price - b.price;
});

InventoryService.ITEMS_PRICE_HILO = InventoryService.ITEMS_PRICE_LOHI.slice().reverse();

InventoryService.ITEMS_FILTER = InventoryService.ITEMS.filter(function(item) {
        return item.name.includes("Awesome")
    }
);
