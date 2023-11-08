import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import QuizHome from '../components/QuizHome';
import QuizQuestion from '../components/QuizQuestion';

const Quiz = () => {
    const location = useLocation();
    const search = location.search;
    const queryParams = queryString.parse(search);
    const questionId = parseInt(queryParams.id);

  return (
    questionId? <QuizQuestion />: <QuizHome />
  )
}

export default Quiz