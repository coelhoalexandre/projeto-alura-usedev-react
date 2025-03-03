import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Styles from './ProductDetailsPage.module.css';
import Typography from '../../components/Typography';
import ProductDetail from '../../components/ProductDetail';
import { PRODUCTS_BASE_URL } from '../../common/constants/endpoints';
import { Product } from '../../common/types/product';
import StatusHandler from '../../common/utils/statusHandler';
import BackgroundBanner from '../../components/BackgroundBanner';
import useFetch from '../../common/hooks/useFetch';

type ProductDetailsPageProps = {
  addToCart: (product: Product) => void;
};

function ProductDetailsPage({ addToCart }: ProductDetailsPageProps) {
  const { id } = useParams<{ id: string }>(); // Pega o ID da URL
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Faz a requisição para buscar o produto com base no ID
  const {
    data: productData,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useFetch<{ products: Product[] }>(PRODUCTS_BASE_URL, 'produtos');

  useEffect(() => {
    const foundProduct = productData?.products.find(
      (value) => value.id.toString() === id
    );
    if (foundProduct) setProduct(foundProduct);
    else setError('Produto não encontrado.');
  }, [id, productData?.products]);

  useEffect(() => {
    setError(productsError);
  }, [productsError]);

  return (
    <>
      <BackgroundBanner backgroundImage='https://raw.githubusercontent.com/gss-patricia/use-dev-assets/refs/heads/main/banner-secoes.png' />
      <main className='container'>
        <section>
          <div className={Styles.productContainer}>
            <Typography variant='h4'>Detalhes do Produto</Typography>

            <StatusHandler isLoading={isLoadingProducts} error={error}>
              {product ? (
                <ProductDetail
                  id={product.id}
                  title={product.label}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageSrc}
                  colors={product.colors}
                  addToCart={addToCart}
                />
              ) : (
                <p>Produto não encontrado.</p>
              )}
            </StatusHandler>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetailsPage;
