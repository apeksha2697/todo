import {Route, Switch, Redirect} from 'react-router-dom';
import User from './component/User';
import Card from './component/Card';

const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route path='/' exact>
          <Redirect to= '/login' />
        </Route>
        <Route path='/login'>
          <User />
        </Route>
        <Route path='/home'>
          <Card />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
