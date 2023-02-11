import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import React, { useContext, useState } from "react";
import { AuthContext } from '../context/authContext';



    const Login = () => {
        const [inputs, setInputs] = useState({
          username: "",
          password: "",
        });
        const [err, setError] = useState(null);
      
        const navigate = useNavigate();
        const {login} = useContext(AuthContext)

      
        const handleChange = (e) => {
          setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
      
           await login(inputs)
            navigate("/");
          } catch (err) {
              console.error(err.response.data);     // NOTE - use "error.response.data` (not "error")
          }
        
        };
   
      
    return (

        <div className="auth" >  

        <h1>Login </h1>
        
        <form> 

<input  onChange={handleChange} type="text" placeholder="set your username " name="username" /> 
<input  onChange={handleChange} type="password" placeholder="set your password" name="password"  /> 
<button onClick={handleSubmit} >Login</button>
<p>This is an Error</p>
<span>Dont you have an account <Link to="/register">Register Now </Link>

</span>


        </form>
        </div>
        
    )


}


export default Login