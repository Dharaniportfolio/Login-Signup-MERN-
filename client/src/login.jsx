import axios from 'axios'  // To Post the data
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
function Login(){
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/login',{email,password})
    .then((result) => 
        {console.log(result)
        if(result.data === 'success'){
            navigate('/home')
        }
        else{
            alert("invalid credentials")
        }     
    })
    .catch((err)=> console.log(err))
    // Reset form fields
    setEmail('')
    setPassword('')

  }
  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
    <div className="col-md-6">
    <div className="card">
        <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
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
                <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;