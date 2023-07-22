import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  Heading,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { CopyPlus } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/adminRedux/action";

export const PageHeader = ({ page, handleDelete }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  //   const handleDelete = () => {
  //     if (checkedItems.length > 0) {
  //       checkedItems.map((id) => {
  //         dispatch(deleteProduct(id));
  //       });
  //       toast({
  //         title: `${checkedItems} products deleted!`,
  //         status: "error",
  //         isClosable: true,
  //       });
  //       setCheckedItems([]);
  //     } else {
  //       toast({
  //         title: `Please select at least one product!`,
  //         status: "error",
  //         isClosable: true,
  //       });
  //     }
  //     onClose();
  //   };
  const handleAddNew = () => {
    navigate(`/${page}/new`);
  };
  const handleEdit = (id) => {
    navigate(`/${page}/edit/${id}`);
  };
  return (
    <>
      <Flex
        flexDir={["column", "column", "column", "row", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Heading as={"h4"} fontSize={"xl"} fontWeight={"normal"}>
          Products
        </Heading>
        <Flex gap={".7rem"}>
          <button className="addnewbtn" onClick={handleAddNew}>
            <Flex gap={".5rem"} alignItems={"center"}>
              <CopyPlus />
              Add New
            </Flex>
          </button>
          <button
            className="deletebtn"
            onClick={() => {
              checkedItems.length > 0 && onOpen();
            }}
          >
            Delete ({checkedItems.length} selected)
          </button>

          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Product
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure to delete {checkedItems.join(",")} products?
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button colorScheme="blue" ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleDelete} ml={3}>
                    Delete
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Flex>
      </Flex>
    </>
  );
};
