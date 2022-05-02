import React from 'react'

const AddScooter = () => {
  return (
    <div className='auth-con'>
      <div className='auth-form'>
        <div className='auth-cont'>
        <h1>Add Scooter</h1>
      <form>
        <div className="form-group my-3">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="text"
            className="form-input1"
            id="exampleInputName"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group mb-3 mx-3 mx-lg-0">
          <label htmlFor="exampleInputImage">Image</label>
          <input
            type="text"
            className="form-input1"
            id="exampleInputImage"
            placeholder="Enter Image"
          />
        </div>
        <div className="form-group mb-3 mx-3 mx-lg-0">
          <label htmlFor="exampleInputPrice">Price</label>
          <input
            type="text"
            className="form-input1"
            id="exampleInputPrice"
            placeholder="Enter Price"
          />
        </div>
        <div className="form-group mb-3 mx-3 mx-lg-0">
          <label htmlFor="exampleInputDescription">Description</label>
          <textarea
            className="form-input1"
            id="exampleInputDescription"
            rows="3"
            placeholder="Enter Description"
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