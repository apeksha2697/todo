import Home from './components/pages/Home';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Profile from './components/pages/Profile';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { useState } from 'react';
import ProtectedRoutes from './ProtectedRoutes';
import NotFound from './components/NotFound';
import NavigationBar from './components/pages/Navigationbar';
function App() {
  const [isLoggedin, setisLoggedin] = useState(false);

  const loginHandler = (event) => {
    if (event) {
      setisLoggedin(true);
    } else {
      setisLoggedin(false);
    }
  };
  return (
    <BrowserRouter>
      <NavigationBar isLoggedin={isLoggedin} setisLoggedin={loginHandler}  />
      <Switch>
        <Route exact path="/" >
          <SignUp />
        </Route>
        <Route path='/login'>
          <Login isLoggedin={isLoggedin} setisLoggedin={loginHandler} />
        </Route>
        <Route path='/signup'>
          <SignUp isLoggedin={isLoggedin} setisLoggedin={loginHandler} />
        </Route>
        <ProtectedRoutes exact path='/profile' component={Profile} isLoggedin={isLoggedin} setisLoggedin={loginHandler} />
        <ProtectedRoutes exact path='/home' component={Home} isLoggedin={isLoggedin} setisLoggedin={loginHandler} />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
