import {Route, Switch, Redirect} from 'react-router-dom';
import User from './component/User';
import Card from './component/Card';

const App = () => {
  return (
    <div className='main'>
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
        <Route path="*">
          <div>404 Not found</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
