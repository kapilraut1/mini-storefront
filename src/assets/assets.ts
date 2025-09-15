import gs_logo from "./gs_logo.jpg"
import upload_area from "./upload_area.svg"
import hero_model_img from "./hero_model_img.png"
import hero_product_img1 from "./hero_product_img1.png"
import hero_product_img2 from "./hero_product_img2.png"
import product_img1 from "./product_img1.png"
import product_img2 from "./product_img2.png"
import product_img3 from "./product_img3.png"
import product_img4 from "./product_img4.png"
import product_img5 from "./product_img5.png"
import product_img6 from "./product_img6.png"
import product_img7 from "./product_img7.png"
import product_img8 from "./product_img8.png"
import product_img9 from "./product_img9.png"
import product_img10 from "./product_img10.png"
import product_img11 from "./product_img11.png"
import product_img12 from "./product_img12.png"
import product_img13 from "./product_img13.png"
import product_img14 from "./product_img14.png"
import product_img15 from "./product_img15.png"


export const assets = {
  upload_area,
  hero_model_img,
  hero_product_img1,
  hero_product_img2,
  gs_logo,
  product_img1,
  product_img2,
  product_img3,
  product_img4,
  product_img5,
  product_img6,
  product_img7,
  product_img8,
  product_img9,
  product_img10,
  product_img11,
  product_img12,
  product_img13,
  product_img14,
  product_img15,
}

export const categories = ["Sound", "Wearables", "Electronics"]

export const productDummyData = [
  {
    id: "lamp",
    name: "Modern table lamp",
    description:
      "Modern table lamp with a sleek design. Perfect for any room with high-quality materials.",
    mrp: 40,
    price: 9,
    images: [product_img1, product_img2, product_img3, product_img4],
    category: "Electronics",
    Stock: 5,
    createdAt: "2025-07-29T14:51:25.000Z",
    updatedAt: "2025-07-29T14:51:25.000Z",
  },
  {
    id: "speaker-gray",
    name: "Smart speaker gray",
    description: "Smart speaker with a minimal design and rich sound quality.",
    mrp: 50,
    price: 19,
    images: [product_img2],
    Stock: 5,
    category: "Sound",
    createdAt: "2025-07-28T14:51:25.000Z",
    updatedAt: "2025-07-28T14:51:25.000Z",
  },
  {
    id: "watch-white",
    name: "Smart watch white",
    description: "Smart watch with modern design and health tracking features.",
    mrp: 60,
    price: 18,
    images: [product_img3],
    Stock: 5,
    category: "Wearables",
    createdAt: "2025-07-27T14:51:25.000Z",
    updatedAt: "2025-07-27T14:51:25.000Z",
  },
  {
    id: "headphone",
    name: "Wireless headphones",
    description: "Wireless headphones with premium sound and long battery life.",
    mrp: 70,
    price: 22,
    images: [product_img4],
    Stock: 5,
    category: "Wearables",
    createdAt: "2025-07-26T14:51:25.000Z",
    updatedAt: "2025-07-26T14:51:25.000Z",
  },
  {
    id: "bluetooth-speaker",
    name: "Portable Bluetooth speaker",
    description: "Compact speaker with deep bass and waterproof design.",
    mrp: 80,
    price: 49,
    images: [product_img5],
    Stock: 5,
    category: "Sound",
    createdAt: "2025-07-25T14:51:25.000Z",
    updatedAt: "2025-07-25T14:51:25.000Z",
  },
  {
    id: "wristwatch",
    name: "Classic wristwatch",
    description: "Timeless wristwatch with leather strap and durable build.",
    mrp: 120,
    price: 89,
    images: [product_img6],
    Stock: 5,
    category: "Wearables",
    createdAt: "2025-07-24T14:51:25.000Z",
    updatedAt: "2025-07-24T14:51:25.000Z",
  },
  {
    id: "smartphone-pro",
    name: "Smartphone Pro",
    description: "High-performance smartphone with latest features.",
    mrp: 599,
    price: 299,
    images: [product_img7],
    Stock: 5,
    category: "Electronics",
    createdAt: "2025-07-23T14:51:25.000Z",
    updatedAt: "2025-07-23T14:51:25.000Z",
  },
  {
    id: "decor-vase",
    name: "Decor vase",
    description: "Elegant ceramic vase for modern interiors.",
    mrp: 190,
    price: 119,
    images: [product_img8],
    Stock: 5,
    category: "Sound",
    createdAt: "2025-07-22T14:51:25.000Z",
    updatedAt: "2025-07-22T14:51:25.000Z",
  },
  {
    id: "noise-cancel-headphone",
    name: "Noise cancelling headphones",
    description: "Over-ear headphones with advanced noise cancellation.",
    mrp: 399,
    price: 249,
    images: [product_img9],
    Stock: 5,
    category: "Sound",
    createdAt: "2025-07-21T14:51:25.000Z",
    updatedAt: "2025-07-21T14:51:25.000Z",
  },
  {
    id: "apple-watch",
    name: "Apple watch series 10",
    description: "The sleekest but finest.",
    mrp: 299,
    price: 199,
    images: [product_img10],
    Stock: 5,
    category: "Wearables",
    createdAt: "2025-07-20T14:51:25.000Z",
    updatedAt: "2025-07-20T14:51:25.000Z",
  },
  {
    id: "mouse",
    name: "Mouse",
    description: "Mouse can be a help.",
    mrp: 110,
    price: 79,
    images: [product_img11],
    Stock: 5,
    category: "Electronics",
    createdAt: "2025-07-19T14:51:25.000Z",
    updatedAt: "2025-07-19T14:51:25.000Z",
  },
  {
    id: "mini-lamp",
    name: "Minimalist desk lamp",
    description: "Simple and elegant desk lamp for study or office use.",
    mrp: 159,
    price: 89,
    images: [product_img12],
    Stock: 5,
    category: "Electronics",
    createdAt: "2025-07-18T14:51:25.000Z",
    updatedAt: "2025-07-18T14:51:25.000Z",
  },
    {
    id: "watch-black",
    name: "Black watch",
    description: "Simple and elegant watch.",
    mrp: 109,
    price: 69,
    images: [product_img13],
    Stock: 5,
    category: "Wearables",
    createdAt: "2025-07-18T14:51:25.000Z",
    updatedAt: "2025-07-18T14:51:25.000Z",
  },
    {
    id: "gaming",
    name: "Gaming",
    description: "Entertainment. Feels so real!!",
    mrp: 699,
    price: 299,
    images: [product_img14],
    Stock: 5,
    category: "Electronics",
    createdAt: "2025-07-18T14:51:25.000Z",
    updatedAt: "2025-07-18T14:51:25.000Z",
  },  {
    id: "b-headphone",
    name: "Bose Headphones",
    description: "Simple and elegant headphone for study or office use.",
    mrp: 200,
    price: 149,
    images: [product_img15],
    Stock: 5,
    category: "Sound",
    createdAt: "2025-07-18T14:51:25.000Z",
    updatedAt: "2025-07-18T14:51:25.000Z",
  }
]

