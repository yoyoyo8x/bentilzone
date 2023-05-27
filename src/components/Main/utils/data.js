import I1 from "../img/i1.png";
import F1 from "../img/f1.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/fi1.png"
import C6 from "../img/c6.png"
import C4 from "../img/c4.png"
import C2 from "../img/c2.png"
import C1 from "../img/c1.png"
import Cu6 from "../img/cu6.png"
import Cu5 from "../img/cu5.png"
import Cu4 from "../img/cu4.png"
import Cu3 from "../img/cu3.png"
import Cu2 from "../img/cu2.png"
import Cu1 from "../img/cu1.png"
import Fi2 from "../img/fi2.png"
import F2 from "../img/f2.png";
import F3 from "../img/f3.png";
import F5 from "../img/f5.png";
import F6 from "../img/f6.png";
import F7 from "../img/f7.png";
import I2 from "../img/i2.png";
import I3 from "../img/i3.png";
import I4 from "../img/i4.png";
import I5 from "../img/i5.png";
import I6 from "../img/i6.png";
import I7 from "../img/i7.png";
import D1 from "../img/d1.png";
import D2 from "../img/d2.png";
import D3 from "../img/d3.png";
import D4 from "../img/d4.png";
import D5 from "../img/d5.png";
import D6 from "../img/d6.png";
import D7 from "../img/d7.png";
import D8 from "../img/d8.png";
import QR1 from "../img/QR1.jpg";
import QR2 from "../img/QR2.jpg";
import QR3 from "../img/QR3.jpg";







//Data của home container

export const heroData =[
    {
        id:1,
        name: 'Icecream',
        desp:"Chocolate & Vanilla",
        price:'5,25',
        imageSrc:I1
    },
    {
        id:2,
        name: 'Strawberries',
        desp:" Fresh Strawberries",
        price:'10,25',
        imageSrc:F1
    },
    {
        id:3,
        name: 'Chicken Kebab',
        desp:"Mixed Kebab PLate",
        price:'8,25',
        imageSrc:C3
    },
    {
        id:4,
        name: 'Fish Kebab',
        desp:"Mixed Fish Kebab",
        price:'5,25',
        imageSrc:Fi1
    },
]

export const Categories =[
    {
        id:1,
        name:"Chicken",
        urlParamName:"chicken",
    },
    {
        id:2,
        name:"Curry",
        urlParamName:"curry",
    },
    {
        id:3,
        name:"Rice",
        urlParamName:"rice",
    },
    {
        id:4,
        name:"Fish",
        urlParamName:"fish",
    },
    {
        id:5,
        name:"Fruits",
        urlParamName:"fruits",
    },
    {
        id:6,
        name:"Icecreams",
        urlParamName:"icecreams",
    },
    {
        id:7,
        name:"Soft Drinks",
        urlParamName:"drinks",
    },
]
export const menuList =[
    {
        id: 1,
        calories: "65",
        category: "chicken",
        qty:1,
        imageURL: C6,
        title:"Chicken Kebab Plate",
        price:"10"
    },
    {
        id: 2,
        calories: "65",
        category: "chicken",
        qty:1,
        imageURL: C4,
        title:"Broasted Chicken",
        price:"8.5"
    },
    {
        id: 3,
        calories: "35",
        category: "chicken",
        qty:1,
        imageURL: C3,
        title:"Chicken Kebab",
        price:"12"
    },
    {
        id: 4,
        calories: "80",
        category: "chicken",
        qty:1,
        imageURL: C2,
        title:"Chicken 65",
        price:"12.5"
    },
    {
        id: 5,
        calories: "65",
        category: "chicken",
        qty:1,
        imageURL: C1,
        title:"Chicken Manjoorian",
        price:"8.5"
    },
    {
        id: 6,
        calories: "100",
        category: "curry",
        qty:1,
        imageURL: Cu6,
        title:"Dinner Masala",
        price:"22.5"
    },
    {
        id: 7,
        calories: "65",
        category: "curry",
        qty:1,
        imageURL: Cu5,
        title:"Kadai Chicken",
        price:"16.5"
    },
    {
        id: 8,
        calories: "65",
        category: "curry",
        qty:1,
        imageURL: Cu4,
        title:"Butter Chicken",
        price:"18"
    },
    {
        id: 9,
        calories: "65",
        category: "curry",
        qty:1,
        imageURL: Cu3,
        title:"Prawn Masala",
        price:"20"
    },
    {
        id: 10,
        calories: "80",
        category: "curry",
        qty:1,
        imageURL: Cu2,
        title:"Veg Masala",
        price:"12.5"
    },
    {
        id: 11,
        calories: "45",
        category: "curry",
        qty:1,
        imageURL: Cu1,
        title:"Chicken Masala",
        price:"14.5"
    },
    {
        id: 12,
        calories: "60",
        category: "fish",
        qty:1,
        imageURL: Fi2,
        title:"Fish Fry",
        price:"15"
    },
    {
        id: 13,
        calories: "160",
        category: "fish",
        qty:1,
        imageURL: Fi1,
        title:"Fish Kebab Plater",
        price:"22.5"
    },
    {
        id: 14,
        calories: "80",
        category: "fruits",
        qty:1,
        imageURL: F3,
        title:"Blue Berries",
        price:"12"
    },
    {
        id: 15,
        calories: "120",
        category: "fruits",
        qty:1,
        imageURL: F6,
        title:"Pomegranate",
        price:"15"
    },
    {
        id: 16,
        calories: "65",
        category: "fruits",
        qty:1,
        imageURL: F7,
        title:"Rasperry",
        price:"20"
    },
    {
        id: 17,
        calories: "100",
        category: "fruits",
        qty:1,
        imageURL: F2,
        title:"Pine Apple",
        price:"16"
    },
    {
        id: 18,
        calories: "100",
        category: "fruits",
        qty:1,
        imageURL: F5,
        title:"Strawberries",
        price:"22"
    },
    {
        id: 19,
        calories: "65",
        category: "icecreams",
        qty:1,
        imageURL: I6,
        title:"Ice Cups",
        price:"12"
    },
    {
        id: 20,
        calories: "65",
        category: "icecreams",
        qty:1,
        imageURL: I1,
        title:"Chocolate Vanilla",
        price:"8.5"
    },
    {
        id: 21,
        calories: "70",
        category: "icecreams",
        qty:1,
        imageURL: I2,
        title:"Ice Cups 2",
        price:"8"
    },
    {
        id: 22,
        calories: "50",
        category: "icecreams",
        qty:1,
        imageURL: I3,
        title:"Ice cream cone",
        price:"5"
    },
    {
        id: 23,
        calories: "80",
        category: "icecreams",
        qty:1,
        imageURL: I4,
        title:"Ice cream bowl",
        price:"10"
    },
    {
        id: 24,
        calories: "85",
        category: "icecreams",
        qty:1,
        imageURL: I5,
        title:"Ice cream bowl 2",
        price:"10"
    },
    {
        id: 25,
        calories: "85",
        category: "icecreams",
        qty:1,
        imageURL: I7,
        title:"Ice cream bowl 3",
        price:"9"
    },
    {
        id: 26,
        calories: "45",
        category: "drinks",
        qty:1,
        imageURL: D8,
        title:"Coca-Cola",
        price:"3"
    },
    {
        id: 27,
        calories: "45",
        category: "drinks",
        qty:1,
        imageURL: D6,
        title:"Fanta",
        price:"3"
    },
    {
        id: 28,
        calories: "45",
        category: "drinks",
        qty:1,
        imageURL: D5,
        title:"Sprite",
        price:"3"
    },
    {
        id: 29,
        calories: "45",
        category: "drinks",
        qty:1,
        imageURL: D2,
        title:"Pepsi",
        price:"3"
    },
    {
        id: 30,
        calories: "45",
        category: "drinks",
        qty:1,
        imageURL: D1,
        title:"RedBull",
        price:"3.5"
    },
    {
        id: 31,
        calories: "50",
        category: "drinks",
        qty:1,
        imageURL: D3,
        title:"Mountain Dew",
        price:"3.5"
    },
    {
        id: 32,
        calories: "60",
        category: "drinks",
        qty:1,
        imageURL: D4,
        title:"Cocktail",
        price:"6"
    },
    {
        id: 33,
        calories: "70",
        category: "drinks",
        qty:1,
        imageURL: D7,
        title:"Green bean tea",
        price:"5"
    },
]
export const CheckoutList =[
    {
        id:1,
        name: "Phạm Đức Tài",
        stk: "19036284211011",
        imgQR: QR1,
        Bank: "Techcombank"
    },
    {   
        id:2,
        name: "Lê Hoàng Anh Thư",
        stk: "0421000504725",
        imgQR: QR2,
        Bank: "Vietcombank"
    },
    {
        id:3,
        name: "Nguyễn Đức Trung",
        stk: "7542127",
        imgQR: QR3,
        Bank: "ACB"
    },
]
export const CityList =[
    {city:"Thành phố Hồ Chí Minh"},
    {city:"Đà Nẵng"},
    {city:"Hải Phòng"},
    {city:"Cần Thơ"},
    {city:"Bà Rịa"},
    {city:"Tp. Thủ Đức"},
    {city:"Bạc Liêu"},
    {city:"Bảo Lộc"},
    {city:"Bắc Giang"},
    {city:"Bắc Kạn"},
    {city:"Bắc Ninh"},
    {city:"Bến Tre"},
    {city:"Biên Hòa"},
    {city:"Buôn Ma Thuột"},
    {city:"Cà Mau"},
    {city:"Cam Ranh"},
    {city:"Cao Bằng"},
    {city:"Cao Lãnh"},
    {city:"Cẩm Phả"},
    {city:"Châu Đốc"},
    {city:"Đà Lạt"},
    {city:"Điện Biên Phủ"},
    {city:"Đông Hà"},
    {city:"Đồng Hới"},
    {city:"Đồng Xoài"},
    {city:"Hà Giang"},
    {city:"Hạ Long"},
    {city:"Hà Tiên"},
    {city:"Hà Nội"},
    {city:"Hà Tĩnh"},
    {city:"Hải Dương"},
    {city:"Hòa Bình"},
    {city:"Hội An"},
    {city:"Huế"},
    {city:"Hưng Yên"},
    {city:"Kon Tum"},
    {city:"Lai Châu"},
    {city:"Lạng Sơn"},
    {city:"Lào Cai"},
    {city:"Long Xuyên"},
    {city:"Móng Cái"},
    {city:"Mỹ Tho"},
    {city:"Nam Định"},
    {city:"Nha Trang"},
    {city:"Ninh Bình"},
    {city:"Phan Rang – Tháp Chàm"},
    {city:"Phan Thiết"},
    {city:"Phủ Lý"},
    {city:"Phúc Yên"},
    {city:"Pleiku"},
    {city:"Quảng Ngãi"},
    {city:"Quy Nhơn"},
    {city:"Rạch Giá"},
    {city:"Phú Quốc"},
    {city:"Sa Đéc"},
    {city:"Sầm Sơn"},
    {city:"Sóc Trăng"},
    {city:"Sơn La"},
    {city:"Sông Công"},
    {city:"Tam Điệp"},
    {city:"Tam Kỳ"},
    {city:"Tân An"},
    {city:"Tây Ninh"},
    {city:"Thái Bình"},
    {city:"Thái Nguyên"},
    {city:"Thanh Hóa"},
    {city:"Thủ Dầu Một"},
    {city:"Trà Vinh"},
    {city:"Tuy Hòa"},
    {city:"Tuyên Quang"},
    {city:"Uông Bí"},
    {city:"Vị Thanh"},
    {city:"Việt Trì"},
    {city:"Vinh"},
    {city:"Vĩnh Long"},
    {city:"Vĩnh Yên"},
    {city:"Vũng Tàu"},
    {city:"Yên Bái"},
]

