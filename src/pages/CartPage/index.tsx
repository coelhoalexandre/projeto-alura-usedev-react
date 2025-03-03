import Typography from '../../components/Typography';
import Styles from './CartPage.module.css';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../common/types/product';
import CartItems from '../../components/CartItems';
import CartSummary from '../../components/CartSummary';

type CartPageProps = {
  cartItems: Product[];
  cartCount: number;
  removeFromCart: (id: number) => void;
};

const CartPage = ({ cartItems, cartCount, removeFromCart }: CartPageProps) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const freight = cartItems.length > 0 ? 8 : 0;

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  const handlePayment = () => console.log('pagamento');

  return (
    <main className='container'>
      <div className={Styles.cartTitle}>
        <Typography variant='h4'>Carrinho de Compras</Typography>
      </div>

      <section className={Styles.cartPage}>
        <CartItems cartItems={cartItems} removeFromCart={removeFromCart} />

        <CartSummary
          itemCount={cartCount}
          total={total}
          freight={freight}
          handleRedirect={handleRedirect}
          onPayment={handlePayment}
        />
      </section>
    </main>
  );
};

export default CartPage;
