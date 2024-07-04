import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../assets/images/signImg.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Join() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();

  type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

  const handleSubmit = (event:FormSubmitEvent) => {
    event.preventDefault(); 

    console.log('Form submitted:', { name, email, password });
    axios.post("http://localhost:3001/register", { name, email, password })
      .then(response => {
        console.log(response.data);
        navigate('/account/signin')

      })
      .catch(error => {
        console.error(error);
      })

    // Clear form fields after submission (optional)
    setName('');
    setEmail('');
    setPassword('');

    
  };
  return (
    <div className=' mt-14  h-screen w-full flex flex-col justify-center items-center bg-green-900 '>
    <div className=" mt-3   border border-black rounded  leading-10 flex flex-col justify-between items-center lg:flex-row  " >
    <form onSubmit={handleSubmit} className='text-center  p-4  w-3/4 order-2 lg:order-1'>

    <div className="form-group mb-3 flex justify-between items-center ">
        <label htmlFor="name">Name:</label>
        <input
            type="text"
            className="form-control text-black w-64"
            id="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        </div>
        <div className="form-group mb-3 flex justify-between items-center ">
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            className="form-control text-black w-64 "
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </div>
        <div className="form-group mb-3 flex justify-between items-center">
        <label htmlFor="password">Password:</label>
        <div className='bg-white w-64 flex'>
        <input
            type={showPassword ? "text" : "password"}
            className="form-control text-black outline-none w-full"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        <button type="button" className='text-black' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}</button>
        </div>
        </div>
        <button type="submit" className="btn btn-primary  bg-green-700 hover:bg-green-600 duration-500 px-3  rounded-2xl ">
        Register
        </button>
        <p className="mt-3">
Already have an account? 
<br/>
 <Link to={"/account/signin"} className='btn btn-primary  bg-green-700 hover:bg-green-600 duration-500 px-3 py-1  rounded-2xl '>Login</Link>
</p>
    </form>
    <div className='w-3/4 order-1 lg:order-2'>
    <img src={img }alt="" className='w-full h-96 object-cover ' />
    </div>

    </div>
    
</div>
  )
}
