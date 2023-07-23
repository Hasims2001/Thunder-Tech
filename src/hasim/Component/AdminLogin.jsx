import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import adminloginVector from "../../images/adminLoginVector.jpg";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firbase/firebase";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADMIN_LOGIN, ADMIN_LOGOUT } from "../../redux/actionType";

const loginInit = {
  email: "admin@admin.com",
  paasword: "admin",
};

const Login = () => {
  const [data, setData] = useState(loginInit);
  const toast = useToast();
  const navigate = useNavigate();
  const disptach = useDispatch();
  const { email, paasword } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || paasword === "") {
      toast({
        title: `All fields are required!`,
        status: "error",
        isClosable: true,
      });
    } else if (email === "admin@admin.com" && paasword === "admin") {
      toast({
        title: `Welcome Admin!`,
        status: "success",
        isClosable: true,
      });
      disptach({ type: ADMIN_LOGIN });
      navigate("/adminorders");
    } else {
      toast({
        title: `Wrong email or password!`,
        status: "error",
        isClosable: true,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Email..."
        name="email"
        m={"1rem 0"}
        type="email"
        value={data.email}
        onChange={handleChange}
      />
      <br />
      <Input
        placeholder="Paasword..."
        name="paasword"
        type="password"
        m={"1rem 0"}
        value={data.paasword}
        onChange={handleChange}
      />
      <Input
        value={"Submit"}
        cursor={"pointer"}
        mt={"2rem"}
        w={"fit-content"}
        type="submit"
        _hover={{
          backgroundColor: "brand.600",
          color: "brand.400",
        }}
      />
    </form>
  );
};

export const AdminLogin = () => {
  const disptach = useDispatch();
  useEffect(() => {
    disptach({ type: ADMIN_LOGOUT });
  }, []);
  return (
    <Flex
      minHeight={"100vh"}
      maxW={"100vw"}
      flexDirection={["column", "column", "row", "row", "row", "row"]}
      // flexDirection={clicks ? "row" : "row-reverse"}
      p={["1rem 4rem", "1rem 4rem", "0"]}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image
        src={adminloginVector}
        w={"25rem"}
        bg={"brand.400"}
        mixBlendMode={"multiply"}
      />
      <Box>
        <Flex gap={"1px"}>
          <Button
            variant={"SimpleBlue"}
            value={"login"}
            padding={"2rem"}
            borderRadius={"none"}
          >
            Login In
          </Button>
        </Flex>
        <Box mt={"1rem"}>
          <Login />
        </Box>
      </Box>
    </Flex>
  );
};
