export interface IBid {
  id: number;
  name: string;
  createdAt: IDate;
  updatedAt: IDate;
  description: string;
  priceStart: number;
  stepBid: number;
  priceWin: number;
  reservePrice: number;
  category: ICategory;
}
export interface ICart {
  id: number;
  user: IUser;
  isActive: boolean;
  createdAt: IDate;
  updatedAt: IDate;
  cartDetails: ICartDetail[];
}
export interface ICartDetail {
  id: number;
  cart: ICart;
  product: IProduct;
  quantity: number;
  createdAt: IDate;
  updatedAt: IDate;
}
export interface ICategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  properties: ICategoryProperty[];
  products: IProduct[];
  createdAt: IDate;
  updatedAt: IDate;
}
export interface IComment {
  id: number;
  content: string;
  productId: number;
  product: IProduct;
  parentComment: IComment;
  replies: IComment[];
  user: IUser;
  createdAt: IDate;
  updatedAt: IDate;
}
export interface IFeedback {
  id: number;
  rating: number;
  content: string;
  createdAt: IDate;
  updatedAt: IDate;
}
export interface INotification {
  id: number;
  notification_token: INotificationToken;
  title: string;
  body: Iany;
  created_by: string;
  status: string;
}
export interface INotificationToken {
  id: number;
  user: IUser;
  device_type: string;
  notification_token: string;
  status: string;
}
export interface IOrderDetail {
  id: number;
  order: IOrder;
  product: IProduct;
  quantity: number;
  price: number;
  createdAt: IDate;
  updatedAt: IDate;
}
export interface IOrder {
  id: number;
  user: IUser;
  status: string;
  createdAt: IDate;
  updatedAt: IDate;
  orderAddress: IOrderAddress;
  orderUserInfo: IOrderUserInfo;
  store: IStore;
  orderDetails: IOrderDetail[];
  isApplyUserSavePoints: boolean;
  totalAmount: number;
}
export interface IProduct {
  id: number;
  upc: string;
  name: string;
  price: IProductPrice;
  isOnSale: boolean;
  fullDescription: string;
  shortDescription: string;
  nutritionInformations: string;
  category: ICategory;
  properties: { [key: string]: string | number | boolean };
  images: Istring[];
  thumbnail: string;
  isAvailable: boolean;
  buyCount: number;
  storeProducts: IStoreProduct[];
  comments: IComment[];
  createdAt: IDate;
  updatedAt: IDate;
  orderDetails: IOrderDetail[];
}
export interface IStoreProduct {
  id: number;
  product: IProduct;
  store: IStore;
  price: IProductPrice;
  inventory: number;
}
export interface IStore {
  id: number;
  name: string;
  storeCode: number;
  supportDelivery: boolean;
  supportPickup: boolean;
  openTime: number;
  closeTime: number;
  lng: number;
  storeProducts: IStoreProduct[];
  staffs: IUser[];
  orders: IStore[];
}
export interface ITenant {
  id: number;
  name: string;
  fullDescription: string;
  slogan: string;
  email: string;
  companyPhoneNumber: string;
  companyLegalName: string;
  logoUrl: string;
  primaryColorScheme: string;
}
export interface IUserDevice {
  id: number;
  deviceToken: string;
  user: IUser;
}
export interface IUser {
  id: number;
  username: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  savePoints: number;
  email: string;
  password: string;
  isActive: boolean;
  cart: ICart;
  isVerified: boolean;
  role: IUserRole;
  createdAt: IDate;
  updatedAt: IDate;
  devices: IUserDevice[];
  store: IStore;
  comments: IComment[];
  orders: IOrder[];
}
