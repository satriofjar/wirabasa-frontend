import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../utils/UserContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isFailed, setIsFailed] = useState(false);

    const navigate = useNavigate();

    const { user, setUser } = useUser();

    const handleLogin = async (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/v1/token/', user, {
                headers:{
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(response.data);
            localStorage.clear();
            localStorage.setItem('access_token', response.data['access']);
            localStorage.setItem('refresh_token', response.data['refresh']);

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;

            if(localStorage.getItem('access_token')){
              try {
                const response = await axios.get('http://127.0.0.1:8000/v1/user/');
                console.log(response.data);

                localStorage.setItem('user', JSON.stringify(response.data))
                setUser(response.data)
              } catch (error) {
                console.error(error);
              }
            }
            navigate('/');
        
        } catch (error) {
            setIsFailed(true);
            setEmail('');
            setPassword('');
            console.error(error);
        }
    }

  return (
    <div id='auth'>
      <div className='container'>
        <div className="row pt-5">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
            <div className="card border-0 shadow rounded-4 my-5">
              <div className="card-body p-4 p-sm-5">

                <h2 className="card-title text-center mb-2">SIGN IN</h2>

                {isFailed &&
                <div className='text-center text-danger my-5 error' role='alert'> 
                  <p>Invalid login, please try again</p>
                </div> }


                <form method="post" onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" 
                        className="form-control" 
                        id="inputEmail1" 
                        name="email" 
                        placeholder="example@eirabasa.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="inputPassword" 
                        name="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                  </div>

                  
                  <div className="d-grid">
                    <button className="btn rounded-5 px-4 pb-2" type="submit" style={{backgroundColor: '#2E8BC0'}}>Sign In</button>
                  </div>
                  
                </form>

                <p className="text-center mt-4">Do not have an account? <Link to='/register' >Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login