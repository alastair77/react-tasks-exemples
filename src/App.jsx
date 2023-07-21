import Tasklists from "./components/Tasklists";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-gray-200 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <Tasklists />
      </div>
    </main>
  );
}

export default App;
