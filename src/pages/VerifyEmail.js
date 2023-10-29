import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  { API_URI } from '../utils/config';

const VerifyEmail = () => {
    const { user_id, token } = useParams();
    const navigate = useNavigate();

    const verify = async () => {
        try {
            const response = await axios.get(API_URI + `verify-email/${user_id}/${token}`);
            console.log(response.status);
            if (response.status === 200){
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
        }

    } 

    useEffect(()=> {
        verify();
    }, [user_id, token])
  return (
    <div></div>
  )
}

export default VerifyEmail