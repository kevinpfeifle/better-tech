import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfilePicture from './ProfilePicture';
import SocialLinks from './SocialLinks';
import ContactCard from './ContactCard';
import ImageCarousel from './ImageCarousel';
import FAQModal from './FAQModal';
import ImageModal from './ImageModal';
import TipJar from './TipJar';
import { NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'
// import ProgressBar from './ProgressBar';

// Opacity/blur on the background whenever a modal is already open -- ImageModel does it already! :D
// Store items will popups and not pages.
// Store front needs a navbar at the top with a back button and a cart button.
// Store front tiles needs to be fixed.
// Cart should be a page, check if it can be a popup.
// I HAVE THE CALENDLY STUFF, STOP ASKING.
// Reduce the spacing between contact card the HR. Try 50%
// Fix the weird iphone oval thing

// Get the products page up the the cart part by next meeting.

/**
 * Component page that will represent the static MVP-One "mini-site" for reference for future development.
 * Will pull in created components on a static and unchanging site layout with no customization or tools.
 * @param {object} props 
 * @returns the whole MVP One "mini site" as a component.
 */
const MVPOne = ({}) => {
    // Content here..

    let profileImage = '/lauren_profile_picture.png';
    let images = [
        '/salon1.jpeg',
        '/salon2.jpeg',
        '/salon3.jpeg',
        '/salon4.jpeg',
        '/salon5.jpeg',
        '/salon6.jpeg',
        '/salon7.jpeg',
        '/salon8.jpeg',
        '/salon9.jpeg',
        '/salon10.jpeg',
        '/salon11.jpeg',
        '/salon12.jpeg',
        '/salon13.jpeg',
        '/salon14.jpeg',
        '/salon15.jpeg'
    ];
    let menuImages = [
        'menu1.jpeg',
        'menu2.jpeg',
        'menu3.jpeg'
    ];
    let tipImage = '/piggybankSky.png';

    return (
        <div>
            {/* <ProgressBar></ProgressBar> */}
            <Container>
                <Row>
                    <Col>
                        <ProfilePicture img={profileImage}></ProfilePicture>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>LG & Co.</h3>
                        <h6><em>Hair Salon</em></h6>
                    </Col>
                </Row>
                <Row>
                    <Col className='mx-auto col-10'>
                        <pre className='text-wrap'>
                            we specialize in creating a holistic,
                            luxury beauty experience
                        </pre>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SocialLinks></SocialLinks>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ContactCard></ContactCard>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr></hr>
                    </Col>
                </Row>
                </Container>
                <Stack gap={2} className='m-2'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Our Beauty Philosophy</Accordion.Header>
                            <Accordion.Body>
                                <p className='text-wrap'><strong>“You’re Not Her You’re You”</strong></p>

                                <p className='text-wrap'>We provide a safe and welcoming atmosphere that facilitates a communal gathering of women who support, encourage and celebrate each other.</p>

                                <p className='text-wrap'><strong>We are motivated and driven by beauty that transcends hair alone and treasure the sacred collision of the external and internal beauty of a woman.</strong></p>

                                <p className='text-wrap'>“One of the most beautiful things to behold is when women do not see other women as their competition or object of comparison, but rather a powerful source of strength in their lives. We are each uniquely gifted, uniquely made, and stronger when we stand together.” - Lauren</p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Stack direction='horizontal' gap={2} style={{height: '100%'}}>
                        <div className='border d-flex align-items-center justify-content-center' style={{ width: '50%', height: '5rem'}}>
                            <NavLink to='/storefront' style={{textDecoration:'none', color:'black'}}>Products</NavLink>
                        </div>
                        <div className='border d-flex align-items-center justify-content-center' style={{width: '50%', height: '5rem'}}>
                            <ImageModal images={menuImages}></ImageModal>
                        </div>
                    </Stack>

                    <Stack gap={2}>
                        <Stack direction='horizontal' gap={2}>
                            <Stack gap={2}>
                                <div className='border d-flex align-items-center justify-content-center' style={{height:'50%'}}>
                                    Book
                                </div>
                                <Stack  direction='horizontal' gap={2} style={{height: '50%'}}>
                                    <div className='border d-flex align-items-center justify-content-center' style={{height: '100%', width: '50%'}}>
                                        <FAQModal></FAQModal>
                                    </div>
                                    <div className='border d-flex align-items-center justify-content-center' style={{height: '100%', width: '50%'}}>
                                        <TipJar img={tipImage}></TipJar>
                                    </div>
                                </Stack>
                            </Stack>
                            <div className='border d-flex align-items-center justify-content-center' style={{height: '100%', width: '49%'}}>
                                <ImageCarousel images={images}></ImageCarousel>
                            </div>
                            
                        </Stack>
                    </Stack>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Salon Tour</Accordion.Header>
                            <Accordion.Body style={{position: 'relative', paddingTop: '56.25%'}}>
                                <ReactPlayer url='https://youtu.be/MGg-IZJaLfU' width='95%' height='100%' style={{position: 'absolute', top:'0', left:'.5rem', marginTop:'.5rem'}} />
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Stack>
                <p className='p-3' style={{fontSize: '.75rem'}}>create your own <strong>bettersite</strong></p>
        </div>
    );
};

export default MVPOne;