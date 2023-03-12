import { Auth } from 'layouts'
import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div className='register'>
      <Auth type={'register'} />
    </div>
  )
}

export default Register