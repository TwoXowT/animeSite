import './App.css';
import {TaskList} from "./components/TaskList";
import {Navbar} from "./components/Navbar";

const tasks = [
    {
        id: 1,
        text: 'learn React',
        completed: false,
    },
    {
        id: 2,
        text: 'learn Typescript',
        completed: true,
    },
    {
        id: 3,
        text: 'learn Redux',
        completed: false,
    },
]


export const App = ()=> {

  return (
    <div className="App">
        <Navbar/>
        <TaskList tasklist={tasks}/>
    </div>
  );
}

export default App;
