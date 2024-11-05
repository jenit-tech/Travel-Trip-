import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header className="home-header" />
    <div className="home-content-wrapper">
      <img
        src="https://res.cloudinary.com/dkd9zrifr/image/upload/v1710859670/image_5_mbr5qa.png"
        alt="Travel"
        className="home-main-image"
      />
      <div className="home-text-container">
        <h1 className="home-heading">Travel. Relax. Memories.</h1>
        <p className="home-description">
          With Travel Trip you can experience new adventures and visit the best
          tourist destinations.
        </p>
        <Link to="/book-a-new-trip">
          <button type="button" className="home-button">
            Book a new trip
          </button>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
