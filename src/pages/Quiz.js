import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import queryString from 'query-string';
import axios from 'axios';
import  { API_URI } from '../utils/config';
import Arrow from '../assets/arrow.png';

const Quiz = () => {
    const location = useLocation();
    const search = location.search;
    const queryParams = queryString.parse(search);
    const questionId = queryParams.id;

    const [questions, setQuestions] = useState();
    const [question, setQuestion] = useState();
    const [clicked, setClicked] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();

    const getQuiz = async () => {
        try {
            const response = await axios.get(API_URI + 'quiz/');
            setQuestions(response.data.question_set);
            setCookie('questions', response.data.question_set);
            setQuestion(response.data.question_set.find(question => question.id === parseInt(questionId)));
            console.log(response.data.question_set);
        } catch (error) {
            console.error(error);
        }
    }

    const handleClick = (_index) => {
        question?.answare_set.map((answare, i) => {
            if(_index === i){
                return {...question?.answare_set, selected: true}
            }else{
                return {...question?.answare_set, selected: false}
            }
        })
    }

    useEffect(() => {
        getQuiz();
        const foundQuestions = cookies.questions? cookies.questions : questions;
        setQuestion(foundQuestions.find(question => question.id === parseInt(questionId)));
    },[]);


  return (
    <div id='quiz'>
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-lg-7 col-md-7 col-lg-5 mx-auto mt-5'>
                    <div className='card border-0 shadow my-5 rounded-5'>
                        <div className='card-body p-4 p-sm-5'>
                            <h2 className='card-title text-center mb-5'>{ question?.text }</h2>
                            
                            <div className='row row-cols-2 mt-5'>
                                {question?.answare_set.map((answare, _index) => 
                                   <div key={_index} className='col text-center ps-0 my-3'>
                                     <p className={`rounded-5 answare py-2 ${answare.selected && (answare.is_correct ? 'correct': 'wrong')}`} 
                                        onClick={() => handleClick(_index)}>
                                        { answare.text }
                                    </p>
                                   </div> )}
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