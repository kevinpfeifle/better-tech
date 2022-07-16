import Stack from 'react-bootstrap/Stack';

import ItemCard from './components/ItemCard';

import StoreNavbar from './components/StoreNavbar';

const Storefront = () => {

    let images = [
        'store/conditioner.png',
        'store/hairbrush.png',
        'store/hairspray.png',
        'store/shampoo.png',
        'salon1.jpeg'
    ];
    
    return (
        <div style={{paddingTop: '3rem'}}>
            <StoreNavbar storeName={'Beauty Products'}></StoreNavbar>
            <Stack gap={2} className='m-3' style={{position: 'relative', zIndex: 1}}>
                <Stack direction='horizontal' gap={2}>
                    <ItemCard itemImgs={images} itemTitle='Product' itemPrice='$35.00' itemMFG='Company' itemDescription='A product for you to purchase, we promise you will love it. Warning: Non-refundableA product for you to purchase, we promise you will love it. Warning: Non-refundableA product for you to purchase, we promise you will love it. Warning: Non-refundableA product for you to purchase, we promise you will love it. Warning: Non-refundableA product for you to purchase, we promise you will love it. Warning: Non-refundableA product for you to purchase, we promise you will love it. Warning: Non-refundableA product for you to purchase, we promise you will love it. Warning: Non-refundableA product for you to purchase, we promise you will love it. Warning: Non-refundableA product for you to purchase, we promise you will love it. Warning: Non-refundable.'></ItemCard>
                    <ItemCard itemImgs={[images[1]]} itemTitle='Hairbrush' itemPrice='$15.00' itemMFG='Wet' itemDescription='The best hairbrush we have ever seen, we swear.'></ItemCard>
                </Stack>
                <Stack direction='horizontal' gap={2}>
                    <ItemCard itemImgs={[images[2]]} itemTitle='Hairspray' itemPrice='$20.00'itemMFG='TRESemme' itemDescription='Some spray for your hair.'></ItemCard>
                    <ItemCard itemImgs={[images[3]]} itemTitle='Shampoo' itemPrice='$30.00' itemMFG='TRESemme' itemDescription='Hair care product. Definetly not the poo of a dog named Sham.'></ItemCard>
                </Stack>
                <Stack direction='horizontal' gap={2}>
                    <ItemCard itemImgs={[images[1]]} itemTitle='Hairbrush' itemPrice='$15.00' itemMFG='Wet' itemDescription='It is an okay hairbrush. Honestly, we would buy the first one.'></ItemCard>
                    <ItemCard itemImgs={[images[0]]} itemTitle='Conditioner' itemPrice='$35.00' itemMFG='TRESemme' itemDescription='It is just fancier shampoo; it came from a purebred, unlike Sham. Who said that? Certainly not us.'></ItemCard>
                </Stack>
            </Stack>
        </div>
    );
};

export default Storefront;