import React, { useState } from 'react'
import axios from 'axios'

export default function Signup() {
    let [name, setName] = useState('')

    let handleName = (e) => {
        setName(e.target.value)
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        // check if both passwords entered are the same
        const newUser = {
            name: name,
            email: email,
            password: password
        }

        axios.post('http://localhost:5000/api/users/register', newUser)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return(
        <div className="row mt-4">
        <div className="col-md-7 offset-md-3">
          <div className="card card-body">
            <h2 className="py-2">Signup</h2>
            <form action="/ideas" method="post" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onInput={handleName} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onInput={handleEmail} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onInput={handlePassword} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input type="password" name="password2" value={password2} onInput={handlePassword2} className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary float-right">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
}