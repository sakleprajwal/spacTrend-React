import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    categoryImgUrl: "asset/fashion.png"
  },
  {
    _id: uuid(),
    categoryName: "Women",
    categoryImgUrl: "asset/fashion.png"
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    categoryImgUrl: "asset/fashion.png"
    
  },
  {
    _id: uuid(),
    categoryName: "Home&Living",
    categoryImgUrl: "asset/fashion.png"
  },
  {
    _id: uuid(),
    categoryName: "Beauty",
    categoryImgUrl: "asset/fashion.png"
  },
];
