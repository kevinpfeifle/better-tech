import { FiFacebook, FiInstagram, FiMail, FiPhone, FiTwitter, FiYoutube} from 'react-icons/fi'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SocialLinks = ({links}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <FiMail style={{fontSize: '1.75rem'}} className='m-2' onClick={() => window.open('mailto:booking@lgcompany.flywheelsites.com')}></FiMail>
                    <a className='text-reset' href='tel:972-532-6500'><FiPhone style={{fontSize: '1.75rem'}} className='m-2'></FiPhone></a>
                    <a className='text-reset' href='https://www.instagram.com/lgandco/'><FiInstagram style={{fontSize: '1.75rem'}} className='m-2'></FiInstagram></a>
                    <a className='text-reset' href='https://www.facebook.com/lgandco/'><FiFacebook style={{fontSize: '1.75rem'}} className='m-2'></FiFacebook></a>
                    <FiTwitter style={{fontSize: '1.75rem'}} className='m-2'></FiTwitter>
                    <FiYoutube style={{fontSize: '1.75rem'}} className='m-2'></FiYoutube>
                </Col>
            </Row>
        </Container>
    );
};

export default SocialLinks;