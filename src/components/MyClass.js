import React, { useEffect, useState } from 'react'
import Thunbnail from '../assets/bg.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import formatDate from '../utils/formatDate'
import Loading from './Loading'

const MyClass = () => {

    const [kelas, setKelas] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getClasses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/v1/ordered-classes/');
            console.log(response.data);
            setKelas(response.data);
            setIsLoading(false);
            
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getClasses();
    }, [kelas])

  return (
    <>
        <div className="live-class my-5">
            <h2 className="">Live class</h2>
    
            <div className="row my-5">
                {isLoading? <Loading />:
                <>
                    {kelas?.map((e, _index) => 
                        <div className="col-md-4 mt-3 ms-3" key={_index}>
                            <img src={'http://127.0.0.1:8000' + e.poster} className='live-thumbnail rounded' />
                            <div className='ms-2 mt-2'>
                                <h5>{e.topic}</h5>
                                <p>{formatDate(true, e.schedule)}</p>
                                <a href={e.zoom_link} className='btn'>Join Live</a>
                            </div>
                        </div>)}
                </>
                }
    
            </div>
        </div>


    <div className="kelas my-5">
        <h2 className="">Kelas saya</h2>

        <div className="row my-5 ms-2">
        
            <div className="col-md-6 my-2">
               <Link>
                    <div className='row'>
                        <div className='col-4 vid-wraper'>
                            <img src={Thunbnail} className='rounded vid-thumbnail' />
                        </div>
                        <div className='col-8'>
                            <h5 className='my-2' style={{minWidth: '300px'}}>Strategi Menulis Karya Tulis Ilmiah yang Komersial</h5>
                            <p>100 Views</p>
                        </div>
                    </div>
               </Link>
            </div>
        
            <div className="col-md-6 my-2"> 
               <Link>
                    <div className='row'>
                        <div className='col-4 vid-wraper'>
                            <img src={Thunbnail} className='rounded vid-thumbnail' />
                        </div>
                        <div className='col-8'>
                            <h5 className='my-2' style={{minWidth: '300px'}}>Strategi Menulis Karya Tulis Ilmiah yang Komersial</h5>
                            <p>100 Views</p>
                        </div>
                    </div>
               </Link>
            </div>
        
            <div className="col-md-6 my-2">
               <Link>
                    <div className='row'>
                        <div className='col-4 vid-wraper'>
                            <img src={Thunbnail} className='rounded vid-thumbnail' />
                        </div>
                        <div className='col-8'>
                            <h5 className='my-2' style={{minWidth: '300px'}}>Strategi Menulis Karya Tulis Ilmiah yang Komersial</h5>
                            <p>100 Views</p>
                        </div>
                    </div>
               </Link>
            </div>
        
        </div>
    </div>
    </>
  )
}

export default MyClass