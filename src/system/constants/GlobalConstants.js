import airpods from "../../assets/images/airpods.png";
import simgle_mobile from "../../assets/images/simgle-mobile.png";
import double_mobile from "../../assets/images/double-mobile.png";

export const UserActionType = {
  Create: "create",
  Update: "update",
  Delete: "delete",
  Details: "details",
};

export const modalConstants = {
  ModalOpen: "modalOpen",
  SidebaroOpen: "sideBarOpen",
};

export const status = {
  Failed: "failed",
  Success: "success",
};
export const Url = {
  BASE_URL: process.env.REACT_APP_BASE_API_URL,
};

export const localStorageConstants = {
  CURRENT_USER: "currentUser",
};

export const LoginConstants = {
  Login: "login",
  SignUp: "signup",
  Created: "Created",
  CURRENT_USER: "LocalUser",
  LOADING: "Loading",
};

export const globalConstants = {
  SORT: {
    ASC: "asc",
    DESC: "desc",
  },
  SCREEN_BREAKPOINTS: {
    xs: 575,
    sm: 767,
    md: 991,
    lg: 1199,
    xl: 1399,
  },
};

export const accordionList = [
  {
    title: "What is Hadeya?",
    description:
      "Hadeya is a wishlist platform where you can create and share lists or contribute to others' goals.",
  },
  {
    title: "How do I contribute to a wishlist?",
    description:
      "Browse wishlists, choose an item, and make a secure contribution with just a few clicks.",
  },
  {
    title: "Can I create a wishlist for free?",
    description: "Yes! Creating and sharing a wishlist is completely free.",
  },
  {
    title: "How secure is Hadeya?",
    description:
      "We use advanced encryption to ensure all your data and contributions are safe and secure.",
  },
  {
    title: "Can I edit or delete my wishlist?",
    description:
      "Yes, you can easily update or remove items from your wishlist anytime in your account dashboard.",
  },
  {
    title: "What happens if my wishlist doesn't get fully funded?",
    description:
      "You'll still receive any partial contributions made, allowing you to use the funds towards your goal.",
  },
  {
    title: "Can I share my wishlist with others?",
    description:
      "Yes, you can share your wishlist link via social media, or copy link.",
  },
  {
    title: "How can I contact support?",
    description:
      "For assistance, reach out to our support team via social media pages.",
  },
];

export const productList = [
  {
    img: airpods,
    currentAmount: 112,
    targetAmount: 533,
    currency: "KWD",
    title: "IPhone 16 Pro Max",
    description:
      "Experience cutting-edge innovation with the iPhone 16 Pro Max, featuring a stunning display, advanced camera system, and unparalleled...",
  },
  {
    img: simgle_mobile,
    currentAmount: 212,
    targetAmount: 333,
    currency: "KWD",
    title: "IPhone 16 Pro Max",
    description:
      "Experience cutting-edge innovation with the iPhone 16 Pro Max, featuring a stunning display, advanced camera system, and unparalleled...",
  },
  {
    img: double_mobile,
    currentAmount: 111,
    targetAmount: 777,
    currency: "KWD",
    title: "IPhone 16 Pro Max",
    description:
      "Experience cutting-edge innovation with the iPhone 16 Pro Max, featuring a stunning display, advanced camera system, and unparalleled...",
  },
];

export const pieChartData = [
  { name: "Education", value: 1, color: "#D3B8E4" },
  { name: "Gadget", value: 1, color: "#FFCECE" },
  { name: "Clothing", value: 1, color: "#A8E6E0" },
];

export const techWishlistItems = [
  {
    id: 1,
    title: "Tech Dream",
    items: [
      { title: "Iphone 16 Pro Max", image: simgle_mobile },
      { title: "Gel Case", image: double_mobile },
      { title: "Air Pods 3rd Generation", image: airpods },
    ],
    description:
      "Experience cutting-edge innovation with the iPhone 16 Pro Max, featuring a stunning ...",
    totalAmount: 300,
    currentAmount: 100,
    currency: "KWD",
    status: "Public",
    itemCount: "5 items",
  },
  {
    id: 2,
    title: "Tech Dream",
    items: [
      { title: "Iphone 16 Pro Max", image: simgle_mobile },
      { title: "Gel Case", image: double_mobile },
      { title: "Air Pods 3rd Generation", image: airpods },
    ],
    description:
      "Experience cutting-edge innovation with the iPhone 16 Pro Max, featuring a stunning ...",
    totalAmount: 300,
    currentAmount: 50,
    currency: "KWD",
    status: "Pending",
    itemCount: "5 items",
  },
  {
    id: 3,
    title: "Tech Dream",
    items: [
      { title: "Iphone 16 Pro Max", image: simgle_mobile },
      { title: "Gel Case", image: double_mobile },
      { title: "Air Pods 3rd Generation", image: airpods },
    ],
    description:
      "Experience cutting-edge innovation with the iPhone 16 Pro Max, featuring a stunning ...",
    totalAmount: 300,
    currentAmount: 200,
    currency: "KWD",
    status: "Fulfilled",
    itemCount: "5 items",
  },
  {
    id: 4,
    title: "Tech Dream",
    items: [
      { title: "Iphone 16 Pro Max", image: simgle_mobile },
      { title: "Gel Case", image: double_mobile },
      { title: "Air Pods 3rd Generation", image: airpods },
      { title: "Air Pods 3rd Generation", image: airpods },
      { title: "Air Pods 3rd Generation", image: airpods },
      { title: "Air Pods 3rd Generation", image: airpods },
      { title: "Air Pods 3rd Generation", image: airpods },
    ],
    description:
      "Experience cutting-edge innovation with the iPhone 16 Pro Max, featuring a stunning ...",
    totalAmount: 300,
    currentAmount: 0,
    currency: "KWD",
    status: "Pending",
    itemCount: "5 items",
  },
  {
    id: 5,
    title: "Tech Dream",
    items: [
      { title: "Iphone 16 Pro Max", image: simgle_mobile },
      { title: "Gel Case", image: double_mobile },
      { title: "Air Pods 3rd Generation", image: airpods },
      { title: "Air Pods 3rd Generation", image: airpods },
      { title: "Air Pods 3rd Generation", image: airpods },
      { title: "Air Pods 3rd Generation", image: airpods },
      { title: "Air Pods 3rd Generation", image: airpods },
    ],
    description:
      "Experience cutting-edge innovation with the iPhone 16 Pro Max, featuring a stunning ...",
    totalAmount: 300,
    currentAmount: 300,
    currency: "KWD",
    status: "Approved",
    itemCount: "5 items",
  },
];
