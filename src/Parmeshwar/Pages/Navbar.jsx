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
import { AboutModal } from '../Components/AboutModal'
import { DrawerComp } from '../Components/DrawerComp'



export const Navbar = () => {
    const isAuth = false;
    return (
        <DIV className='parentNavDiv'>

            <HStack className='navbarItems techLogo'>
                <Center className='cem' w='300px' h='50px' color='WHITE'>

                    <TechLogo />


                </Center>

                <Center className='contact'>
                    <ButtonComp text={"CONTACT"}/>
                    {/* <ShopByCategory /> */}
                </Center>
            </HStack>


            <div className='navbarItems searchBar'>
                {/* <HStack>
                    <Center>
                        <SearchBar />
                    </Center>
                </HStack> */}
                <HStack>
                <Box  h='0px'>
                    <AbsoluteCenter p='4'  axis='both'>
                    <SearchBar />
                    </AbsoluteCenter>
                </Box>
                </HStack>
            </div>




            <div className='navbarItems loginItems'>

                <HStack className='themeMode'>
                    <Center>
                        <Theme />
                    </Center>
                </HStack>

                
                <HStack className='about'>
                    <Center>
                        {/* <ButtonComp text={"ABOUT US"} /> */}
                        <AboutModal text={"ABOUT"}/>
                    </Center>
                </HStack>
                




                <HStack className='login' >
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

                <HStack className='cart'>
                    <Center>
                        <CartLogo />
                    </Center>
                </HStack>

                <div className='hamburg'>
                <HStack >
                    <Center>
                        <DrawerComp />
                    </Center>
                </HStack>
                </div>




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
  justify-content: space-evenly;
  border: 2px solid red;
}

.hamburg{
    display: none;
}


/* CSS for large devices */
@media screen and (min-width: 1162px) {
  /* Your styles for large devices go here */
 

 
}


/* CSS for small devices */
@media screen and (max-width: 1162px) {
  /* Your styles for small devices go here */
  .about{
    display: none;
  }

  .contact{
    display: none;
  }

  .hamburg{
    display: block;
  }

}


/* CSS for small devices */
@media screen and (max-width: 994px) {
  /* Your styles for small devices go here */
  .themeMode{
    display: none;
  }

  .cart{
    display: none;
  }
}

@media screen and (max-width: 776px) {
  /* Your styles for small devices go here */
  .login{
    display: none;
  }

  .loginItems{
    width: 10%;

  }

  
  
}

@media screen and (max-width: 571px) {
  /* Your styles for small devices go here */
  
  
}



`

