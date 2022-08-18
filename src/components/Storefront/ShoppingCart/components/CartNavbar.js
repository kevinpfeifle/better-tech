import { AiOutlineShopping, AiOutlineArrowLeft} from 'react-icons/ai'

import Stack from 'react-bootstrap/Stack';
import { NavLink } from 'react-router-dom'

const StoreNavbar = ({storeName}) => {
    
    return (
        <div className='bg-light' style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 2}}>
            <Stack direction="horizontal" gap={0}>
                <NavLink to='/storefront' style={{textDecoration:'none', color:'black'}}><AiOutlineArrowLeft className="m-2" style={{fontSize: '1.5rem'}} /></NavLink>
                <p className="m-2 mx-auto fw-bold">[Progress graphic to go here]</p>
            </Stack>
        </div>
    );
};

export default StoreNavbar;