import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import img1 from '../assets/chai-7916889_1920.jpg'
import img2 from '../assets/kid-8419485_1920.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"


function Servies() {
    return (
        <div className='servies'>
           <Carousel
           infiniteLoop
           autoPlay
           showStatus={false}
           showArrows={false}
           interval={1000}
           showThumbs={false}
        //    showIndicators={false}
           >
            <div>
                <img src={img1}  width={50} height={300} alt="" />
                <p  className='legend'>Full Stack</p>
            </div>

            <div>
                <img src={img2} width={50} height={300}  alt="" />
                <p className='legend'>Peer - to -Peer  Support</p>
            </div>

           </Carousel>
        </div>
    );
}

export default Servies;