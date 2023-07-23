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
import { Review } from '../Components/Review'
import { Desktop } from '../Components/Desktop'
import { ReviewSlideShow } from '../Components/ReviewSlideShow'
import { AboutModal } from '../Components/AboutModal'
import { CartComponent } from '../Components/CartComponent'


export const Home = () => {
  const { theme } = useContext(AppContent)

  return (
    <DIV theme={theme}>

      <div className='categoryContainer'>

        <div className='categoryImages smartPhones'>

          <div>
            <img className="image" src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0a0243119f02f7a5.png?q=100" alt="" />
            <h3>Smart Phones</h3>
          </div>

        </div>

        <div className='categoryImages desktops '>

          <div>
            <img className="image" src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/da4491af4ee551d6.png?q=100" alt="" />
            <h3>Desktops </h3>
          </div>


        </div>

        <div className='categoryImages televisions'>

          <div>
            <img className="image" src="https://rukminim2.flixcart.com/fk-p-flap/128/128/image/3a39bad95503b051.png?q=100" alt="" />
            <h3>Televisions</h3>
          </div>

        </div>

        <div className='categoryImages speakers' >

          <div style={{ width: "100%", marginLeft: "25px" }}>
            <img className="image" src="https://rukminim2.flixcart.com/image/416/416/kingqkw0-0/speaker/mobile-tablet-speaker/s/8/i/stone-350-boat-original-imafyebfuaumdezs.jpeg?q=70" alt="" style={{ height: "80px" }} />
            <h3>Speakers</h3>
          </div>

        </div>

        <div className='categoryImages headphones'>

          <div style={{ width: "100%", marginLeft: "50px", marginTop: "10px" }}>
            <img src={headphone} alt="" className="headphone image" />
            <h3>Headphones</h3>
          </div>

        </div>

        <div className='categoryImages smartWatches' >

          <div style={{ width: "100%", marginLeft: "55px" }}>
            <img className="image" src="https://rukminim2.flixcart.com/image/612/612/k1zbssw0pkrrdj/watch-refurbished/u/v/c/c-fs4662-fossil-original-imafhcgdmbvgefhx.jpeg?q=70" alt="" style={{ height: "82px" }} />
            <h3>SmartWatches</h3>
          </div>

        </div>




      </div>

      <div style={{ marginBottom: "50px", marginTop: "30px" }}>
        <SlideShowComponent />
      </div>

      <div style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
        <img src={phoneFlashSale} alt="" />
      </div>


      <div style={{ marginBottom: "50px" }}>
        <FeaturedProducts />
      </div>


      <div style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
        <img src={watchesBanners} alt="" />
      </div>

      <div className='watchComp'>
        <div style={{marginBottom: "20px"}}>
        
        <div style={{paddingLeft: "25px", marginBottom: "10px"}}>
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70"} />
        </div>
       <div>
         <CartComponent text={"Analog watch"} price={"264"}/>
       </div>
        </div>

        <div style={{marginBottom: "20px"}}>
        <div style={{paddingLeft: "35px", marginBottom: "10px"}}>
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/a/k/e/-original-imagnydrewxe5qeg.jpeg?q=70"} />
        </div>
       <div>
       <CartComponent text={"FastTrack"} price={"850"}/>
       </div>
        </div>

       <div style={{marginBottom: "20px"}}>
       <div style={{paddingLeft: "25px", marginBottom: "10px"}}>
       <WatchComp image={"https://rukminim2.flixcart.com/image/2000/2000/xif0q/watch/n/d/w/-original-imagrk9smhqfrndu.jpeg?q=70"} />
       </div>
      <div>
      <CartComponent text={"Royal Blue"} price={"249"}/>
      </div>
       </div>
       
       <div style={{marginBottom: "20px"}}>
       <div style={{paddingLeft: "25px", marginBottom: "10px"}}>
       <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/l/6/7/-original-imagrk9sggffgvdg.jpeg?q=70"} />
       </div>
       <div>
       <CartComponent text={"FastTrack"} price={"499"}/>
       </div>
       </div>
        
        <div style={{marginBottom: "20px"}}>

        <div style={{paddingLeft: "25px", marginBottom: "10px"}}>
        <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/x/d/u/1-jxrm2119-jaxer-men-original-imagr2dwpr2upfqk.jpeg?q=70"} />
        </div>
        
        <div>
        <CartComponent text={"Jaxer"} price={"287"}/>
        </div>
        </div>
       

       <div style={{marginBottom: "20px"}}>
       
       <div style={{paddingLeft: "25px", marginBottom: "10px"}}>
       <WatchComp image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/1/g/-original-imagrdzezm63ms83.jpeg?q=70"} />
       </div>
       <CartComponent text={"Titan"} price={"999"}/>
       </div>
      
      </div>


      <div style={{ marginBottom: "50px" }}>
        <img src={gadgets} alt="" />
      </div>

      <div className='desktopComp'>
        <div>
        <Desktop image={"https://rukminim2.flixcart.com/image/312/312/l0fm07k0/television/7/x/9/-original-imagc8fnpx39evgc.jpeg?q=70"} text={"LG WebOS TV"} price={"13,990"} />
        </div>

        <div>
        <Desktop image={"https://rukminim2.flixcart.com/image/312/312/l2ghgnk0/television/b/h/f/l40m7-eain-mi-original-imagdsdw9gkhscmb.jpeg?q=70"} text={"Mi 5A 100cm Smart TV"} price={"21,999"} />
        </div>

        <div>
        <Desktop image={"https://rukminim2.flixcart.com/image/312/312/l572ufk0/television/e/f/g/32y1-32y1-infinix-original-imagfxczrxjjwxvf.jpeg?q=70"} text={"Infinix Y1 80 cm (32 inch) "} price={"8,499"} />
        </div>

        <div>
        <Desktop image={"https://rukminim2.flixcart.com/image/312/312/l3uhvgw0/television/x/q/x/-original-imageuxkcg2fbdkg.jpeg?q=70"} text={"realme Android TV"} price={"18,999"} />
        </div>

      </div>

      <div className="reviews">

        <div>
          <Review
            name={"Kent Dodds"}
            avatar={"https://bit.ly/kent-c-dodds"}
            review={" 800$ and beats the iPhone 14 pro max, s23 ultra, and the Pixel 7 pro in practically everything."}
            design={"\u2605 \u2605 \u2605 \u2605 \u2605"}
            battery={"\u2605 \u2605 \u2605 \u2605 \u2606"}
            camera={"\u2605 \u2605 \u2605 \u2605 \u2605"}
            image={"https://m.media-amazon.com/images/I/71jvbxyQ2TL._AC_UY327_FMwebp_QL65_.jpg"}
            value={""}
            display={"\u2605 \u2605 \u2606 \u2606 \u2606"}

          />
        </div>


        <div>
          <Review

            name={"Segun Adebayo"}
            avatar={"https://bit.ly/sage-adebayo"}
            review={" 800$ and beats the iPhone 14 pro max, s23 ultra, and the Pixel 7 pro in practically everything."}
            design={"\u2605 \u2605 \u2605 \u2605 \u2605"}
            battery={"\u2605 \u2605 \u2605 \u2606 \u2606"}
            camera={""}
            image={"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/e/b/a/-original-imagrdzfqsjsv4v6.jpeg?q=70"}
            value={"\u2605 \u2605 \u2605 \u2605 \u2605"}
            display={"\u2605 \u2605 \u2606 \u2606 \u2606"}

          />
        </div>


        <div>


          <Review
            name={"Ryan Florence"}
            avatar={"https://bit.ly/ryan-florence"}
            review={"Use an Iphone for a month before planning to buy it over Android.Good product value of money"}
            design={"\u2605 \u2605 \u2606 \u2606 \u2606"}
            battery={"\u2605 \u2605 \u2605 \u2605 \u2606"}
            camera={"\u2605 \u2605 \u2605 \u2605 \u2605"}
            image={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70"}
            value={""}
            display={"\u2605 \u2605 \u2606 \u2606 \u2606"}

          />

        </div>




        <div>
          <Review

            name={"Christian Nwamba"}
            avatar={"https://bit.ly/code-beast"}
            review={"good camera quality preformance is also good , battery backup is quite not good but good value of money"}
            design={"\u2605 \u2606 \u2606 \u2606 \u2606"}
            battery={"\u2605 \u2605 \u2605 \u2605 \u2606"}
            camera={"\u2605 \u2605 \u2605 \u2605 \u2605"}
            image={"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/f/m/-original-imagna3ezkdusyrz.jpeg?q=70"}
            value={""}
            display={"\u2605 \u2605 \u2606 \u2606 \u2606"}

          />

        </div>
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
  flex-wrap: wrap;
}

.desktopComp{
  display: flex;
  justify-content: space-evenly;
  background-color: #ffffff;
  padding: 10px 0px 10px 0px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.desktopComp > div{
  margin-bottom: 20px;
}

.reviews{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 100PX
}

.reviews > div{
  margin-bottom: 20px;
}

@media screen and (max-width: 776px) {
  /* Your styles for small devices go here */
  .smartWatches{
    display: none;
  }

  
  
}

@media screen and (max-width: 568px) {
  /* Your styles for small devices go here */
  .speakers{
    display: none;
  }

  .headphones{
    display: none;
  }

  
  
}

`
