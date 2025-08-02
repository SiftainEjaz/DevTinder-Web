import { React, useState } from 'react';
import axios from 'axios';

const Login = () => {

  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async function(){

      try
      {
        const res = await axios.post("http://localhost:3000/login", 
        {
          emailId,
          password
        },
        {withCredentials : true}
      )
      }
      catch(err)
      {
        console.error(err);
      }
  }

  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>

          <label className="label my-2">Email ID</label>
          <input type="email" value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="input" placeholder="Enter your Email Id" />

          <label className="label my-2">Password</label>
          <input type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input" placeholder="Enter your Password" />

          <div className="card-actions justify-center my-2">
            <button className="btn btn-accent" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;