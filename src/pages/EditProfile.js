import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import LeftArrow from '../assets/left-arrow.png';
import LogoNav from '../assets/LogoNav.png';


const EditProfile = () => {
  return (
    <div id='edit-profile'>

        <Helmet>
            <meta charSet="utf-8" />
            <title>Payment - WiraBasa</title>
        </Helmet>

        <div className="nav">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Link to='/user'><img src={LeftArrow} alt="" width="30" className="pt-2" /></Link>
                    </div>
                    <div className="col-7">
                        <div className="d-flex pt-1">
                            <img className="icon" src={LogoNav} alt="" />
                            <h3 className="title ms-3">WiraBasa</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className='container mt-5'>
            <form method="post" encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control w-50" />
              </div>

              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input type="text" className="form-control w-50" />
              </div>

              <div className="mt-2">
                <label className="form-label">Photo</label>
                <input type="file" className="form-control w-50"/>
              </div>

              <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EditProfile