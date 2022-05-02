import React from 'react'
import { Link } from 'react-router-dom'

const ScooterList = () => {
  const scooters = [
    {
        id: 1,
        name: 'Scooter 1',
        description: 'This is a description for scooter 1',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: '$100',
    },
    {
        id: 2,
        name: 'Scooter 2',
        description: 'This is a description for scooter 2',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: '$200',
    },
    {
        id: 3,
        name: 'Scooter 3',
        description: 'This is a description for scooter 3',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: '$300',
    },
    {
        id: 4,
        name: 'Scooter 4',
        description: 'This is a description for scooter 4',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: '$400',
    }
    ];
  return (
    <div className='scoot-list-cont'>
        <div className="text-center p-3">
        <h1>Scooter List</h1>
        </div>
        <div className="list-wrapper">
            <ul className="d-flex list-con">
                {scooters.map(scooter => (
                    <li className="list-group-item col-md-4" key={scooter.id}>
                      <Link to={`/scooter/${scooter.id}`}>
                        <div className="scoot-card">
                            <img className="card-img-top" src={scooter.image} alt="Card cap" />
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