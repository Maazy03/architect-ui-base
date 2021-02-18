import React, { useState } from 'react'
import { Spinner, FormFeedback } from 'reactstrap'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import * as utils from '../../../common/utils'
import { useSelector } from 'react-redux'
import { authActions } from '../../../store/actions'
import Art_Img from '../../../assets/img/logo_small.png'
import LoginWithGmail from './loginWithGmail'
function Copyright() {
  return (
    <Typography variant='body2' color='light' align='center'>
      {'Copyright © 2021'}
      {/* <Link color='inherit' href='https://material-ui.com/'>
        AfricanArt.International
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'} */}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  mainRoot: {},
  root: {
    // backgroundColor: 'blue',
    height: 'calc(100vh - 16px)',
    width: '100%',
    // marginTop:"75px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent:"center",
  },
  image: {
    backgroundImage: `url(${Art_Img})`,
    backgroundRepeat: 'no-repeat',
    // backgroundColor:
    // theme.palette.type === 'dark'
    //   ? theme.palette.grey[900]
    //   : theme.palette.grey[50],
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  },
  main: {
    height: '65%',
    marginTop: '30px',
    // width: '-webkit-fill-available',
    width: '90%'
    // marginLeft: '0px',
  },
  paper: {
    // margin: theme.spacing(8, 4),
    margin: '13px 9px',
    // marginTop:'2px'
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    height: '60%',
    // backgroundColor: 'green',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginBottom: '-30px',
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // marginTop: '2%',
    // alignContent: 'center',
    textAlign: 'center',
    // alignItems: 'center',
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Dancing Script',
    cursor: 'pointer',
  },
}))

export default function LoginBoxed(props) {
  const [localValue, setlocalValue] = React.useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  )

  // const [email, setEmail] = useStateWithLocalStorage('myEmailInLocalStorage')
  // const [password, setPassword] = useStateWithLocalStorage(
  //   'myPasswordInLocalStorage'
  // )
  // const onChange1 = (event) => setEmail(event.target.value)
  // const onChange2 = (event) => setPassword(event.target.value)
  const user = useSelector((state) => state)
  const classes = useStyles()
  const dispatch = useDispatch()
  const [stateLoader, setStateLoader] = useState(false)
  const [state, setState] = useState({ email: '', password: '', count: 0 })
  const [stateIsEmailValid, setStateIsEmailValid] = useState(true)
  const [stateIsPasswordValid, setStateIsPasswordValid] = useState(true)
  const [stateIsFormValid, setStateIsFormValid] = useState(false)

  const _onChange = (event) => {
    // React.useEffect(() => {
    //   localStorage.setItem('myValueInLocalStorage', localValue);
    // }, [localValue]);

    const { name, value } = event.target
    console.log('GROOOVEW', event.target.value)
    // localStorage.setItem('myValueInLocalStorage', event.target.value)
    // localStorage.setItem('myValueInLocalStorage2', event.target.value)

    // setlocalValue(event.target.value)
    setState((prevState) => ({ ...prevState, [name]: value }))
    console.log('Sewt', value)
  }

  function onBlurHandler(event) {
    const { name, value } = event.target
    validateField(name, value)
  }
  function validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        let emailValid = state.email === '' ? false : stateIsEmailValid
        emailValid = utils.isEmailValid(value)
        setStateIsEmailValid(emailValid)
        validateForm()
        break

      case 'password':
        let passwordValid = utils.isPasswordValid(value)
        setStateIsPasswordValid(passwordValid)
        validateForm()
        break

      default:
        break
    }
  }
  function validateForm() {
    let emailValid = false,
      passwordValid = false
    emailValid = utils.isEmailValid(state.email)
    passwordValid = utils.isPasswordValid(state.password)
    setStateIsFormValid(emailValid && passwordValid)
  }

  const onLogin = async () => {
    props.history.push({
      pathname: '/dashboards',
    })
    const arr = localStorage.getItem('credentials')
      ? JSON.parse(localStorage.getItem('credentials'))
      : ['']
    let check = false
    console.log(arr)
    if (arr && arr.length == 0) {
      console.log('AAAAAAAAAA')
      state.count = 1
      arr.push(state)
      localStorage.setItem('credentials', JSON.stringify(arr))
    } else {
      const data =
        arr &&
        arr.length > 0 &&
        arr.map((x) => {
          // console.log(data)
          console.log('state.email', state.email)
          console.log('x.email', x.email)
          if (x.length > 0 && state.email == x.email) {
            console.log('if chal')
            x.count++
            check = true
            return x

            //
          }
          return x
          // localStorage.setItem('credentials', JSON.stringify([arr]))
        })
      console.log('DATTTTTTTT', data)
      if (!check) {
        console.log('stateeeee', state)
        state.count = 1
        arr.push(state)
        localStorage.setItem('credentials', JSON.stringify(arr))
      } else {
        localStorage.setItem('credentials', JSON.stringify(data))
      }

      console.log('----', data)

      // props.history.push({
      //   pathname: '/dashboards',
      // })
      // try {
      //   setStateLoader(true)
      //   const result = await dispatch(authActions.login(state))
      // } catch (error) {
      //   if (error.response) {
      //     utils._toast(error.response.data.responseMessage, 'error')
      //   } else {
      //     utils._toast('Netwrok Error', 'error')
      //   }
      //   setStateLoader(false)
      //   setState({ email: '', password: '' })
      // }
    }
  }

  return (
    <div>
      <Grid container component='main' className={classes.root}>
        <div
          style={{
            backgroundColor: 'slateblue',
            display: 'flex',
            justifyContent: 'center',
            // width: 'flex',
            width: "calc(100vh - 16px)",
            height: '95vh',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CssBaseline />
          {/* <Grid item xs={false} sm={4} md={7} className={classes.image} /> */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            component={Paper}
            elevation={6}
            square
            className={classes.main}
          >
            <div className={classes.paper}>
              {/* <Typography variant="h5" className={${classes.title}}>
            <b>Lynx Admin</b>
          </Typography> */}
              <div
                style={{
                  color: 'navy',
                  display: 'flex',
                  flexDirection: 'row',
                  alignContent: 'flex-end',
                  marginTop: '20px',
                  marginBottom: '20px',
                }}
              >
                <img src={Art_Img} alt='' width='35px' height='35px'></img>
                <h2 className='ml-2 '>FirstStep.ai</h2>
              </div>

              {/* <Avatar className={classes.avatar}> */}
              {/* <img className={classes.image} />
               */}
              <Grid className={classes.image} />

              {/* item xs={false} sm={4} md={7} */}
              {/* </Avatar> */}
              <h6 component='h5' variant='h5' className='text-muted'>
                Sign in to access your Machine Learning projects
              </h6>
              <form className={classes.form} noValidate>
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  error={!stateIsEmailValid}
                  fullWidth
                  // label='Email Address'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  id='exampleEmail'
                  placeholder='Email here...'
                  value={state.email}
                  helperText={
                    stateIsEmailValid ? '' : utils.Constants.emailError
                  }
                  onChange={_onChange}
                  onBlur={onBlurHandler}
                  invalid={!stateIsEmailValid}
                  valid={state.email ? stateIsEmailValid : false}
                />
                <TextField
                  variant='outlined'
                  margin='normal'
                  required
                  fullWidth
                  error={!stateIsPasswordValid}
                  // label='Password'
                  type='password'
                  helperText={
                    stateIsPasswordValid ? '' : utils.Constants.passwordError
                  }
                  id='password'
                  autoComplete='current-password'
                  type='password'
                  name='password'
                  placeholder='Password here...'
                  value={state.password}
                  onChange={_onChange}
                  onBlur={onBlurHandler}
                  invalid={!stateIsPasswordValid}
                  valid={state.password ? stateIsPasswordValid : false}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Button
                    align='center'
                    // fullWidth
                    // width='50%'
                    // alignItems='center'
                    justifyContent='center'
                    variant='contained'
                    color='primary'
                    // width='40px'
                    disabled={
                      stateLoader || !state.email || !state.password.length > 7
                    }
                    className={classes.submit}
                    onClick={onLogin}
                  >
                    {stateLoader ? (
                      <div style={{ width: '130px' }}>
                        <Spinner
                          style={{ width: '5px', height: '20px' }}
                          color='light'
                        />
                      </div>
                    ) : (
                      'Login to Dashboard'
                    )}
                  </Button>
                </div>
                <hr color='#a6a6a6' />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <LoginWithGmail
                    style={{
                      backgroundColor: 'blue',
                      color: 'dark',
                    }}
                    className='dark'
                  />
                </div>
                {/* <Grid container>
                  <Grid item xs>
                    <Link
                      style={{ cursor: 'pointer' }}
                      variant='body2'
                      onClick={onClickForgotPassword}
                    >
                      Already Verified?
                    </Link>
                  </Grid>
                </Grid> */}
              </form>
            </div>
          </Grid>
          <Grid
            style={{
              marginTop: '30px',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            <Copyright />
          </Grid>
        </div>
      </Grid>
    </div>
  )
}
