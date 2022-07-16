import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';

const ImageModal = ({images}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{height: '100%', width:'100%'}}>
            <div className='d-flex align-items-center justify-content-center' style={{height: '100%', width:'100%'}} onClick={handleShow}>
                Menu
            </div>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel variant='dark'controls={true} interval={null} indicators={true} keyboard={true}>
                        {
                            images.map((img) => (
                                <Carousel.Item>
                                    <Image fluid={true} src={img} style={{height:'100%', transform: 'translateZ(0)'}}></Image>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default ImageModal;