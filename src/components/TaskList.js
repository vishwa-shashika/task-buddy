import {
  Box,
  Card,
  Flex,
  HStack,
  SimpleGrid,
  Spacer,
  Button,
  CardHeader,
  Heading,
  CardBody,
  Text,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React from "react";

const TaskList = () => {
  return (
    <Box p={4}>
      <Flex alignItems="center">
        <HStack alignItems="center">
          <Heading as="h4" size="md">
            Tasks
          </Heading>
          <Box bg="gray.100">10</Box>
        </HStack>
        <Spacer />
        <Button colorScheme="green">Clear All</Button>
      </Flex>

      <Divider mt={4} mb={6} />

      <SimpleGrid columns={4} minChildWidth="300px" spacing="10px" mt={2}>
        <Card borderLeft="4px" borderColor="green.400" bg="white">
          <CardHeader>
            <Flex alignItems="top">
              <Box>
                <Heading as="h5" size="sm">
                  Task Name
                </Heading>
                <Text color="gray.400" fontSize="sm" mt={1}>
                  Date 2023/01/30 10:26PM
                </Text>
              </Box>
              <Spacer />
              <HStack alignItems="top">
                <IconButton aria-label="Search database" size="sm" icon={<EditIcon />} />
                <IconButton aria-label="Search database" size="sm" icon={<DeleteIcon />} />
              </HStack>
            </Flex>
          </CardHeader>
          <CardBody color="gray.500" pt={0}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, veritatis. Dicta eum omnis tenetur nam
          </CardBody>
        </Card>
      </SimpleGrid>
    </Box>
  );
};

export default TaskList;
