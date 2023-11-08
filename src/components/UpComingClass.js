import React from 'react';


const UpComingClass = () => {
  return (
    <div className='upcoming'>
        <div className="text-center">
            <h2>Kelas yang akan datang</h2>
        </div>

        <div className='container pb-5 mt-5'>
            <div className='row justify-content-md-center w-75 mx-auto'>

                <div className='col-md-4 mx-auto m-4 ps-0' style={{'width' : '305px', 'borderRadius': '15px'}}>
                    <div className='content border'>
                        <img src='http://assets.wirabasa.com/Kelas_Kepewaraan_Batch_1.png' alt='' />
                        <h3 className='mt-4 ms-3'>Teknik asik jadi pewara</h3>
                        <p className='ms-3'>15:00 - 1 January 2024</p>
                    </div>
                </div>

                <div className='col-md-4 mx-auto m-4 ps-0' style={{'width' : '305px', 'borderRadius': '15px'}}>
                    <div className='content border'>
                        <img src='http://assets.wirabasa.com/Kelas_Kepewaraan_Batch_1.png' alt='' />
                        <h3 className='mt-4 ms-3'>Teknik asik jadi pewara</h3>
                        <p className='ms-3'>15:00 - 1 January 2024</p>
                    </div>
                </div>

                <div className='col-md-4 mx-auto m-4 ps-0' style={{'width' : '305px', 'borderRadius': '15px'}}>
                    <div className='content border'>
                        <img src='http://assets.wirabasa.com/Kelas_Kepewaraan_Batch_1.png' alt='' />
                        <h3 className='mt-4 ms-3'>Teknik asik jadi pewara</h3>
                        <p className='ms-3'>15:00 - 1 January 2024</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default UpComingClass