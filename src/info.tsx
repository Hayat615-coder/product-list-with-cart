import waffle from "./assets/image-waffle-desktop.jpg";
import vanilla from "./assets/image-creme-brulee-desktop.jpg";
import macaron from "./assets/image-macaron-desktop.jpg";
import tiramisu from "./assets/image-tiramisu-desktop.jpg";
import baklava from "./assets/image-baklava-desktop.jpg";
import pie from "./assets/image-meringue-desktop.jpg";
import cake from "./assets/image-cake-desktop.jpg";
import brownie from "./assets/image-brownie-desktop.jpg";
import cotta from "./assets/image-panna-cotta-desktop.jpg";
import waffleMobile from "./assets/image-waffle-mobile.jpg";
import vanillaMobile from "./assets/image-creme-brulee-mobile.jpg";
import macaronMobile from "./assets/image-macaron-mobile.jpg";
import tiramisuMobile from "./assets/image-tiramisu-mobile.jpg";
import baklavaMobile from "./assets/image-baklava-mobile.jpg";
import pieMobile from "./assets/image-meringue-mobile.jpg";
import cakeMobile from "./assets/image-cake-mobile.jpg";
import brownieMobile from "./assets/image-brownie-mobile.jpg";
import cottaMobile from "./assets/image-panna-cotta-mobile.jpg";
export type Product = (typeof info)[number];
const info = [
  {
    id: 1,
    image: waffle,
    mobileImage: waffleMobile,
    shortName: "waffle",
    name: "Waffle with Barries",
    price: "$6.50",
  },
  {
    id: 2,
    image: vanilla,
    mobileImage: vanillaMobile,
    shortName: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: "$7.00",
  },
  {
    id: 3,
    image: macaron,
    mobileImage: macaronMobile,
    shortName: "Crème Brûlée",
    name: "Macaron Mix of Five",
    price: "$8.00",
  },
  {
    id: 4,
    image: tiramisu,
    mobileImage: tiramisuMobile,
    shortName: "Tiramisu",
    name: "Classic Tiramisu",
    price: "$5.50",
  },
  {
    id: 5,
    image: baklava,
    mobileImage: baklavaMobile,
    shortName: "Baklava",
    name: "Pistachio Baklava",
    price: "$4.00",
  },
  {
    id: 6,
    image: pie,
    mobileImage: pieMobile,
    shortName: " Pie",
    name: "Lemon Meringue Pie",
    price: "$5.00",
  },
  {
    id: 7,
    image: cake,
    mobileImage: cakeMobile,
    shortName: " Cake",
    name: "Red Velvet Cake",
    price: "$4.50",
  },
  {
    id: 8,
    image: brownie,
    mobileImage: brownieMobile,
    shortName: "Brownie",
    name: "Salted Caramel Brownie",
    price: "$6.50",
  },
  {
    id: 9,
    image: cotta,
    mobileImage: cottaMobile,
    shortName: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: "$6.50",
  },
];
export default info;
