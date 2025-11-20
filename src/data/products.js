import appleWatch from "../assets/apple-watch.png";
import sonyZX330BT from "../assets/sony-ZX330BT.png";
import iphone11Black from "../assets/iphone-11-black.png";
import iphone11Blue from "../assets/iphone-11-blue.png";
import iphone11Red from "../assets/iphone-11-red.png";
import iphone11White from "../assets/iphone-11-white.png";
import iphone13Red from "../assets/iphone-13-red.png";
import iphone14Red from "../assets/iphone-14-red.png";

export const products = [
    {
        id: 1,
        name: "Apple Watch",
        subtitle: "Series 5 SE",
        description: "Series 5 SE",
        longDescription: "Stylish and functional smartwatch with fitness tracking, heart rate monitoring, and seamless integration with iOS devices. Perfect for staying connected on the go.",
        price: "529.99",
        rating: 4,
        image: appleWatch,
        images: [appleWatch, appleWatch, appleWatch, appleWatch],
    },
    {
        id: 2,
        name: "Sony ZX330BT",
        subtitle: "Wireless Headphones",
        description: "Light Grey edition",
        longDescription:
            "Comfortable wireless headphones with long battery life and balanced sound profile. Ideal for daily commutes and casual listening.",
        price: "39.99",
        rating: 4,
        image: sonyZX330BT,
        images: [sonyZX330BT, sonyZX330BT, sonyZX330BT, sonyZX330BT],
    },
    {
        id: 3,
        name: "iPhone 11",
        subtitle: "Serious Black",
        description: "64GB — Serious Black",
        longDescription:
            "A powerful smartphone featuring dual cameras, smooth performance, and long battery life. Perfect blend of capability and value.",
        price: "619.99",
        rating: 5,
        image: iphone11Black,
        images: [iphone11Black, iphone11Blue, iphone11Red, iphone11White],
    },
    {
        id: 4,
        name: "iPhone 11",
        subtitle: "Subway Blue",
        description: "64GB — Subway Blue",
        longDescription:
            "iPhone 11 Subway Blue variant with Liquid Retina display and A13 Bionic chip for fast, efficient multitasking.",
        price: "619.99",
        rating: 5,
        image: iphone11Blue,
        images: [iphone11Blue, iphone11Black, iphone11Red, iphone11White],
    },
    {
        id: 5,
        name: "iPhone 11",
        subtitle: "Product RED",
        description: "64GB — Product RED",
        longDescription:
            "Special Product RED edition supporting global health initiatives. Same iPhone 11 performance with a bold finish.",
        price: "619.99",
        rating: 5,
        image: iphone11Red,
        images: [iphone11Red, iphone11Black, iphone11Blue, iphone11White],
    },
    {
        id: 6,
        name: "iPhone 11",
        subtitle: "Milky White",
        description: "64GB — Milky White",
        longDescription:
            "Elegant Milky White iPhone 11 with durable glass and aluminum design, optimized for reliability and performance.",
        price: "619.99",
        rating: 5,
        image: iphone11White,
        images: [iphone11White, iphone11Black, iphone11Blue, iphone11Red],
    },
    {
        id: 7,
        name: "iPhone 13",
        subtitle: "Product RED",
        description: "128GB — Product RED",
        longDescription:
            "iPhone 13 brings improved cameras, battery life, and performance with its A15 Bionic chip and advanced dual-camera system.",
        price: "799.99",
        rating: 5,
        image: iphone13Red,
        images: [iphone13Red, iphone11Red, iphone11Black, iphone11White],
    },
    {
        id: 8,
        name: "iPhone 14",
        subtitle: "Product RED",
        description: "256GB — Product RED",
        longDescription:
            "Latest generation performance, enhanced durability, and advanced camera features for high-quality photos and video.",
        price: "999.99",
        rating: 5,
        image: iphone14Red,
        images: [iphone14Red, iphone13Red, iphone11Red, iphone11White],
    },
];

export function getProductById(id) {
    return products.find((p) => p.id === Number(id));
}

export function listProductsSummary() {
    return products.map(({ id, name, description, price, image }) => ({
        id,
        name,
        description,
        price,
        image,
    }));
}
