// laptops.js or laptops.ts
import axios from 'axios';
import { links } from '../../links/PROD-URLS';
import { ProductType } from '@/types/types';

const fetchLaptops = async (): Promise<ProductType[]> => {
  try {
    const response = await axios.get(links.getLaptops);
    const data = response.data;

    const productListWithImages: ProductType[] = data.map(
      (product: ProductType) => {
        if (typeof product === 'object' && product.hasOwnProperty('images')) {
          const productWithImages = { ...product };
          productWithImages.images = product.images.map((image) => ({
            position: image.imagePosition,
            image: image.imageUrl,
          }));
          return productWithImages;
        }
        return product;
      }
    );

    return productListWithImages;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // rethrow the error so it can be caught by the caller
  }
};

export default fetchLaptops;
