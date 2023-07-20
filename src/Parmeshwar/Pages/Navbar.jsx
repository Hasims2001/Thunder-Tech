import React from 'react'
import { Center, Square, Circle, HStack, Box, AbsoluteCenter } from '@chakra-ui/react'
import styled from "styled-components"
import { TechLogo } from '../Components/TechLogo'
import { Theme } from '../Components/Theme'
import { CartLogo } from '../Components/CartLogo'
import { ButtonComp } from '../Components/ButtonComp'
import { Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem } from '@chakra-ui/react'
import { MenuComponent } from '../Components/MenuComponent'
import { Hamberg } from '../Components/Hamberg'
import { ShopByCategory } from '../Components/ShopByCategory'
import { SearchBar } from '../Components/SearchBar'
import { PhoneIcon } from '@chakra-ui/icons'



export const Navbar = () => {
    const isAuth = false;
    return (
        <DIV>

            <HStack className='navbarItems'>
                <Center className='cem' w='300px' h='50px' color='WHITE'>

                    <TechLogo />


                </Center>

                <Center>
                    <ButtonComp text={"CONTACT"}/>
                    {/* <ShopByCategory /> */}
                </Center>
            </HStack>


            <div className='navbarItems'>
                {/* <HStack>
                    <Center>
                        <SearchBar />
                    </Center>
                </HStack> */}
                <Box  h='0px'>
                    <AbsoluteCenter p='4'  axis='both'>
                    <SearchBar />
                    </AbsoluteCenter>
                </Box>
            </div>




            <div className='navbarItems loginItems'>

                <HStack>
                    <Center>
                        <Theme />
                    </Center>
                </HStack>

                <HStack>
                    <Center>
                        <ButtonComp text={"ABOUT US"} />
                    </Center>
                </HStack>




                <HStack >
                    <Center className='cem' w='190px' h='45px'>

                        {
                            isAuth ? <Wrap>
                                <WrapItem>
                                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                                </WrapItem>


                            </Wrap> : <ButtonComp text={"LOGIN"} />
                        }

                    </Center>


                </HStack>

                <HStack >
                    <Center>
                        <CartLogo />
                    </Center>
                </HStack>

                <HStack >
                    <Center>
                        <Hamberg />
                    </Center>
                </HStack>




            </div>
        </DIV>
    )
}



const DIV = styled.div`

display: flex;
justify-content: space-between;

.cem{
  /* border: 2px solid red; */
  /* border-radius: 10px; */
  /* padding: 10px */
  border-radius: 5px;
}

.navbarItems{
  /* border: 2px solid black; */
  width: 45%;
}

.loginItems{
  display: flex;
  justify-content: space-between;
}

`

