import React from 'react';
import Placeholder from '../assets/placeholder.png';

const Loading = () => {
  return (
    <div className="col-md-4 mt-3 ms-3">
        <img src={Placeholder} className='live-thumbnail rounded' />
        <div className='ms-2 mt-2'>
            <h5>Title class</h5>
            <p></p>
            <a href='' className='btn'>Join Live</a>
        </div>
    </div>
  )
}

export default Loading