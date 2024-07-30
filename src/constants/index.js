import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Trang chủ" },
    { href: "#about-us", label: "Về chúng tôi" },
    { href: "#products", label: "Sản phẩm" },
    { href: "#contact-us", label: "Liên hệ " },
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
        name: "Biopharma Trippel Omega-3",
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
        customerName: 'Giang Nguyễn',
        rating: 4.5,
        feedback: "Dầu cá nhà Norvi rất chất lượng, cháu mình từ hồi sử dụng thấy da dẻ mịn màng, đáng yêu lắm luôn."
    },
    {
        imgURL: customer2,
        customerName: 'Linh Chấy',
        rating: 4.5,
        feedback: "Sáng nào mình cũng bổ sung một viên dầu cá Moller cho một ngày tràn đầy năng lượng, cám ơn shop đã mang một sản phẩm uy tín về Việt Nam nhé!"
    }
];


export const footerLinks = [
    {
        title: "Trợ giúp",
        links: [
            { name: "Về chúng tôi", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Hướng dẫn đặt hàng", link: "/" },
            { name: "Chính sách bảo mật", link: "/" },
            { name: "Chính sách thanh toán", link: "/" },
        ],
    },
    {
        title: "Liên hệ",
        links: [
            { name: "huynhhuynh123@gmail.com", link: "mailto:huynhhuynh123@gmail.com" },
            { name: "(+84)933664968", link: "tel:+84933664968" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
