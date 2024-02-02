export interface ProductCardType {
  title: string;
  price: number;
  id: number;
  images: { position: number; image: string }[];
}

export interface ProductFetchType {
  title: string;
  id: number;
  price: number;
  images: { position: number; image: string }[];
  description: string;
  characteristicScreen: string;
  characteristicMemory: string;
  characteristicProcessor: string;
  characteristicStorage: string;
  characteristicGraphics: string;
  characteristicBatery: string;
  brand: string;
  createdAt: string;
}

export interface ProductType extends Omit<ProductFetchType, 'images'> {
  images: {
    imageName: string;
    imagePosition: number;
    imageUrl: string;
  }[];
}

export type SizesType = 'small' | 'super-large' | 'large';
// const slidesToShow = size === 'small' ? 4 : size === 'super-large' ? 3 : 4;
