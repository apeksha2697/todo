 import NavigationBar from './component/Navigationbar';
import Card from './component/Card';
import {Route, Switch, Redirect} from 'react-router-dom';

const App = () => {
  return (
    <div className='main'>
      <NavigationBar />
      <Switch>
        <Route path='/' exact>
          <Redirect to= '/home' />
        </Route>
        <Route path='/home' exact>
          <Card />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
