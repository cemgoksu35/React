import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Login() {

  const navigate = useNavigate()

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const sendLogin =(evt: React.FormEvent) => {
  evt.preventDefault()
  console.log(email,password)
  if (email === "cemgks91@gmail.com" && password === "12345")
  {
    //window.location.href = "/dashboard";
    navigate('/dashboard')
  }
}

  return (
    <>
    <div className='row'>
        <div className='col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4 col xxl-4'>
        
        </div>
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col xxl-4'>
          <form onSubmit={sendLogin}>
            <div><h1>User Login</h1> </div>
          <hr></hr>
              <div className='mb-3'>
                <input onChange={(evt) => setEmail(evt.target.value)} required placeholder='E-mail' type="email" className='form-control'></input>
              </div>
              <div className='mb-3'>
                <input  onChange={(evt) => setPassword(evt.target.value)} required placeholder='Password' type="password" className='form-control'></input>
              </div>
             <hr></hr>
             <p>{email}</p>
            <p>{password}</p>
           <button className='btn btn-success'>Send</button>
          </form>
        </div>
        <div className='col-12 col-sm-12 col-md-3 col-lg-4 col-xl-4 col xxl-4'>
          
        </div>
       
    </div>
    </>
  )
}

export default Login