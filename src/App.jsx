import { Header } from "./components/Header/Header";
import { Tasks } from "./components/Tasks/Index";
import { TodoProvider } from "./Context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <Header />
      <Tasks />
    </TodoProvider>
  );
}

export default App;
