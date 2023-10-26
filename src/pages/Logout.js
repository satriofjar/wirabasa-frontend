import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useUser } from '../utils/UserContext';
import  { API_URI } from '../utils/config';

const Logout = () => {
    const navigate = useNavigate();
    const { user, setUser } = useUser();

    useEffect(() => {
        (async () => {
            try {
                await axios.post( API_URI + 'logout/', {
                    refresh_token: localStorage.getItem('refresh_token')
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    withCredentials: true
                });
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                setUser(null);
                navigate('/');
                // window.location.reload()
            } catch (error) {
                console.error(error);
            }
        })();
    } , [])
  return (
    <div></div>
  )
}

export default Logout;