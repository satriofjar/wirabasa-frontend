import React from 'react'
import Thunbnail from '../assets/bg.jpg'
import { Link } from 'react-router-dom'

const MyClass = () => {
  return (
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
  )
}

export default MyClass