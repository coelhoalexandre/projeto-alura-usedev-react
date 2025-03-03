import { Product } from '../types/product';

export default interface ProductServeInterface {
  fetchProducts: () => Promise<Product[]>;
}
