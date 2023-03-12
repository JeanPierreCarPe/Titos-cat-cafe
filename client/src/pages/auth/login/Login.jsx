import { Auth } from 'layouts'
import React from 'react'
import "./login.css"

const Login = () => {
  return (
    <div className='login'>
        <Auth type={"login"} />
    </div>
  )
}

export default Login