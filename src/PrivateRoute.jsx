import { Flex, Heading, Stack, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation , Redirect} from "react-router-dom";
export const PrivateRoute = ({ children }) => {
  const toast = useToast();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
 
  if (!isAuth) {
  
    return <Stack justifyContent={'center'} height={"75vh"} alignItems={'center'}><Heading>Please Login First</Heading> <Text>Click on Login/register button on top right corner</Text> </Stack>
    
  }else{
    return children;
  }
};
