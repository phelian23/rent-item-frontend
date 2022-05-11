import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addToFavourites } from '../redux/actions/favourites'

const ScooterDetails = () => {
  const dispatch = useDispatch()
  const scooters = useSelector((state) => state.items.scooters)

    const scooter = scooters.find((scooter) => scooter.display === true)
    const user = JSON.parse(localStorage.getItem('user-data'))

    const addToFavouritesHandler = () => {
      const data = {
        user_id: user.id,
        item_id: scooter.id
      }
      dispatch(addToFavourites(data))
    }

  return (
    <div className='text-lg-center'>
        <div className="p-3 text-center">
        <h1>Scooter Details</h1>
        </div>
        <div>
        <div className="details-card mx-auto text-center">
          <img className="card-img-det" src={scooter.photo} alt="Card cap" />
          <div className="card-body d-flex justify-content-between img-text">
            <h5 className="card-title">{scooter.name}</h5>
            <p className="card-text">{scooter.price}</p>
          </div>
        </div>
        <div className='p-3 text-left text-lg-center'>
            <p>About this scooter</p>
            <p className="card-text">{scooter.description}</p>
        </div>
        </div>
        <button className="btn btn-primary add-btn mx-auto" onClick={() => addToFavouritesHandler()}>Add to Favourites</button>
    </div>
  )
}

export default ScooterDetails