import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Center,
  Square,
  Circle,
  HStack,
  Box,
  AbsoluteCenter,
  Flex,
  Heading,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Text,
  Stack,
  useToast,
} from "@chakra-ui/react";
import styled from "styled-components";
import { TechLogo } from "../Components/TechLogo";
import { Theme } from "../Components/Theme";
import { CartLogo } from "../Components/CartLogo";
import { ButtonComp } from "../Components/ButtonComp";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MenuComponent } from "../Components/MenuComponent";
import { Hamberg } from "../Components/Hamberg";
import { ShopByCategory } from "../Components/ShopByCategory";
import { SearchBar } from "../Components/SearchBar";
import { PhoneIcon } from "@chakra-ui/icons";
import { AboutModal } from "../Components/AboutModal";
import { DrawerComp } from "../Components/DrawerComp";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContent } from "../Contex/ContextApi";
import { AlignJustify, LogIn } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@uidotdev/usehooks";
import { getLogin, postRegister } from "../../redux/authRedux/action";

export const Navbar = () => {
  // const { isAuth } = useContext(AppContent);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, isLoading, isError } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const toast = useToast();
  const isSmall = useMediaQuery("only screen and (max-width: 426px)");
  const [auth, setAuth] = useState({
    title : "Login Now!",
    btn: "Login",
    other: "New Account?"
  })
  
  useEffect(()=>{
   if(isError !== ""){
    toast({
      title: isError,
      isClosable: true,
      status: "error",
      duration: 9000
    })
   }
  }, [isError]);
  useEffect(()=>{
    if(isAuth){
      onClose();
    }
  }, [isAuth]);
  const handleForm = (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if(auth.btn === "Login"){
      if(!email || !password){
        toast({
          title: "All fields are required!",
          isClosable: true,
          status: "error",
          duration: 9000
        })
      }else{
        // login
        dispatch(getLogin({email, password}));
      }
    }else{
      const name = document.getElementById('name').value;
      const confPassword = document.getElementById('confPassword').value;

      if(!name || !email || !password || !confPassword){
        toast({
          title: "All fields are required!",
          isClosable: true,
          status: "error",
          duration: 9000
        })
      }else if(password !== confPassword){
        toast({
          title: "Password is not match!",
          isClosable: true,
          status: "error",
          duration: 9000
        })
      }else{
        // register
        dispatch(postRegister({name, email, password}));

      }
    }
  }
  const handleAuth = ()=>{
  if(auth.btn === "Login"){
    setAuth({
      title: "Register Now!",
      btn: "Register",
      other: "Already Have Account?"
     })
  }else{
    setAuth({
      title : "Login Now!",
      btn: "Login",
      other: "New Account?"
    })
  }
    
  }
  return (
    <DIV>
      <Flex
        p={"0rem 1.5rem"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link to={"/"}>
          <Heading fontSize={isSmall ? "4vw" : "3vw"}>Thunder Tech</Heading>
        </Link>
        <Box>
              <input className="input" placeholder="Search Product..." />
            </Box>
           
        {!isSmall ? (
          <>
            <Flex alignItems={"center"} gap={"1rem"}>
            <CartLogo />
              {!isAuth && <Button variant={"SimpleBlue"} onClick={onOpen}>Login/Register</Button>}
              {isAuth && <Button variant={"SimpleGreen"}>Profile</Button>}
              <Link to={""}>About</Link>
            </Flex>
          </>
        ) : (
          <Menu >
            <MenuButton as={'button'}> 
            <AlignJustify />
            </MenuButton>
            <MenuList >
    <MenuItem>{!isAuth && <Link className="sideMenu" to={"/"}>Login/Register</Link>}{isAuth && <Link className="sideMenu" to={"/"}>Profile</Link>}</MenuItem>
    <MenuItem><Link className="sideMenu" to={"/products"}>Products</Link></MenuItem>
    <MenuItem><Link className="sideMenu" to={"/"}>About</Link></MenuItem>
    <MenuItem><Link className="sideMenu" to={"/"}>Contact</Link></MenuItem>
  </MenuList>
          </Menu>
        )}
      </Flex>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{auth.title}</ModalHeader>
          <ModalCloseButton />
            <form ref={formRef} onSubmit={handleForm}>
          <ModalBody>
            <Stack gap={"1rem"}>
            {auth.btn === "Register" && <Input type="text" placeholder="Name..." id="name"></Input>}
            <Input type="email" id="email" placeholder="Email..."></Input>
            <Input type="password" id="password" placeholder="Password..."></Input>
            {auth.btn === "Register" && <Input type="password" placeholder="Confirm Password..." id="confPassword"></Input>}
            <Text cursor={'pointer'} fontWeight={'bold'}  onClick={handleAuth}>{auth.other}</Text>
            </Stack>
            
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' colorScheme="black" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant={"SimpleBlue"} type="submit">{!isLoading ?auth.btn : "Loading..."}</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </DIV>
    // <DIV className="parentNavDiv">
    //   <Flex className="navbarItems techLogo">
    //     <Center
    //       className="cem"
    //       w="300px"
    //       h="50px"
    //       color="WHITE"
    //       style={{ display: window.innerWidth <= 550 ? "none" : "block" }}
    //     >
    //       <TechLogo text={"Thunder Tech"} />
    //     </Center>

    //     <Center
    //       className="cem"
    //       w="300px"
    //       h="50px"
    //       color="WHITE"
    //       style={{ display: window.innerWidth <= 550 ? "block" : "none" }}
    //     >
    //       <TechLogo text={"TT"} />
    //     </Center>

    //     <Center className="contact">
    //       <ButtonComp text={"CONTACT"} />
    //       {/* <ShopByCategory /> */}
    //     </Center>
    //   </Flex>

    //   <div className="navbarItems searchBar">
    //     {/* <HStack>
    //                 <Center>
    //                     <SearchBar />
    //                 </Center>
    //             </HStack> */}

    //     <HStack>
    //       <Box h="0px">
    //         <Center p="4" axis="both">
    //           <SearchBar />
    //         </Center>
    //       </Box>
    //     </HStack>
    //   </div>

    //   <div className="navbarItems loginItems">
    //     <HStack className="themeMode">
    //       <Center>
    //         <Theme />
    //       </Center>
    //     </HStack>

    //     <HStack className="about">
    //       <Center>
    //         {/* <ButtonComp text={"ABOUT US"} /> */}
    //         <AboutModal text={"ABOUT"} />
    //       </Center>
    //     </HStack>

    //     <HStack className="login">
    //       <Center className="cem" h={"50px"}>
    //         {isAuth ? (
    //           <div>
    //             <div>
    //               <Wrap>
    //                 <WrapItem>
    //                   <MenuComponent />
    //                 </WrapItem>
    //               </Wrap>
    //             </div>
    //           </div>
    //         ) : (
    //           <Link to={"/login"}>
    //             <ButtonComp text={"LOGIN"} />
    //           </Link>
    //         )}
    //       </Center>

    //       <HStack className="cart">
    //         <Center>
    //           <Link to="/products/cart">
    //             {" "}
    //             <CartLogo />
    //           </Link>
    //         </Center>
    //       </HStack>
    //     </HStack>

    //     <div className="hamburg">
    //       <HStack>
    //         <Center>
    //           <DrawerComp />
    //         </Center>
    //       </HStack>
    //     </div>
    //   </div>
    // </DIV>
  );
};

const DIV = styled.div`
  background-color: #377ffd;
  color: #fff;
  .input {
    border: 2px solid transparent;
    width: 30vw;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 10px;
    transition: all 0.5s;
  }

  .input:hover,
  .input:focus {
    border: 2px solid #377ffd;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }

   .sideMenu{
    color: #000;
  }
`;
// const DIV = styled.div`
//   display: flex;
//   justify-content: space-evenly;

//   .cem {
//     /* border: 2px solid red; */
//     /* border-radius: 10px; */
//     /* padding: 10px */
//     border-radius: 5px;
//   }

//   .navbarItems {
//     /* border: 2px solid black; */
//     width: 45%;
//   }

//   .loginItems {
//     display: flex;
//     justify-content: space-evenly;
//     /* border: 2px solid red; */
//   }

//   .hamburg {
//     display: none;
//   }

//   /* CSS for large devices */
//   @media screen and (min-width: 1162px) {
//     /* Your styles for large devices go here */
//   }

//   /* CSS for small devices */
//   @media screen and (max-width: 1162px) {
//     /* Your styles for small devices go here */
//     .about {
//       display: none;
//     }

//     .contact {
//       display: none;
//     }

//     .hamburg {
//       display: block;
//     }
//   }

//   /* CSS for small devices */
//   @media screen and (max-width: 994px) {
//     /* Your styles for small devices go here */
//     .themeMode {
//       display: none;
//     }

//     .cart {
//       display: none;
//     }
//   }

//   @media screen and (max-width: 776px) {
//     /* Your styles for small devices go here */
//     .login {
//       display: none;
//     }

//     .loginItems {
//       width: 10%;
//     }
//   }

//   @media screen and (max-width: 550px) {
//     /* Your styles for small devices go here */
//   }
//   @media screen and (max-width: 425px) {
//     /* Your styles for small devices go here */

//     .searchBar {
//       display: none;
//     }
//   }
// `;
