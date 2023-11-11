import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import ReactLoading from 'react-loading';
import queryString from 'query-string';
import Arrow from '../assets/arrow.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const QuizQuestion = () => {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const questionId = parseInt(queryParams.id);

    const [question, setQuestion] = useState();
    const [clicked, setClicked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [cookies, setCookie, removeCookie] = useCookies();

    const questions = useSelector(state => state.quiz.data);

    const handleClick = (_index) => {
        if(!clicked){
            const updatedAnswers = question?.answare_set.map((answare, i) => {
                if(_index === i){
                    setCookie('answares', [...cookies.answares, {answare: _index, id: questionId}]);
                    return {...answare, selected: true};
                }else{
                    return {...answare, selected: false}
                }
            })
            setClicked(true);
            setQuestion({...question, answare_set: updatedAnswers});
        }
    }


    useEffect(() => {
        const ques = questions.question_set.find(question => question.id === questionId);
        setQuestion(ques);
        setClicked(false);
        setIsLoading(false);

        try {
            const savedAnsware =  cookies.answares.find(answare => answare.id === questionId);
            console.log(savedAnsware);
            if(savedAnsware){
                const updatedAnswers = ques?.answare_set.map((answare, i) => {
                    if(savedAnsware['answare'] === i){
                        return {...answare, selected: true};
                    }else{
                        return {...answare, selected: false};
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

                        {isLoading ? 
                        <div className='mt-4 d-flex justify-content-center pt-5 mt-5'>
                            <ReactLoading type='spinningBubbles' color='#007bff' height={'10%'} width={'10%'} />
                        </div>:
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
                                    {questionId === questions.number_of_questions ?
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
                        </div>}

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default QuizQuestion