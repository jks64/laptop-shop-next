export interface ProductCardType {
  title: string;
  price: number;
  id: number;
  images: { position: number; image: string }[];
}

export interface ProductType {
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
