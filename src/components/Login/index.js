import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    isSuccessError: false,
    isShowPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    const firstLetter = errorMsg.charAt(0)
    const remainingLetters = errorMsg.substring(1)
    const capitalizedFirstLetter = firstLetter.toUpperCase()
    const capitalizedWord = capitalizedFirstLetter + remainingLetters
    this.setState({isSuccessError: true, errorMsg: capitalizedWord})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, isSuccessError, errorMsg, isShowPassword} =
      this.state
    const inputType = isShowPassword ? 'text' : 'password'
    return (
      <div className="login-page">
        <form onSubmit={this.onSubmitLoginForm} className="login-form">
          <h1 className="login-title">Travel Trip</h1>
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            onChange={this.onChangeUsername}
            value={username}
            className="input-username"
            id="username"
            type="text"
            placeholder="Username"
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <div className="input-password-container">
            <input
              onChange={this.onChangePassword}
              value={password}
              className="input-password"
              id="password"
              type={inputType}
              placeholder="Password"
            />
            {isShowPassword ? (
              <button
                onClick={this.onClickShowPassword}
                className="btn-password-toggle"
                data-testid="show-password"
                type="button"
              >
                <AiOutlineEyeInvisible className="password-icon" />
                <p className="password-visible-text">Password visible</p>
              </button>
            ) : (
              <button
                onClick={this.onClickShowPassword}
                className="btn-password-toggle"
                data-testid="show-password"
                type="button"
              >
                <AiOutlineEye className="password-icon" />
                <p className="password-visible-text">Password visible</p>
              </button>
            )}
          </div>
          {isSuccessError && <p className="error-message">{errorMsg}</p>}
          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default Login
