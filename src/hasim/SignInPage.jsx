import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import loginVector from "../images/loginVector.jpg";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, githubProvider, googleProvider } from "../firbase/firebase";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { singIn } from "../redux/authRedux/action";
import { ISAUTH } from "../redux/actionType";
import google from "../images/google.png";
import github from "../images/github.png";
const loginInit = {
  email: "",
  paasword: "",
};
const registerInit = {
  email: "",
  name: "",
  paasword: "",
};

const Login = () => {
  const [data, setData] = useState(loginInit);
  const toast = useToast();
  const dispatch = useDispatch();
  const { email, paasword } = data;
  const navigate = useNavigate();
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
    } else if (paasword.length < 6) {
      toast({
        title: `Password must be at least 6 characters!`,
        status: "error",
        isClosable: true,
      });
    } else {
      await signInWithEmailAndPassword(auth, email, paasword)
        .then((userCredential) => {
          const user = userCredential.user;
          localStorage.setItem("username", JSON.stringify(email));
          setData(loginInit);
          dispatch({ type: ISAUTH });
          navigate("/");
        })
        .catch((error) => {
          let errorCode = error.code;
          errorCode = errorCode.split("/");
          const errorMessage = error.message;
          toast({
            title: errorCode[1],
            status: "error",
            isClosable: true,
          });
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

const Register = () => {
  const [data, setData] = useState(registerInit);
  const { email, name, paasword } = data;
  const toast = useToast();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    if (email === "" || name === "" || paasword === "") {
      toast({
        title: `All fields are required!`,
        status: "error",
        isClosable: true,
      });
    } else if (paasword.length < 6) {
      toast({
        title: `Password must be at least 6 characters!`,
        status: "error",
        isClosable: true,
      });
    } else {
      await createUserWithEmailAndPassword(auth, email, paasword, name)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          localStorage.setItem("username", JSON.stringify(name));
          setData(registerInit);
          dispatch({ type: ISAUTH });
          navigate("/");
        })
        .catch((error) => {
          let errorCode = error.code;
          errorCode = errorCode.split("/");
          const errorMessage = error.message;
          toast({
            title: errorCode[1],
            status: "error",
            isClosable: true,
          });
        });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Name..."
        name="name"
        m={"1rem 0"}
        type="text"
        value={data.name}
        onChange={handleChange}
      />
      <br />
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
        w={"fit-content"}
        mt={"2rem"}
        _hover={{
          backgroundColor: "brand.600",
          color: "brand.400",
        }}
        type="submit"
      />
    </form>
  );
};
export const SignInPage = () => {
  const [clicks, setClicks] = useState(true);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    const { value } = e.target;
    if (value === "login") {
      setClicks(true);
    } else if (value === "register") {
      setClicks(false);
    }
  };
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        localStorage.setItem("username", JSON.stringify(user.email));
        // setData(registerInit);
        dispatch({ type: ISAUTH });
        navigate("/");
      })
      .catch((error) => {
        let errorCode = error.code;
        errorCode = errorCode.split("/");
        const errorMessage = error.message;
        toast({
          title: errorCode[1],
          status: "error",
          isClosable: true,
        });
      });
  };

  const signInWithGithub = async () => {
    await signInWithPopup(auth, githubProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        localStorage.setItem("username", JSON.stringify(user.email));
        // setData(registerInit);
        dispatch({ type: ISAUTH });
        navigate("/");
      })
      .catch((error) => {
        let errorCode = error.code;
        errorCode = errorCode.split("/");
        const errorMessage = error.message;
        toast({
          title: errorCode[1],
          status: "error",
          isClosable: true,
        });
      });
  };
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
        src={loginVector}
        w={"25rem"}
        bg={"brand.400"}
        mixBlendMode={"multiply"}
      />
      <Box>
        <Flex gap={"1px"}>
          <Button
            variant={clicks ? "SimpleBlue" : "SimpleWhite"}
            value={"login"}
            padding={"2rem"}
            borderRadius={"none"}
            onClick={handleClick}
          >
            Login In
          </Button>
          <Button
            variant={!clicks ? "SimpleBlue" : "SimpleWhite"}
            value={"register"}
            padding={"2rem"}
            borderRadius={"none"}
            onClick={handleClick}
          >
            Register
          </Button>
        </Flex>
        <Box mt={"1rem"}>{clicks ? <Login /> : <Register />}</Box>

        <Flex
          mt={"3rem"}
          fontSize={"lg"}
          fontWeight={"bold"}
          gap={"1rem"}
          alignItems={"center"}
        >
          <Text>Login With</Text>
          <Image
            src={google}
            w={"4rem"}
            cursor={"pointer"}
            onClick={signInWithGoogle}
          />
          <Box
            w={".3rem"}
            borderRadius={"full"}
            height={"100%"}
            bg={"brand.300"}
            color="brand.300"
          >
            |
          </Box>
          <Image
            src={github}
            w={"3.5rem"}
            cursor={"pointer"}
            onClick={signInWithGithub}
          />
        </Flex>
      </Box>
    </Flex>
  );
};
