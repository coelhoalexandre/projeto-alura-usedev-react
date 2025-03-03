import { useEffect, useState } from 'react';
import ProductServiceInterface from '../../../interfaces/productService.interface';
import { Product } from '../../../types/product';

const useFetchProducts = (productService: ProductServiceInterface) => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);

        const productsData = await productService.fetchProducts();
        setProducts(productsData);
      } catch (error) {
        setError('Erro ao carregar produtos');
      }

      setIsLoading(false);
    };

    fetchProducts();
  }, [productService]);

  return { products, isLoading, error };
};

export default useFetchProducts;
