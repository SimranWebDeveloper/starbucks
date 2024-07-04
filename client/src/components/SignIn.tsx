import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { toast } from 'react-toastify';
import img from '../assets/images/signImg.jpg'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const {userState,setUserState,mode}=useContext<any>(GlobalContext)
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = (event:FormSubmitEvent) => {
    event.preventDefault(); 

    
    
    axios.post("http://localhost:3001/login", { email, password })
      .then(result => {
        console.log('mene result:',result.data);
        setUserState(result.data)
        if (result.data && result.status ===200) {
          toast.success("Sign in successfully")
          navigate('/')

        }


      })
      .catch(error => {
        
        toast.error(error.response.data.error)
        // console.error('error.reponse:',error.response.data);
      })


    }

  return (
    <div className={` mt-14  h-screen w-full flex flex-col justify-center items-center bg-green-900 `}>
    <div className=" mt-3   border border-black rounded  leading-10 flex flex-col justify-between items-center lg:flex-row " >
    <form onSubmit={handleSubmit} className='text-center  p-4  w-3/4 order-2 lg:order-1'>

        <div className="form-group mb-3 flex justify-between items-center">
        <label htmlFor="email">Email:</label>
        <input
            type="email"
            className="form-control text-black w-64"
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
                <button type="button" className='text-black' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <VisibilityOffIcon className=''/> : <VisibilityIcon className=''/>}</button>
          </div>

        </div>
        <button type="submit" className="btn btn-primary  bg-green-700 hover:bg-green-600 duration-500 px-3  rounded-2xl ">
        Sign In
        </button>
    </form>
    <div className='w-3/4'>
    <img src={img }alt="" className='w-full h-96 object-cover order-1 lg:order-2' />
    </div>

    </div>
</div>
  )
}


