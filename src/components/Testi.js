import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testi = () => {
    const setting = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 780, // Perangkat mobile
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1000, // Perangkat mobile
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      }

  return (
    <div className='testi' id='Testimoni'>
        <div className='container text-center'>

            <div className="text-center">
                <h2>Kata mereka yang pernah menggunakan wirabasa</h2>
            </div>

            <div className='cntnr mt-5 text-center'>
            <Slider {...setting} >
                
                <div className='rounded-3 item px-4 pt-5'>
                    <p className='text-start mt-5 message'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='d-flex profile mb-3'>
                        <div className=''>
                        {/* <img src={} className='rounded-circle' alt='' /> */}
                        </div>
                        <div className='ms-3'>
                            <h5 className=''>Summer violet</h5>
                            <p className='title-profile'>CEO Juxt Corporate</p>
                        </div>
                    </div>
                </div>
                
                <div className='rounded-3 item px-4 pt-5'>
                    <p className='text-start mt-5 message'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='d-flex profile mb-3'>
                        <div className=''>
                        {/* <img src={} className='rounded-circle' alt='' /> */}
                        </div>
                        <div className='ms-3'>
                            <h5 className=''>Summer violet</h5>
                            <p className='title-profile'>CEO Juxt Corporate</p>
                        </div>
                    </div>
                </div>
                
                <div className='rounded-3 item px-4 pt-5'>
                    <p className='text-start mt-5 message'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='d-flex profile mb-3'>
                        <div className=''>
                        {/* <img src={} className='rounded-circle' alt='' /> */}
                        </div>
                        <div className='ms-3'>
                            <h5 className=''>Summer violet</h5>
                            <p className='title-profile'>CEO Juxt Corporate</p>
                        </div>
                    </div>
                </div>
                
                <div className='rounded-3 item px-4 pt-5'>
                    <p className='text-start mt-5 message'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className='d-flex profile mb-3'>
                        <div className=''>
                        {/* <img src={} className='rounded-circle' alt='' /> */}
                        </div>
                        <div className='ms-3'>
                            <h5 className=''>Summer violet</h5>
                            <p className='title-profile'>CEO Juxt Corporate</p>
                        </div>
                    </div>
                </div>

            </Slider>
            </div>

        </div>

    </div>
  )
}

export default Testi