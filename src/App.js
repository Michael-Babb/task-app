import { useSelector } from 'react-redux';
import TaskList from './task-list/task-list';
import { currentTaskData } from './taskSlice';

import './App.css';

function App() {
  const taskData = useSelector(currentTaskData);

  return (
    <div className="App">
      <div className="navBar">
          <h1>Task App</h1>
        </div>
      <TaskList listOfTasks={taskData}/>
    </div>
  );
}
export default App;
