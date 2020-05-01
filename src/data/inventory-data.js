import productsData from './products.json';
export class InventoryData {}

InventoryData.ITEMS = productsData;

InventoryData.ITEMS.map((item, i) => {
  // Dynamically map our item IDs based on their positions in the item array
  item.id = i;
});

InventoryData.ITEMS_NAME_AZ = InventoryData.ITEMS.slice().sort(function(a, b) {
  return a.name.localeCompare(b.name);
});

InventoryData.ITEMS_NAME_ZA = InventoryData.ITEMS_NAME_AZ.slice().reverse();


InventoryData.ITEMS_PRICE_LOHI = InventoryData.ITEMS.slice().sort(function(a, b) {
  return a.price - b.price;
});

InventoryData.ITEMS_PRICE_HILO = InventoryData.ITEMS_PRICE_LOHI.slice().reverse();
