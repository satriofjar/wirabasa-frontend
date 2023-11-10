import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import queryString from 'query-string';
import axios from 'axios';
import  { API_URI } from '../utils/config';
import Arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';

const QuizQuestion = () => {
    const location = useLocation();
    const search = location.search;
    const queryParams = queryString.parse(search);
    const questionId = parseInt(queryParams.id);

    const [questions, setQuestions] = useState();
    const [question, setQuestion] = useState();
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies();

    const getQuiz = async () => {
        try {
            const response = await axios.get(API_URI + 'quiz/');
            setNumberOfQuestions(response.data.number_of_questions);
            setQuestions(response.data.question_set);
            setCookie('questions', response.data.question_set);
            setQuestion(response.data.question_set?.find(question => question.id === questionId));
        } catch (error) {
            console.error(error);
        }
    }

    const handleClick = (_index) => {
        if(!clicked){
            const updatedAnswers = question?.answare_set.map((answare, i) => {
                if(_index === i){
                    setCookie('answares', [...cookies.answares, {'answare': _index}])
                    return {...answare, selected: true}
                }else{
                    return {...answare, selected: false}
                }
            })
            setClicked(true);
            setQuestion({...question, answare_set: updatedAnswers});
        }
    }

    useEffect(() => {
        getQuiz();
    },[]);

    useEffect(() => {
        const foundQuestions = cookies.questions? cookies.questions : questions;
        const ques = foundQuestions.find(question => question.id === parseInt(questionId));
        setQuestion(ques);
        setClicked(false);
        try {
            const sevedAnsware =  cookies.answares[questionId - 1];
            if(sevedAnsware){
                const updatedAnswers = ques?.answare_set.map((answare, i) => {
                    if(sevedAnsware['answare'] === i){
                        return {...answare, selected: true}
                    }else{
                        return {...answare, selected: false}
                    }
                })
                setQuestion({...ques, answare_set: updatedAnswers});
                setClicked(true);
    
            }
            
        } catch (error) {
            
        }
    }, [questionId])

  return (
    <div id='quiz'>
        <div className='container'>
            <div className='row pt-5'>
                <div className='col-lg-7 mx-auto mt-5'>
                    <div className='card border-0 shadow my-5 rounded-5'>
                        <div className='card-body p-4 p-sm-5'>
                            <h2 className='card-title text-center mb-5'>{ question?.text }</h2>
                            
                            <div className='row row-cols-2 mt-5 question'>
                                {question?.answare_set.map((answare, _index) => 
                                   <div key={_index} className='col text-center ps-0 my-3'>
                                     <button className={`rounded-5 answare py-2 ${clicked && answare.is_correct ? 'correct': ''} ${answare.selected && (answare.is_correct ? 'correct': 'wrong')}`} 
                                        onClick={() => handleClick(_index)}>
                                        { answare.text }
                                    </button>
                                   </div> )}
                            </div>
                            

                            <div className='row mt-5'>
                                <div className='col'>
                                    {questionId === 1 ?
                                    <Link 
                                        to='/quiz' 
                                        className='btn rounded-4 px-3'>
                                            <img src={Arrow} alt='' className='prev-arrow' /> Prev
                                    </Link>:
                                    <Link 
                                        to={{pathname:'/quiz/', search: `?id=${questionId - 1}`}} 
                                        className='btn rounded-4 px-3'>
                                            <img src={Arrow} alt='' className='prev-arrow' /> Prev
                                    </Link>
                                    }
                                </div>
                                <div className='col text-end'>
                                    {questionId === numberOfQuestions ?
                                    <Link 
                                    to='/quiz'
                                    className='btn rounded-4 px-3'>
                                        Finish
                                </Link>:
                                <Link 
                                to={{pathname:'/quiz/', search: `?id=${questionId + 1}`}}
                                className='btn rounded-4 px-3'>
                                    Next<img src={Arrow} alt='' className='next-arrow' />
                            </Link>}
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

export default QuizQuestion