import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Validation from './Validation'


const SignUp = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errors = Validation(user)
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            alert(`
                Welcome ${user.name}!
            `)
        }
    }

  return (
    <div className='auth-con'>
    <div className='auth-form'>
      <div className='auth-cont'>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group m-3">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-input1"
                    placeholder="Enter name"
                    onChange={handleChange}
                    value={user.name}
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
            <div className="form-group mb-3 mx-3 mx-lg-0">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input1"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={user.email}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
            </div>
            <div className='form-group mb-3 mx-3 mx-lg-0'>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-input1"
                    placeholder="Password"
                    onChange={handleChange}
                    value={user.password}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
            </div>
            <div className='form-group mb-3 mx-3 mx-lg-0'>
                <label htmlFor="password2">Confirm Password</label>
                <input
                    type="password"
                    name="password2"
                    id="password2"
                    className="form-input1"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    value={user.password2}
                />
                {errors.password2 && <p className="text-danger">{errors.password2}</p>}
            </div>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </form>
        <p>Already have an account?</p>
        <Button variant='primary' as={Link} to="/signin">Sign In</Button>
      </div>
      </div>
    </div>
  )
}

export default SignUp