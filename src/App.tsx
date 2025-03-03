import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterConfig from './components/Footer/FooterConfig';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ScrollToTop from './common/utils/ScrollToTop';
import CartPage from './pages/CartPage';
import WithCart from './common/utils/withCart';
import { CartProps } from './common/types/cart';
import Header from './components/Header/';

function App({ cartItems, cartCount, addToCart, removeFromCart }: CartProps) {
  console.log('app');
  return (
    <Router>
      <ScrollToTop />
      <Header onSearch={() => {}} cartCount={cartCount} />
      <Routes>
        <>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/produto/:id'
            element={<ProductDetailsPage addToCart={addToCart} />}
          />
          <Route
            path='/carrinho'
            element={
              <CartPage
                cartItems={cartItems}
                cartCount={cartCount}
                removeFromCart={removeFromCart}
              />
            }
          />
        </>
      </Routes>
      <FooterConfig />
    </Router>
  );
}

export default WithCart(App);
