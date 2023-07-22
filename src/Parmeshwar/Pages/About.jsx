import React from 'react'
import AboutUs from "../Images/AboutUs.png"
import aboutUs2 from "../Images/aboutUs2.png"
import { Text } from '@chakra-ui/react'
import styled from 'styled-components'
import WorkWithTheBest from "../Images/WorkWithTheBest.jpg"
import LearnGrow from "../Images/LearnGrow.jpg"
import { Footer } from "../Components/Footer"
import { useContext } from 'react'
import { AppContent } from '../Contex/ContextApi'

export const About = () => {

  const {theme} = useContext(AppContent)

  return (
    <DIV>
      <div style={{ marginBottom: "50px" }}>
        <div >
          <img src={AboutUs} alt="AboutUsImage" />
        </div>

        <Text fontSize='lg' fontWeight={"bold"}>
          We are maximisers. We're out on our own journeys to maximise - be the best at what we choose and care about the most - whether it be our impact, voice, potential, ideas, influence, well-being or more. Because when we maximise ourselves in our inclusive teams, Flipkart is able to deliver the best imaginable value for our customers, stakeholders and the planet!
        </Text>

      </div>


      <div className='leaveAmark'  >
        <div style={{ width: "40%" }}>
          <img src={aboutUs2} alt="" />
        </div>
        <div style={{ textAlign: "center", }}>
          <Text fontSize='3xl' fontWeight={"bolder"}>Leave a Mark</Text>
          <p style={{ fontWeight: "600", textAlign: 'justify', fontSize: "18px", padding: "10px" }}>We're known more by the impact we create
            than the titles we hold. Impact that is brought by
            working together on audacious challenges at scale
            with an aim to revolutionize for the Indian customer.
            We believe great ideas can emerge from anywhere
            and must be backed. Our people - backed by our
            culture of end-to-end ownership - have revolutionised
            India's e-commerce sector - several times over!</p>
        </div>
      </div>


      <div className='leaveAmark'>

        <div style={{ textAlign: "center" }}>
          <Text fontSize='3xl' fontWeight={"bolder"}>Work With The Best</Text>
          <p style={{ fontWeight: "600", textAlign: 'justify', fontSize: "18px", padding: "10px" }}>We're known more by the impact we create
            The best people make the best teams. And we put all
            our efforts into finding the right people that fit into
            our high-performing inclusive teams. Everyone has a
            voice on the table and diversity of thoughts, styles
            and actions is celebrated. From a category leader to a
            wishmaster, we are all bound together and guided by
            our values of audacity, bias for action, customer-first,
            integrity and inclusion.</p>
        </div>

        <div style={{ width: "40%" }}>
          <img src={WorkWithTheBest} alt="" />
        </div>
      </div>


      <div className='leaveAmark'>

        <div style={{ width: "40%" }}>
          <img src={LearnGrow} alt="" />
        </div>

        <div style={{ textAlign: "center" }}>
          <Text fontSize='3xl' fontWeight={"bolder"}>Experiment Learn Grow</Text>
          <p style={{fontWeight: "600", textAlign: 'justify', fontSize: "18px", padding: "10px" }}>
            Our journey of building India's biggest unicorn
            start-up has been full of successes, but also failures
            and learning from them. That's why there's calculated
            risk-taking, a high willingness to learn and improvise,
            and a growth orientation built into everything we do.
            Whether it be opening a new warehouse, or making
            our mobile app a bit more consumer friendly, we're
            always experimenting, learning and growing!
          </p>
        </div>


      </div>

      {/* <Footer /> */}

      <div >
        <Text fontSize='4xl' fontWeight={"bolder"} textAlign={"center"}>Values</Text>
      </div>

      <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "30px"}}>

        <div class="card" style={{ background: "rgb(255, 255, 114)"}}>
        <div style={{ alignItems: "center", marginTop: "50px"}}>
        <Text fontSize='2xl' fontWeight={"bolder"} textAlign={"center"} className='values'>Integrity</Text>
        <Text fontSize='1xl' fontWeight={"bolder"} textAlign={"center"} className='values'>we strive to do what is right and do what we say we will do</Text>
        </div>
        </div>


        <div class="card" style={{ background: "rgb(164, 254, 85)"}}>
        <div style={{ alignItems: "center", marginTop: "50px"}}>
        <Text fontSize='2xl' fontWeight={"bolder"} textAlign={"center"} className='values'>Customer First</Text>
        <Text fontSize='1xl' fontWeight={"bolder"} textAlign={"center"} className='values'>we look at the world from our customers point of view</Text>
        </div>
        </div>



        <div class="card" style={{ background: "rgb(255, 203, 106)"}}>
        <div style={{ alignItems: "center", marginTop: "50px"}}>
        <Text fontSize='2xl' fontWeight={"bolder"} textAlign={"center"} className='values'>Inclusion</Text>
        <Text fontSize='1xl' fontWeight={"bolder"} textAlign={"center"} className='values'>we have the uniqueness in everyone, respect differences and a fi=oter a sense of belonging</Text>
        </div>
        </div>
        


        <div class="card" style={{ background: "rgb(115, 249, 249)"}}>
        <div style={{ alignItems: "center", marginTop: "50px"}}>
        <Text fontSize='2xl' fontWeight={"bolder"} textAlign={"center"} className='values'>Audacity</Text>
        <Text fontSize='1xl' fontWeight={"bolder"} textAlign={"center"} className='values'>we think big and take bold bets. we change the paradagim</Text>
        </div>
        </div>


        <div class="card" style={{ background: "rgb(251, 144, 255)"}}>
        <div style={{ alignItems: "center", marginTop: "50px"}}>
        <Text fontSize='2xl' fontWeight={"bolder"} textAlign={"center"} className='values'>Bias for Action</Text>
        <Text fontSize='1xl' fontWeight={"bolder"} textAlign={"center"} className='values'>we strive to do what is right and do what we say we will do</Text>
        </div>
        </div>



        


      
        
        
      </div>



    </DIV>
  )
}

const DIV = styled.div`

background-color: ${props => (props.theme === "lightTheme" ? "#f9f9f9" : "#1d1a1a")};
color: ${props => (props.theme === "lightTheme" ? "#030303" : "#ffffff")};

.leaveAmark{
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  margin-bottom: 70px;
}

.leaveAmark > div{

  width: 70%;
  
}

.card {
  width: 190px;
  padding: 10px;
  height: 254px;
 
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

.values{
  color: black;
}
  
`
