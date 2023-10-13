import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.post('http://127.0.0.1:8000/v1/logout/', {
                    refresh_token: localStorage.getItem('refresh_token')
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    withCredentials: true
                });
                localStorage.clear();
                axios.defaults.headers.common['Authorization'] = null;
                navigate('/');
            } catch (error) {
                console.error(error);
            }
        })();
    } , [])
  return (
    <div></div>
  )
}

export default Logout