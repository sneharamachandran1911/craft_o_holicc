import sunflower1 from "../assets/bouquet.jpg";
import sunflower2 from "../assets/hero.jpg";

import bubu1 from "../assets/bubududu.jpg";
import bubu2 from "../assets/bouquet.jpg";

import whale1 from "../assets/bouquet.jpg";

import rosebag1 from "../assets/bouquet.jpg";

const products = [
  {
    id: 1,
    name: "Sunflower Bouquet",
    category: "Bouquets",
    price: 599,
    rating: 4.9,
    stock: true,

    images: [
      sunflower1,
      sunflower2,
    ],

    video: "",

    description:
      "Handmade crochet sunflower bouquet crafted using premium yarn. Perfect for birthdays and anniversaries.",

    materials: [
      "Premium Yarn",
      "Cotton Filling",
      "Wrapping Paper"
    ],

    colors: [
      "Yellow"
    ]
  },

  {
    id: 2,
    name: "Bubu Dudu Doll",
    category: "Dolls",
    price: 699,
    rating: 5,

    stock: true,

    images: [
      bubu1,
      bubu2
    ],

    video: "",

    description:
      "Cute handmade Bubu Dudu crochet doll made using soft plush yarn.",

    materials: [
      "Plush Yarn",
      "Cotton Filling"
    ],

    colors: [
      "White"
    ]
  },

  {
    id: 3,
    name: "Whale Keychain",
    category: "Keychains",
    price: 199,
    rating: 4.8,

    stock: true,

    images: [
      whale1
    ],

    video: "",

    description:
      "Mini crochet whale keychain. Soft, lightweight and perfect for gifting.",

    materials: [
      "Cotton Yarn"
    ],

    colors: [
      "Blue"
    ]
  },

  {
    id: 4,
    name: "Rose Tote Bag",
    category: "Bags",
    price: 1899,

    rating: 5,

    stock: false,

    images: [
      rosebag1
    ],

    video: "",

    description:
      "Elegant handmade crochet rose tote bag.",

    materials: [
      "Cotton Yarn"
    ],

    colors: [
      "Red"
    ]
  }
];

export default products;