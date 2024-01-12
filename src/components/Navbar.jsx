import { UnlockIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Spacer,
  HStack,
  useToast,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import React from "react";

export default function Navbar() {
  //toastf
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "successfully logged out",
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />,
    });
  };

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
      <Heading as="H1">KB Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar src="/img/mario.png">
          <AvatarBadge width="1.3em" bg="teal.500">
            <Text fontSize="xs" color="white">
              3
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>kbeatz@dev</Text>
        <Button colorScheme="purple" onClick={showToast}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
}
