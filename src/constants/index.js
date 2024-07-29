import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '100%', label: 'Cá tuyết Bắc Cực' },
    { value: '170 năm', label: 'phát triển' },
    { value: 'Giàu Omega-3', label: '5 ml đáp ứng nhu cầu Omega-3 hàng ngày' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Biopharma Trippel Omega-3 Barn",
        price: "$20.20",
    },
    {
        imgURL: shoe5,
        name: "VitaYummy Collagen Cherry",
        price: "$20.20",
    },
    {
        imgURL: shoe6,
        name: "Vitaminbjørner®",
        price: "$20.20",
    },
    {
        imgURL: shoe7,
        name: "Möller's Trankapsler",
        price: "$20.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Miễn phí ship toàn quốc trong tháng 8 năm 2024"
    },
    {
        imgURL: shieldTick,
        label: "Chính Hãng",
        subtext: "Mọi sản phẩm đều được đặt hàng trực tiếp tại Nauy và có bill đầy đủ"
    },
    {
        imgURL: support,
        label: "Luôn đồng hành cùng bạn",
        subtext: "Chúng tôi luôn lắng nghe và thấu hiểu mọi nhu cầu của khách hàng, mang đến trải nghiệm mua sắm tốt nhất và phù hợp nhất với từng cá nhân."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
