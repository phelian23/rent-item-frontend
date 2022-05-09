import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addNewScooter } from '../redux/actions/items'

const AddScooter = () => {
  const [scooter, setScooter] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setScooter({
      ...scooter,
      [e.target.name]: e.target.value,
    })
  }

  const handleAddSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewScooter(scooter))
    setScooter({
      name: '',
      price: '',
      description: '',
      image: '',
    })
    navigate('/')
  }

  return (
    <div className='auth-con'>
      <div className='auth-form'>
        <div className='auth-cont'>
        <h1>Add Scooter</h1>
      <form onSubmit={handleAddSubmit}>
        <div className="form-group my-3">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            className="form-input1"
            id="exampleInputName"
            placeholder="Enter Name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3 mx-3 mx-lg-0">
          <label htmlFor="exampleInputImage">Image</label>
          <input
            type="text"
            className="form-input1"
            id="exampleInputImage"
            placeholder="Enter Image"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3 mx-3 mx-lg-0">
          <label htmlFor="exampleInputPrice">Price</label>
          <input
            type="text"
            className="form-input1"
            id="exampleInputPrice"
            placeholder="Enter Price"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3 mx-3 mx-lg-0">
          <label htmlFor="exampleInputDescription">Description</label>
          <textarea
            className="form-input1"
            id="exampleInputDescription"
            rows="3"
            placeholder="Enter Description"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      </div>
    </div>
  )
}

export default AddScooter