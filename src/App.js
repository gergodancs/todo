import "./css/main.css";
import DisplayTodos from "./comps/DisplayTodos";
import Todos from "./comps/Todos";
import Logout from "./comps/Logout";
import Login from "./comps/Login";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/reducer";
//import { selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  console.log("ez az user:", user);

  return (
    <div className="App">
      {user ? (
        <>
          <Logout />
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Todo App
          </motion.h1>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Todos />
            <DisplayTodos />
          </motion.div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
