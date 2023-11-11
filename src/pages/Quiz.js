import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import QuizHome from '../components/QuizHome';
import QuizQuestion from '../components/QuizQuestion';
import { useDispatch } from 'react-redux';
import { addToQuiz } from '../redux/slices/quizSlice';
import  { API_URI } from '../utils/config';

const Quiz = () => {
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const questionId = parseInt(queryParams.id);

    const dispatch = useDispatch();

    const getQuiz = async () => {
      try {
          const response = await axios.get(API_URI + 'quiz/');
          dispatch(addToQuiz(response.data));
          const now = new Date();
          now.setTime(now.getTime() + 60 * 60 * 1000);
          localStorage.setItem('questions', JSON.stringify(response.data));
      } catch (error) {
          console.error(error);
      }
  }

  useEffect(() => {
    getQuiz();
  }, [])

  return (
    questionId? <QuizQuestion />: <QuizHome />
  )
}

export default Quiz