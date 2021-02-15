import { colors } from '@material-ui/core'
import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export class LoginWithGmail extends Component {
  responseGoogle = (response) => {
    console.log(response)
    console.log(response.profileObj)
  }
  render() {
    return (
      <div>
        <GoogleLogin
          style={{ backgroundColor: 'black' }}
          clientId='891848691954-aiqk6bsmak8us3vvkj2oth5u0dui8mf4.apps.googleusercontent.com'
          buttonText='Sign in with Google'
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          // background-color='blue'
        />
      </div>
    )
  }
}

export default LoginWithGmail
