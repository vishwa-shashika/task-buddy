import { Box, Button, Flex, Input, Select, useToast } from "@chakra-ui/react";
import React from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      title: e.target.task.value,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      description: "Lorem ipsum dolor sit amet.",
      priority: e.target.priority.value,
    };
    setTaskList([...taskList, newTask]);
    tostHandler();
  };

  const toast = useToast();

  const tostHandler = () => {
    toast({
      title: "Task Added ",
      description: "We've created your task Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex mt={8} gap={2} maxW="60vw" ml="auto" mr="auto" bg="white" p={8} rounded="md" boxShadow="base">
        <Input
          name="task"
          variant="outline"
          type="text"
          placeholder="Add New Task"
          focusBorderColor="green.400"
          flex={4}
        />
        <Select placeholder="Priority" name="priority" flex={2} focusBorderColor="green.400">
          <option value="red.400">High</option>
          <option value="yellow.400">Medium</option>
          <option value="green.400">Low</option>
        </Select>
        <Button colorScheme="green" flex={1} type="submit">
          Add
        </Button>
      </Flex>
    </form>
  );
};

export default AddTask;
