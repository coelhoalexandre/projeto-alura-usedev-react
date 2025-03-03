import Styles from './CartItems.module.css';
import { Product } from '../../common/types/product';
import Typography from '../Typography';
import CartItem from '../CartItem';
import CartEmptyMessage from '../CartEmptyMessage';

type CartItemsProps = {
  cartItems: Product[];
  removeFromCart: (id: number) => void;
};

const CartItems = ({ cartItems, removeFromCart }: CartItemsProps) => {
  return (
    <div className={Styles.cartItems}>
      <Typography
        variantStyle='body-large-bold'
        className={Styles.cartItemTitle}
      >
        Detalhes da compra
      </Typography>
      {cartItems?.length > 0 ? (
        cartItems.map((item) => (
          <CartItem item={item} removeFromCart={removeFromCart} />
        ))
      ) : (
        <CartEmptyMessage />
      )}
    </div>
  );
};

export default CartItems;
