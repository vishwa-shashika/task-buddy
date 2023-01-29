import { Box } from "@chakra-ui/react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

//import "./App.css";

function App() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Header />
      <AddTask />
      <TaskList />
    </Box>
  );
}

export default App;
