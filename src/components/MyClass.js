import React, { useEffect, useState } from 'react';
import axios from 'axios';
import formatDate from '../utils/formatDate';
import Loading from './Loading';
import { API_URI } from '../utils/config';

const MyClass = () => {

    const [kelas, setKelas] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getClasses = async () => {
        try {
            const response = await axios.get( API_URI + 'ordered-classes/');
            setKelas(response.data);
            setIsLoading(false);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        setTimeout(getClasses, 1000);
    }, [])

  return (
        <div className="live-class my-5">
            <h2 className="">Live class</h2>
    
            <div className="row my-5">
                {isLoading? <Loading />:
                <>
                    {kelas?.map((e, _index) => 
                        <div className="col-md-4 mt-3 ms-3" key={_index}>
                            <img src={e.poster} className='live-thumbnail rounded' />
                            <div className='ms-2 mt-2'>
                                <h5>{e.topic}</h5>
                                <p>{formatDate(true, e.schedule)}</p>
                                <a href={e.zoom_link}  target="_blank" className='btn'>Join Live</a>
                            </div>
                        </div>)}
                </>
                }
    
            </div>
        </div>
  )
}

export default MyClass