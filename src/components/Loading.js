import React from 'react'
import Thunbnail from '../assets/bg.jpg'

const Loading = () => {
  return (
    <div className="col-md-4 mt-3 ms-3">
        <img src={Thunbnail} className='live-thumbnail rounded' />
        <div className='ms-2 mt-2'>
            <h5>Strategi Menulis Karya Tulis ...</h5>
            <p>07:00 - 3 June 2023</p>
            <a href='' className='btn'>Join Live</a>
        </div>
    </div>
  )
}

export default Loading