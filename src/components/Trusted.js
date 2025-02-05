import React, { Fragment, memo } from 'react'
import { CardBody, Card } from 'reactstrap'
import client1 from '../assets/images/client1.jpg'
import client2 from '../assets/images/client2.png'
import client3 from '../assets/images/client3.png'
import client4 from '../assets/images/client4.png'
import client5 from '../assets/images/client5.jpg'
import client6 from '../assets/images/client6.png'
import client7 from '../assets/images/client7.jpg'
import client8 from '../assets/images/client8.png'
import client9 from '../assets/images/client9.png'
console.log(client1);
// import client10 from '@src/assets/images/client/10.png'
// import client11 from '@src/assets/images/client/11.png'
// import client12 from '@src/assets/images/client/12.png'
// import client13 from '@src/assets/images/client/13.png'
// import client14 from '@src/assets/images/client/14.png'
// import client15 from '@src/assets/images/client/15.png'
// import client16 from '@src/assets/images/client/16.png'
// import client17 from '@src/assets/images/client/17.png'
// import client18 from '@src/assets/images/client/18.png'
// import client19 from '@src/assets/images/client/19.png'
// import client20 from '@src/assets/images/client/20.png'
// import client21 from '@src/assets/images/client/21.png'
// import client22 from '@src/assets/images/client/22.png'
// import client23 from '@src/assets/images/client/23.png'
// import client24 from '@src/assets/images/client/24.png'
// import client25 from '@src/assets/images/client/25.png'
// import client26 from '@src/assets/images/client/26.png'

const images = [
    { id: 1, src: client1, alt: 'Image 1' },
    { id: 2, src: client2, alt: 'Image 2' },
    { id: 3, src: client3, alt: 'Image 3' },
    { id: 4, src: client4, alt: 'Image 4' },
    { id: 5, src: client5, alt: 'Image 5' },
    { id: 6, src: client6, alt: 'Image 6' },
    { id: 7, src: client7, alt: 'Image 7' },
    { id: 8, src: client8, alt: 'Image 8' },
    { id: 9, src: client9, alt: 'Image 9' }
    // { id: 10, src: client10, alt: 'Image 10' },
    // { id: 11, src: client11, alt: 'Image 11' },
    // { id: 12, src: client12, alt: 'Image 12' },
    // { id: 13, src: client13, alt: 'Image 13' },
    // { id: 14, src: client14, alt: 'Image 14' },
    // { id: 15, src: client15, alt: 'Image 15' },
    // { id: 16, src: client16, alt: 'Image 16' },
    // { id: 17, src: client17, alt: 'Image 17' },
    // { id: 18, src: client18, alt: 'Image 18' },
    // { id: 19, src: client19, alt: 'Image 19' },
    // { id: 20, src: client20, alt: 'Image 20' },
    // { id: 21, src: client21, alt: 'Image 21' },
    // { id: 22, src: client22, alt: 'Image 22' },
    // { id: 23, src: client23, alt: 'Image 23' },
    // { id: 24, src: client24, alt: 'Image 24' },
    // { id: 25, src: client25, alt: 'Image 25' },
    // { id: 26, src: client26, alt: 'Image 26' }

]

const ClientCarousel = () => {
 
    return (
        <Fragment>
            <div className="marquee-container">
                <div className="marquee-content mb-2">
                    {images.map((image, index) => (
                        <Card key={index} className="mx-1 mt-2">
                            <CardBody className="marquee_276">
                                <img src={image.src} alt={image.alt} className="marquee-image mx-2" />
                            </CardBody>
                        </Card>
                    ))}
                    {images.map((image, index) => (
                        <Card key={index + images.length} className="mx-1 mt-2">
                           <CardBody className="marquee_276">
                                <img src={image.src} alt={image.alt} className="marquee-image mx-2" />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default memo(ClientCarousel)
