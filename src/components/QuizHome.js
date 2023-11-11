import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';

const QuizHome = () => {
    const quizes = useSelector(state => state.quiz.data);
    const [cookies, setCookie, removeCookie] = useCookies();

    useEffect(() => {
        setCookie('answares', []);
    }, [])
  return (
    <div id='quiz'>
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-lg-7 col-md-7 col-lg-5 mx-auto mt-5'>
                    <div className='card border-0 shadow my-5 rounded-5'>
                        <div className='card-body p-4 p-sm-5'>
                            <h2 className='card-title text-center mb-5'>Kuis WiraBasa</h2>
                            <table className='table table-borderless w-50 mx-auto'>
                                <tbody>
                                    <tr>
                                        <td scope="col">Jumlah soal</td>
                                        <td scope="col">{ quizes?.number_of_questions }</td>
                                    </tr>
                                    <tr>
                                        <td scope="col">Jenis soal</td>
                                        <td scope="col">Pilihan ganda</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className='text-center mt-5'>
                                <Link to={{pathname:'/quiz/', search:'?id=1'}} className='btn'>Mulai sekarang!</Link>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default QuizHome