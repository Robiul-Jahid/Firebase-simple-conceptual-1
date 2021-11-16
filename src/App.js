import { useState } from 'react';
import './App.css';
import initializeFirebase from './Firebase/Firebase.init';
import Login from './LoginAndRegister/Login/Login';
import Register from './LoginAndRegister/Register/Register';


initializeFirebase();
function App() {
  const [toggle, setToggle] = useState(false);

  console.log(toggle);

  return (
    <div className="App">
      <div className='m-5 login-area'>
      {toggle?<Login></Login>:
      <Register></Register>}
       {toggle? <p className='para mt-5' onClick= {() => setToggle(false)}>Are you new? Please Register</p>:
        <p className='para mt-5' onClick = {() => setToggle(true)}>Already have an Account?</p>}
      </div>
    </div>
  );
}

export default App;
