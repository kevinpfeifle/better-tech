import Image from 'react-bootstrap/Image';

const ProfilePicture = ({img}) => {
    // Hold.

    return (
        <div style={{maxWidth: '5rem'}} className='m-4 mx-auto'> 
            <Image roundedCircle={true} fluid={true} src={img} style={{aspectRatio: '1/1', transform: 'translateZ(0)'}}></Image>
        </div>
    );
};

export default ProfilePicture;