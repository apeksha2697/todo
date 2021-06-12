import './App.css';
import TodoApp from './component/TodoApp';

const App = () => {
  return (
    <div className="App">
      <span className='title'>Todo list</span>
      <TodoApp />
    </div>
  );
}

export default App;
