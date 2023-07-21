import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, IconButton, Image, Button } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { CartComponent } from './CartComponent';
import styled from "styled-components"

export const Review = ({ name, avatar, review, image, design, battery, camera, display, value }) => {
  return (
    <DIV>
      <Card maxW='xs'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src={avatar} />

              <Box>
                <Heading size='sm'>{name}</Heading>

              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text>
            {review}
          </Text>
        </CardBody>
        {/* <Image
    objectFit='cover'
    src='https://m.media-amazon.com/images/I/71DCZOdq92S._AC_UY327_FMwebp_QL65_.jpg'
    alt='Chakra UI'
  /> */}
        <div class="container">
          <div class="card_box">
            {/* <span></span> */}

            <img src={image} alt="" />
          </div>
        </div>


        <div style={{ textAlign: "center" }}>
          <div>
            <h3>Design : </h3>

            <label>{design}</label>
          </div>

          <div>
            <h3>Battery : </h3>

            <label>{battery}</label>
          </div>

          {/* <div>
            {
              camera ? <h3>Camera </h3>

              <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>  : <h3>Camera</h3>

              <label>{"\u2605 \u2605 \u2605 \u2605 \u2605"}</label>
            }
          </div> */}
          {
            camera === "" ? <div>
              <h3>Value : </h3>

              <label>{value}</label>
            </div> : <div>
              <h3>Camera </h3>

              <label>{camera}</label>
            </div>
          }

          <div>
            <h3>Display : </h3>

            <label>{display}</label>
          </div>
        </div>

        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
            Comment
          </Button>

        </CardFooter>
      </Card>
    </DIV>
  )
}

const DIV = styled.div`
  .container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card_box {
  width: 200px;
  height: 250px;
  border-radius: 20px;
  background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);
  position: relative;
  cursor: pointer;
  transition: all .3s;
}

.card_box:hover {
  transform: scale(0.9);
}

.card_box span {
  position: absolute;
  overflow: hidden;
  width: 150px;
  height: 150px;
  top: -10px;
  left: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card_box span::before {
  content: 'Premium';
  position: absolute;
  width: 150%;
  height: 40px;
  background-image: linear-gradient(45deg, #ff6547 0%, #ffb144  51%, #ff7053  100%);
  transform: rotate(-45deg) translateY(-20px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  box-shadow: 0 5px 10px rgba(0,0,0,0.23);
}

.card_box span::after {
  content: '';
  position: absolute;
  width: 10px;
  bottom: 0;
  left: 0;
  height: 10px;
  z-index: -1;
  box-shadow: 140px -140px #cc3f47;
  background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
}

.img{
    border-radius: 10px;
}

h3{
display: inline;
}

`
