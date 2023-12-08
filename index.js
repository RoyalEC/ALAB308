const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
  },
};

adventurer.companion.companion = {
  name: "Frank",
  type: "Flea",
  belongings: ["small hat", "sunglasses"],
};

adventurer.roll;

adventurer.inventory.forEach((item) => {
  console.log(item);
});
