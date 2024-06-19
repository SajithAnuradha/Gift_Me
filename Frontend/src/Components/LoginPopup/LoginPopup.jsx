import React from 'react'
import './LoginPopup.css'
import { useState } from 'react'
import { assets } from '../../assets/UserAssets/assets.js'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'

function LoginPopup({setShowLogin}) {

  const [currentState,setCurrentState]=useState("Sign Up")
  const {url,setToken,role,setRole}=useContext(StoreContext)
  // setRole(role)
  
  const[data,setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData(data=>({...data,[name]:value}))

    

  }


  const onLogin= async (event)=>{
    event.preventDefault();
    let newUrl=url;
    if (currentState==="Login"){
      newUrl+='/api/user/login'

    }
    else {
      newUrl+="/api/user/register"
    }
    
    const response= await axios.post(newUrl,data)
    if (response.data.success){
      setToken(response.data.token)
      // setRole(role)
      localStorage.setItem("token",response.data.token)
      setShowLogin(false)

    }
    else {
      let newUrl=url;
      if (currentState==="Login"){
        
        newUrl+='/api/admin/login'
        const response= await axios.post(newUrl,data)
        if (response.data.success){
          setToken(response.data.token)
          // setRole(role)
          localStorage.setItem("token",response.data.token)
          setShowLogin(false)
        }
        else {
          toast.error(response.data.message)
        }

      }
    }


  }
  // useEffect(()=>{
  //    console.log(data)
  // },[data])

  return (
    <div className='login-popup'>
    <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title">
            <h2>
                {currentState}
            </h2>
            <img onClick={()=>setShowLogin(false)}src={assets.cross_icon} alt=''/>
        </div>
        <div className="login-popup-input">
            {currentState==="Login" ? <></> :    <input  name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder="Your name" required/>
                                                   }
         
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Your email" required/>
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder="Password" required/>
        </div>
        <button type='submit' >
              {currentState==="Sign Up"? "create Account ": "Login"}
              </button>
              <div className="login-popup-conditions">
                <input type="checkbox" required/>
                <p>By continuing, I agree to the terms of use  & privacy policy.</p>
              </div>
              {currentState==="Login" ?
              <p>Create a new account?<span onClick ={()=>setCurrentState("Sign Up")}>Click here</span></p>:
              <p>Already have an account ?<span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
              
       
    </form>
    </div>
  )
}

export default LoginPopup