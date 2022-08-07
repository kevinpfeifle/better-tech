import Image from 'react-bootstrap/Image';
import Stack from 'react-bootstrap/Stack';
import CountAdjustor from '../../../ui/CountAdjustor';
import { useSelector, useDispatch } from 'react-redux'

import { addItemToCart, removeItemFromCart } from '../../../../actions/shopActions';

const CartItem = ({itemId, itemName, itemImage, itemPrice, itemCount, itemModifier=''}) => {
    const updateCount = (newCount) => {
        let item = {
            itemId: itemId,
            itemCount: 1
        };
        (newCount > itemCount) ? dispatch(addItemToCart(item)) : dispatch(removeItemFromCart(item));
    };

    const dispatch = useDispatch();
    return (
        <div className='m-3 text-start'>
            <Stack direction='horizontal' gap={3} style={{height:'8rem'}}>
                <Image fluid={true} src={itemImage} style={{height:'100%', width: '30%', transform: 'translateZ(0)'}}></Image>
                <Stack direction='vertical' gap={1} style={{position:'relative'}}>
                    <h3>{itemName}</h3>
                    <h5>{itemModifier}</h5>
                    <Stack direction='horizontal' gap={3} style={{position:'absolute', bottom:0}}>
                        <p>{itemPrice}</p>
                        <div style={{float:'right'}} >
                            <CountAdjustor count={itemCount} incrementFunc={updateCount} decrementFunc={updateCount}></CountAdjustor>
                        </div>
                    </Stack>
                </Stack>
            </Stack>
            <hr></hr>
        </div>
    );
};

export default CartItem;