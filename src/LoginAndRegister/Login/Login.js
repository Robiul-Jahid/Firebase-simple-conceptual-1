import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { GoogleAuthProvider , getAuth , signInWithPopup , GithubAuthProvider} from "firebase/auth";
import initializeFirebase from '../../Firebase/Firebase.init';


initializeFirebase();
const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});

  // google Provider
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
    .then(res => {
      const {email, displayName, photoURL} = res.user;

      const userInfo = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(userInfo);
    });
  };

  //Github Provider
  const handleGithubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(res => {
      const {email, displayName, photoURL} = res.user;
      // console.log(res.user);

      const userInfo = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      setUser(userInfo);
    });
  };

  return (
    <div>
      <div className='bg-info p-3 m-3 rounded-3'>
        <h1 className='text-danger'>{user.name}</h1>
        <h4 className='text-white'>{user.email}</h4>
        <img className='img-circle w-25 rounded-3' src={user.photo} alt="" />
        
      </div>
      
      <div>
        <h3 className='text-danger mb-5'>Please Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3"              controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="btn btn-primary px-5" type="submit">
          Login
        </Button>
      </Form>
      </div>
      <div className='my-5'>
        <button onClick={handleGoogleSignIn} type="button" class="btn btn-success me-3 my-1  px-3">Login With Google</button>
        <button onClick={handleGithubSignIn} type="button" class="btn btn-success me-3 my-1  px-3">Login With Github</button>
        <button type="button" class="btn btn-danger me-3  my-1 px-3">Reset Password</button>
      </div>
    </div>
  );
};

export default Login;