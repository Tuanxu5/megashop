export interface ListProduct {
  id?: number;
  title?: string;
  image?: string;
  price?: number;
  category?: string;
  rating?: object;
  description?: string;
}

//interface DataProductCart emits from 
export interface DataProductCart {
  qualityProduct: number;
  pricePrice: number;
}

//interface ItemCart
export interface ItemCart {
  idProduct?: number;
  qualityProduct: number;
  pricePrice: number;
  dimensionProduct: string
}
export interface ItemCartDetail {
  idProduct?: number;
  qualityProduct: number;
  pricePrice?: number;
  dimensionProduct?: string;
  imageProduct?: string;
  titleNameProduct?: string;
}