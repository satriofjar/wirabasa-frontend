import React from 'react'
import Thunbnail from '../assets/bg.jpg'
import { Link } from 'react-router-dom'

const MyClass = () => {
  return (
    <>
        <div className="live-class my-5">
            <h2 className="">Live class</h2>
    
            <div className="row my-5">
            
                <div className="col-md-4 mt-3 ms-3">
                        <img src={Thunbnail} className='live-thumbnail rounded' />
                    <div className='ms-2 mt-2'>
                        <h5>Strategi Menulis Karya Tulis ...</h5>
                        <p>07:00 - 3 June 2023</p>
                        <a href='' className='btn'>Join Live</a>
                    </div>
                </div>
            
                <div className="col-md-4 mt-3 ms-3">
                        <img src={Thunbnail} className='live-thumbnail rounded' />
                    <div className='ms-2 mt-2'>
                        <h5>Strategi Menulis Karya Tulis ...</h5>
                        <p>07:00 - 3 June 2023</p>
                        <a href='' className='btn'>Join Live</a>
                    </div>
                </div>
            
                <div className="col-md-4 mt-3 ms-3">
                        <img src={Thunbnail} className='live-thumbnail rounded' />
                    <div className='ms-2 mt-2'>
                        <h5>Strategi Menulis Karya Tulis ...</h5>
                        <p>07:00 - 3 June 2023</p>
                        <a href='' className='btn'>Join Live</a>
                    </div>
                </div>
    
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