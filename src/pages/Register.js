import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../utils/UserContext';
import { Link } from 'react-router-dom';
import  { API_URI } from '../utils/config';

const Register = () => {
    const [isFailed, setIsFailed] = useState(false);
    const [userForm, setUserForm] = useState({
      username: '',
      email: '',
      password1: '',
      password2: ''
    });

    const navigate = useNavigate();

    const { user, setUser } = useUser();

    const handleRegister = async (e) => {
        e.preventDefault();
        if(userForm.password1 !== userForm.password2){
          setIsFailed(true);
          setUserForm({
            username: '',
            email: '',
            password1: '',
            password2: ''
          })
          return;
        }

        const userData = {
          username: userForm.username,
          email: userForm.email,
          password: userForm.password1
      }

        try {
          const response = await axios.post( API_URI + 'create-user/', userData, {
              headers:{
                'Content-Type': 'application/json'
              },
              withCredentials: true
          });

            localStorage.clear();
            localStorage.setItem('access_token', response.data['access']);
            localStorage.setItem('refresh_token', response.data['refresh']);

            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;

            if(localStorage.getItem('access_token')){
              try {
                const response = await axios.get( API_URI + 'user/');
                localStorage.setItem('user', JSON.stringify(response.data))
                setUser(response.data)
              } catch (error) {
                console.error(error);
              }
            }
            navigate('/');

        } catch (error) {
            setIsFailed(true);
            setUserForm({
              username: '',
              email: '',
              password1: '',
              password2: ''
            })
            console.error(error);
        }
    }

    
  return (
    <div id='auth' style={{height: '100%'}}>
      <div className='container'>
        <div className="row pt-5">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
            <div className="card border-0 shadow rounded-4 my-5">
              <div className="card-body p-4 p-sm-5">

                <h2 className="card-title text-center mb-2">SIGN UP</h2>

                {isFailed &&
                <div className='text-center text-danger my-5 error' role='alert'> 
                  <p>Invalid register, please try again</p>
                </div> }


                <form method="post" onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" 
                        className="form-control" 
                        name="username" 
                        placeholder="username" 
                        required
                        value={userForm.username}
                        onChange={e => setUserForm({...userForm, username: e.target.value})} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" 
                        className="form-control" 
                        name="email" 
                        required
                        placeholder="example@wirabasa.com"
                        value={userForm.email}
                        onChange={e => setUserForm({...userForm, email: e.target.value})} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" 
                        className="form-control" 
                        name="password1" 
                        required
                        value={userForm.password1}
                        onChange={e => setUserForm({...userForm, password1: e.target.value})} />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        name="password2" 
                        required
                        value={userForm.password2}
                        onChange={e => setUserForm({...userForm, password2: e.target.value})} />
                  </div>

                  <p>password minimum of 8 characters in length and includes a combination of letters and numbers.</p>


                  
                  <div className="d-grid">
                    <button className="btn rounded-5 px-4 pb-2" type="submit" style={{backgroundColor: '#2E8BC0'}}>Sign Up</button>
                  </div>
                  
                </form>

                <p className="text-center mt-4">Do not have an account? <Link to='/login'>Sign In</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register