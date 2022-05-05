import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { displayScooter, getAllScooters } from '../redux/actions/items'
import { useDispatch, useSelector } from 'react-redux'

const ScooterList = () => {
  const dispatch = useDispatch()
  const scooters = useSelector((state) => state.items.scooters)
  console.log(scooters)

  useEffect(() => {
    dispatch(getAllScooters())
  }, [dispatch])

  return (
    <div className='scoot-list-cont'>
        <div className="text-center p-3">
        <h1>Scooter List</h1>
        </div>
        <div className="list-wrapper">
            <ul className="d-flex list-con">
                {scooters.map(scooter => (
                    <li className="list-group-item col-md-4" key={scooter.id}>
                      <Link to={`/scooter/${scooter.id}`} onClick={() => dispatch(displayScooter(scooter.id))} >
                        <div className="scoot-card">
                            <img className="card-img-top" src={scooter.photo} alt="Card cap" />
                            <div className="card-body d-flex justify-content-between mt-4">
                                <h5 className="card-title">{scooter.name}</h5>
                                <p className="card-text">{scooter.price}</p>
                            </div>
                        </div>
                      </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ScooterList