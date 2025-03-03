import { PRODUCTS_BASE_URL } from '../../constants/endpoints';
import HttpInterface from '../../interfaces/http.interface';
import ProductServiceInterface from '../../interfaces/productService.interface';
import { Product } from '../../types/product';

const ProductService = (http: HttpInterface): ProductServiceInterface => {
  return {
    fetchProducts: async () => {
      try {
        const response = await http.get<{ products: Product[] }>(
          PRODUCTS_BASE_URL
        );

        return response.products;
      } catch (err) {
        throw new Error('Erro ao buscar produtos');
      }
    },
  };
};

export default ProductService;
