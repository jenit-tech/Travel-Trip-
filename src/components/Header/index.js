import {FiHome} from 'react-icons/fi'
import {RiSuitcase2Line} from 'react-icons/ri'
import {TbLogout2} from 'react-icons/tb'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <header className="header-container">
      <nav className="header-nav-lg-container">
        <h1 className="header-lg-heading">
          <Link className="header-link-lg-item" to="/">
            Travel Trip
          </Link>
        </h1>

        <div className="header-nav-list-lg">
          <div className="header-nav-item-lg">
            <Link className="header-link-lg-item header-link-lg-home" to="/">
              Home
            </Link>
            <Link
              className="header-link-icon header-link-sm-home header-icon-text"
              to="/"
            >
              <FiHome className="header-icon" />
              Home
            </Link>
          </div>
          <div className="header-nav-item-lg">
            <Link
              className="header-link-lg-item header-link-lg-mytrips"
              to="/my-trips"
            >
              My Trips
            </Link>
            <Link
              className="header-link-icon header-link-sm-mytrips"
              to="/my-trips"
            >
              <RiSuitcase2Line className="header-icon" />
              <p className="header-icon-text">My Trips</p>
            </Link>
          </div>
          <div className="header-sm-logout-container">
            <button
              onClick={onClickLogoutButton}
              type="button"
              className="header-logout-btn-sm header-link-icon"
            >
              <TbLogout2 className="header-icon" />
              <p className="header-icon-text">Logout</p>
            </button>
          </div>
        </div>

        <button
          onClick={onClickLogoutButton}
          type="button"
          className="header-logout-btn-lg"
        >
          Logout
        </button>
      </nav>
    </header>
  )
}

export default withRouter(Header)
