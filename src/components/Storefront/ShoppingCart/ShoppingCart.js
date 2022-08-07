import CartNavbar from './components/CartNavbar';
import CartItem from './components/CartItem';

import { useSelector, useDispatch } from 'react-redux';

const ShoppingCart = () => {

    const itemCount = useSelector((state) => state.shop.cart.totalCount);
    const items = useSelector((state) => state.shop.cart.items);
    const dispatch = useDispatch();

    return (
        <div style={{paddingTop: '3rem'}}>
            <CartNavbar></CartNavbar>
            <h1 className='m-3 text-start'>Shopping Cart</h1>
            <p className='m-3 text-start'>{itemCount} items</p>
            <hr></hr>
            {
                (Object.entries(items).length > 0) ? Object.entries(items).map((item) => (
                    <CartItem key={item[1].name} itemId={item[0]} itemName={item[1].name} itemImage={item[1].image} itemPrice={item[1].price} itemCount={item[1].count}></CartItem>
                )) : 
                <h1>Your cart is empty! </h1>
            }
        </div>  
    );
};

export default ShoppingCart