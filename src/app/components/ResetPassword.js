import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const ResetPassword = () => {
    const [user, setUser] = useState({
        email: '',
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
        setErrors(errors)
        if (Object.keys(errors).length === 0) {
            alert(`
                Password reset email sent!
            `)
        }
    }

  return (
    <div className='auth-con'>
    <div className='auth-form'>
      <div className='auth-cont'>
        <h1>Reset Password</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group m-3">
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
                <small>We'll never share your email with anyone else.</small>
            </div>
            <Button variant="primary" type="submit">
                Reset Password
            </Button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default ResetPassword