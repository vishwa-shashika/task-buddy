import { Box, Button, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <Flex p={4} alignItems="center">
      <Box>
        <Heading size="lg">Task Buddy</Heading>
      </Box>
      <Spacer />
      <HStack spacing="20px">
        <Box>Other Menu</Box>
        <Button>☢</Button>
      </HStack>
    </Flex>
  );
};

export default Header;
