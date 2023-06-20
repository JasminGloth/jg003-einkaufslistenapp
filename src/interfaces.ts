export interface IDepartment {
  id: number;
  name: string;
}
export interface IProduct {
  id: number;
  name: string;
  departmentId: number;
  priceKaufland: number;
  priceLidl: number;
  priceAldi: number;
}
export interface IBuyItem {
  id: number;
  productId: number;
  amount: number;
}
