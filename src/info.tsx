import waffle from "./assets/image-waffle-desktop.jpg";
import vanilla from "./assets/image-creme-brulee-desktop.jpg";
import macaron from "./assets/image-macaron-desktop.jpg";
import tiramisu from "./assets/image-tiramisu-desktop.jpg";
import baklava from "./assets/image-baklava-desktop.jpg";
import pie from "./assets/image-meringue-desktop.jpg";
import cake from "./assets/image-cake-desktop.jpg";
import brownie from "./assets/image-brownie-desktop.jpg";
import cotta from "./assets/image-panna-cotta-desktop.jpg";
export type Product = (typeof info)[number];
const info = [
  {
    id: 1,
    image: waffle,
    shortName: "waffle",
    name: "Waffle with Barries",
    price: "$650",
  },
  {
    id: 2,
    image: vanilla,
    shortName: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: "$7.00",
  },
  {
    id: 3,
    image: macaron,
    shortName: "Crème Brûlée",
    name: "Macaron Mix of Five",
    price: "$8.00",
  },
  {
    id: 4,
    image: tiramisu,
    shortName: "Tiramisu",
    name: "Classic Tiramisu",
    price: "$5.50",
  },
  {
    id: 5,
    image: baklava,
    shortName: "Baklava",
    name: "Pistachio Baklava",
    price: "$4.00",
  },
  {
    id: 6,
    image: pie,
    shortName: " Pie",
    name: "Lemon Meringue Pie",
    price: "$5.00",
  },
  {
    id: 7,
    image: cake,
    shortName: " Cake",
    name: "Red Velvet Cake",
    price: "$4.50",
  },
  {
    id: 8,
    image: brownie,
    shortName: "Brownie",
    name: "Salted Caramel Brownie",
    price: "$6.50",
  },
  {
    id: 9,
    image: cotta,
    shortName: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: "$6.50",
  },
];
export default info;
