import React, { useState, useEffect } from 'react';
import axios from 'axios';
import formatDate from '../utils/formatDate';
import  { API_URI } from '../utils/config';

const UpComingClass = () => {
    const [classes, setClasses] = useState();

    const getClasses = async () => {
        try {
            const response = await axios.get(API_URI + 'all-classes/');
            setClasses(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getClasses();
    },[])

  return (
    <div className='upcoming'>
        <div className="text-center">
            <h2>Kelas yang akan datang</h2>
        </div>

        <div className='container pb-5 mt-5'>
            <div className='row justify-content-md-center w-75 mx-auto'>

                {classes?.map((kelas, _index) => 
                <div key={_index} className='col-md-4 mx-auto m-4 ps-0' style={{'width' : '305px', 'borderRadius': '15px'}}>
                    <div className='content border'>
                        <img src={kelas.poster} alt='' />
                        <h3 className='mt-4 ms-3'>{kelas.title}</h3>
                        <p className='ms-3'>{formatDate(true, kelas.schedule)}</p>
                    </div>
                </div>)}

            </div>
        </div>
    </div>
  )
}

export default UpComingClass