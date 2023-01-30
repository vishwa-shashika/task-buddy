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
  Badge,
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const TaskList = ({ taskList, setTaskList }) => {
  const handleClearAll = () => {
    setTaskList([]);
  };

  return (
    <Box p={4}>
      <Flex alignItems="center">
        <HStack alignItems="center">
          <Heading as="h4" size="md">
            Tasks
          </Heading>
          <Badge colorScheme="green" fontSize="1em">
            {taskList.length}
          </Badge>
        </HStack>
        <Spacer />
        <Button colorScheme="green" variant="outline" size="sm" onClick={handleClearAll}>
          Clear All
        </Button>
      </Flex>

      <Divider mt={4} mb={6} />

      <SimpleGrid columns={4} minChildWidth="300px" spacing="10px" mt={2}>
        {/*-- Task Loop Begin Here --*/}
        {taskList.map((task) => (
          <Card key={task.id} borderLeft="4px" borderColor={task.priority} bg="white">
            <CardHeader>
              <Flex alignItems="top">
                <Box>
                  <Heading as="h5" size="sm">
                    {task.title}
                  </Heading>
                  <Text color="gray.400" fontSize="sm" mt={1}>
                    Date {task.date} : {task.time}
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
              {task.description}
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default TaskList;
