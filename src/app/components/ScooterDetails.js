import React from 'react'

const ScooterDetails = () => {
    const scooters = [
        {
            id: 1,
            name: 'Scooter 1',
            description: 'This is a description for scooter 1',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            price: '$100',
        }
        ];

    const scooter = scooters[0];

  return (
    <div className='text-lg-center'>
        <div className="p-3 text-center">
        <h1>Scooter Details</h1>
        </div>
        <div>
        <div className="details-card mx-auto text-center">
          <img className="card-img-det" src={scooter.image} alt="Card cap" />
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
        <button className="btn btn-primary add-btn mx-auto">Add to Favourites</button>
    </div>
  )
}

export default ScooterDetails