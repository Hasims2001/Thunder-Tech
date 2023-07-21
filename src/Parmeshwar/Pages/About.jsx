import React from 'react'
import AboutUs from "../Images/AboutUs.png"
import aboutUs2 from "../Images/aboutUs2.png"
import { Text } from '@chakra-ui/react'
import styled from 'styled-components'
import WorkWithTheBest from "../Images/WorkWithTheBest.jpg"
import LearnGrow from "../Images/LearnGrow.jpg"
import { Footer } from "../Components/Footer"

export const About = () => {
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


      <div className='leaveAmark' style={{backgroundColor: "yellow"}} >
        <div style={{ width: "40%" }}>
          <img src={aboutUs2} alt="" />
        </div>
        <div style={{ textAlign: "center",  }}>
          <Text fontSize='3xl' fontWeight={"bolder"}>Leave a Mark</Text>
          <p style={{ color: "#000", fontWeight: "600", textAlign: 'justify', fontSize: "18px", padding: "10px"}}>We're known more by the impact we create
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
          <p style={{ color: "#000", fontWeight: "600", textAlign: 'justify', fontSize: "18px", padding: "10px"}}>We're known more by the impact we create
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
          <p style={{ color: "#000", fontWeight: "600", textAlign: 'justify', fontSize: "18px", padding: "10px"}}>
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



    </DIV>
  )
}

const DIV = styled.div`
.leaveAmark{
  display: flex;
  width: 80%;
  margin: auto;
  justify-content: space-between;
  margin-bottom: 70px;
}

.leaveAmark > div{

  width: 70%;
  border: 2px solid red;
}
  
`
