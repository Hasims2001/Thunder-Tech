import React from 'react'
import Theme from '../../Theme'
import styled from "styled-components"
import { useContext } from 'react'
import { AppContent } from '../Contex/ContextApi'
import { Temp } from '../../hasim/Temp'
import headphone from "../Images/headphone.png"
import specialOffer from "../Images/specialOffer.png"
import { ImageCardComp } from '../Components/ImageCardComp'
import { SlideShowComponent } from '../Components/SlideShowComponent'
import { FeaturedProducts } from '../Components/FeaturedProducts'
import { Text } from '@chakra-ui/layout'
import phoneFlashSale from "../Images/phoneFlashSale.png"
import watchesBanners from "../Images/watchesBanners.png"
import { WatchComp } from '../Components/WatchComp'
import gadgets from "../Images/gadgets.png"

export const Home = () => {
  const {theme} = useContext(AppContent)

  return (
    <DIV theme={theme}>

      <div className='categoryContainer'>

        <div className='categoryImages'>

        <div>
        <img className="image" src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0a0243119f02f7a5.png?q=100" alt="" />
        <h3>Smart Phones</h3>
        </div>

        </div>

        <div className='categoryImages'>

        <div>
        <img className="image" src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/da4491af4ee551d6.png?q=100" alt="" />
        <h3>Smart Watches </h3>
        </div>
        

        </div>

        <div className='categoryImages'>

        <div>
        <img className="image" src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/3a39bad95503b051.png?q=100" alt="" />
        <h3>Televisions</h3>
        </div>

        </div>

        <div className='categoryImages' >

        <div style={{width: "100%", marginLeft: "25px"}}>
        <img className="image" src="https://rukminim2.flixcart.com/image/416/416/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70" alt="" style={{height: "80px"}} />
        <h3>Speakers</h3>
        </div>

        </div>

        <div className='categoryImages'>

        <div style={{width: "100%", marginLeft: "50px", marginTop: "10px"}}>
        <img src={headphone} alt="" className="headphone image" />
        <h3>Headphones</h3>
        </div>

        </div>

        <div className='categoryImages' >

        <div style={{width: "100%", marginLeft: "55px"}}>
        <img className="image" src="https://rukminim2.flixcart.com/image/612/612/k1zbssw0pkrrdj/watch-refurbished/u/v/c/c-fs4662-fossil-original-imafhcgdmbvgefhx.jpeg?q=70" alt="" style={{height: "82px"}} />
        <h3>Speakers</h3>
        </div>

        </div>

        

        
      </div>

      {/* <div >
        <img src="https://cdn.mos.cms.futurecdn.net/nfp35ACuuzXXDUn7tFixDE-1200-80.jpg.webp" alt="" />
      </div> */}

      {/* <div >
        <img src={specialOffer} alt=""  />
      </div> */}

      <div style={{marginBottom: "50px"}}>
        <SlideShowComponent />
      </div>

      <div style={{width: "80%", margin: "auto", marginBottom: "50px"}}>
        <img src={phoneFlashSale} alt="" />
      </div>
        

     <div style={{marginBottom: "50px"}}>
     <FeaturedProducts />
     </div>


     <div style={{width: "80%", margin: "auto", marginBottom: "50px"}}>
        <img src={watchesBanners} alt="" />
      </div>

      <div className='watchComp'>
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70"} />
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/a/k/e/-original-imagnydrewxe5qeg.jpeg?q=70"} />
        <WatchComp image={"https://rukminim2.flixcart.com/image/2000/2000/xif0q/watch/n/d/w/-original-imagrk9smhqfrndu.jpeg?q=70"} />
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/l/6/7/-original-imagrk9sggffgvdg.jpeg?q=70"} />
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/x/d/u/1-jxrm2119-jaxer-men-original-imagr2dwpr2upfqk.jpeg?q=70"} />
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/1/g/-original-imagrdzezm63ms83.jpeg?q=70"} />
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/f/l/c/-original-imagz4wu525dxzmg.jpeg?q=70"} />
      </div>


      <div style={{marginBottom: "50px"}}>
        <img src={gadgets} alt="" />
      </div>


      {/* <div>
      <ImageCardComp />
      </div> */}

      
     
    </DIV>
  )
}

const DIV = styled.div`
margin-top: 80px;

.categoryContainer{
  display: flex;
  border-bottom:${props => (props.theme === "lightTheme" ? "2px solid #131313" : "2px solid #fff")};
  padding-bottom: 10px;
  margin-bottom: 20px;



}



.categoryImages{
  /* border: 2px solid black; */
  display: flex;
  justify-content: center;
}

.categoryImages:hover{
  -ms-transform: scale(1.5); /* IE 9 */
  -webkit-transform: scale(1.5); /* Safari 3-8 */
  transform: scale(1.1); 
  cursor: pointer;
}

.categoryImages > div{
  width: 60%;
}

.image{
  width: 100%;
  border-radius: 80px;
  border: ${props => (props.theme === "lightTheme" ? "" : "2px solid #fff")};
}

.headphone{
  height: 70px;
  background-color: ${props => (props.theme === "lightTheme" ? "" : "#fff0f0")};;

}

h3{
  text-align: center;
  color:  ${props => (props.theme === "lightTheme" ? "" : " #fff")};;
}

.watchComp{
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

`
