import { colors } from '@material-ui/core'
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export default function LoginWithGmail() {
  const responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
    const arr = localStorage.getItem('credentials')
      ? JSON.parse(localStorage.getItem('credentials'))
      : []
    arr.push(response.profileObj)
    localStorage.setItem('credentials', JSON.stringify(arr))
  }
  

  return (
    <div>
      <GoogleLogin
        style={{ backgroundColor: 'black' }}
        clientId='891848691954-aiqk6bsmak8us3vvkj2oth5u0dui8mf4.apps.googleusercontent.com'
        buttonText='Sign in with Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        // background-color='blue'
      />
    </div>
  )
}
