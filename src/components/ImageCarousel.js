import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

const ImageCarousel = ({images, interval}) => {
    return (
        <div>
            <Carousel controls={true} interval={interval} variant='dark'>
                {
                    images.map((img) => (
                        <Carousel.Item key={img}>
                            <Image fluid={true} src={img} style={{aspectRatio: '1/1', transform: 'translateZ(0)', objectFit: 'cover', width:'100%'}}></Image>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
};

export default ImageCarousel;