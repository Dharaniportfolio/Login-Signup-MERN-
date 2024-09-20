import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'  // To Post the data
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      setMessage('Please fill in all fields')
      return
    }
    axios.post('http://localhost:3000/register',{name,email,password})
    .then((result) => {
      console.log(result)
      navigate('/login')
    })
    .catch((err)=> console.log(err))
    // Reset form fields
    setName('')
    setEmail('')
    setPassword('')

  }


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <h2>Register</h2>
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
              </form>
              {message && <div className="alert alert-info mb-3">{message}</div>}
              <div className="text-center">
              <p className="mb-2">Already have an account?</p>
                <button className="btn btn-secondary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup