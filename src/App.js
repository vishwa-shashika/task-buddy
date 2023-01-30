import { useState } from "react";
import { Box } from "@chakra-ui/react";

import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

//import "./App.css";

function App() {
  const [tasksList, setTaskList] = useState([]);

  return (
    <Box bg="gray.50" minH="100vh">
      <Header />
      <AddTask taskList={tasksList} setTaskList={setTaskList} />
      <TaskList taskList={tasksList} setTaskList={setTaskList} />
    </Box>
  );
}

export default App;
