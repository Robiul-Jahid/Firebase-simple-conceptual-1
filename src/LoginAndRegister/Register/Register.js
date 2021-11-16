
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import initializeFirebase from '../../Firebase/Firebase.init';


initializeFirebase();

const Register = () => {
  const auth = getAuth();
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then(res => {
      const {email, displayname , photoURL} = res.user;
      const userInfo = {
        name : displayname,
        email: email,
        photo: photoURL
      }
      setUser(userInfo);
    })
  }

  return (
    <div>
      <h2>{user.email}</h2>
      <div>
        <h3 className='text-danger mb-5'>Please Register</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            onChange={handleEmailChange}
            type="email" 
            placeholder="Enter email" 
            required
            />
          </Form.Group>

          <Form.Group className="mb-3"              controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            onChange={handlePasswordChange}
            type="password" 
            required 
            placeholder="Password" />
          </Form.Group>
          <input className="btn btn-primary px-5"
            onClick={handleRegister} 
            type="submit" value="Register" />
      </Form>
      </div>
    </div>
  );
};

export default Register;