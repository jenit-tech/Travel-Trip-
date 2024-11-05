import {withRouter, Link} from 'react-router-dom'
import Header from '../Header'
import TravelTripContext from '../../context/TravelTripContext'

import './index.css'

const MyTrips = () => (
  <TravelTripContext.Consumer>
    {value => {
      const {myTripsList} = value
      const hasTrips = myTripsList.length >= 1

      return (
        <div className="trips-container">
          <Header className="header" />
          {!hasTrips && (
            <div className="no-trips-content">
              <img
                src="https://res.cloudinary.com/dsfextndf/image/upload/v1715695116/Vector_rjv87k.png"
                alt="no trips"
                className="no-trips-image"
              />
              <p className="no-trips-heading">No upcoming trips.</p>
              <p className="no-trips-description">
                When you book a trip, you will see your trip details here.
              </p>
              <Link to="/book-a-new-trip">
                <button className="no-trips-button" type="button">
                  Book a new trip
                </button>
              </Link>
            </div>
          )}
          {hasTrips && (
            <div className="trips-list">
              <h1 className="trips-heading">My Trips</h1>
              <ul className="trips-list-ul">
                {myTripsList.map(eachTrip => (
                  <li className="trip-item" key={eachTrip.id}>
                    <h1 className="trip-location">{eachTrip.endLocation}</h1>
                    <div>
                      <p className="trip-date-label">Date</p>
                      <p className="trip-date-range">{`${eachTrip.startDate} to ${eachTrip.endDate}`}</p>
                    </div>
                    <button type="button" className="trip-cancel-button">
                      Cancel
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }}
  </TravelTripContext.Consumer>
)

export default withRouter(MyTrips)
