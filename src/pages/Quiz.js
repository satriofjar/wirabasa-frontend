import React from 'react';
import Arrow from '../assets/arrow.png';

const Quiz = () => {
  return (
    <div id='quiz'>
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-lg-7 col-md-7 col-lg-5 mx-auto mt-5'>
                    <div className='card border-0 shadow my-5 rounded-5'>
                        <div className='card-body p-4 p-sm-5'>
                            <h2 className='card-title text-center mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</h2>
                            
                            <div className='row row-cols-2 mt-5'>
                                <div className='col text-center ps-0 my-3'>
                                    <p className='rounded-5 answare py-2 wrong'>jawaban 1</p>
                                </div>
                                <div className='col text-center ps-0 my-3'>
                                    <p className='rounded-5 answare py-2 correct'>jawaban 1</p>
                                </div>
                                <div className='col text-center ps-0 my-3'>
                                    <p className='rounded-5 answare py-2'>jawaban 1</p>
                                </div>
                                <div className='col text-center ps-0 my-3'>
                                    <p className='rounded-5 answare py-2'>jawaban 1</p>
                                </div>
                            </div>
                            

                            <div className='row mt-5'>
                                <div className='col'>
                                    <a className='btn rounded-4 px-3'><img src={Arrow} alt='' className='prev-arrow' /> Prev</a>
                                </div>
                                <div className='col text-end'>
                                    <a className='btn rounded-4 px-3'>Next<img src={Arrow} alt='' className='next-arrow' /></a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Quiz