import './App.css';
import TodoApp from './component/TodoApp';
import {Route, Switch, Redirect} from 'react-router-dom';

const App = () => {
  return (
    <Switch>
    <Route path='/' exact>
      <Redirect path = '/home' />
    </Route>
    <Route path='/home' exact>
    <div className="App">
      <span className='title'>Todo list</span>
      <TodoApp />
      </div>
    </Route>
    </Switch>
  );
}

export default App;
