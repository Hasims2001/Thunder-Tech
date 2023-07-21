
import styled from "styled-components"
import specialOffer from "../Images/specialOffer.png"
import gadgets from "../Images/gadgets.png"
import headphones from "../Images/headphone.png"
import smartPhonesOffers from "../Images/smartPhonesOffer.png"
import smartWatchesOffer from "../Images/smartWatchesOffer.png"
import headphonesOfferss from "../Images/headphonesOfferss.png"
import bankOffer from "../Images/bankOffer.png"



import React, { useState, useEffect } from 'react';

export const SlideShowComponent = () => {

    const imageUrls = [
       specialOffer,
        smartPhonesOffers,
        smartWatchesOffer,
       headphonesOfferss,
       bankOffer,
      ];

      const [currentImageIndex, setCurrentImageIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);


    return (
        <DIV>
             <img src={imageUrls[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        </DIV>
    )
}

 const DIV = styled.div`


 `


