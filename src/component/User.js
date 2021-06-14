import { useHistory } from 'react-router-dom';
import {useState} from 'react';
import Card from './Card';
import LoginForm from './LoginForm';

const User = () => {
  const adminUser = {
    name: "apeksha",
    email: "apeksha@gmail.com",
    password: "123456",
  };

  let history = useHistory()

  const [user, setUser] = useState({email: "", password: ""});
  const [error, setError] = useState("");

  const Login = details => {

    if(details.email === adminUser.email && details.password === adminUser.password){
    setUser({
      name: details.name,
      email: details.email
    })
    history.push('/home'); 
    } else{
      setError("incorrect details")
    }
  };
  const Logout = details => {
    setUser({email: "", password: ""});
  };
  return(
    <div>
      {(user.email !== "") ? (
      <div className='welcome'>
        <Card />
        <button onClick={Logout}> Logout</button>
      </div>
      ) : <LoginForm Login={Login} error={error}/> }
    </div>
  );
};

export default User;