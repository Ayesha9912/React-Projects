import React, { useEffect, useState } from 'react';
import axios from 'axios'
export default function Quiz() {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [questionnumber, setQuestionNumber] = useState(10);
  const [difficulty, setDifficulty] = useState('easy');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  console.log("answers: ", answers);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        let response = await fetch(`https://opentdb.com/api_category.php`);
        let data = await response.json();
        setCategory(data.trivia_categories);
        // console.log(data.trivia_categories);
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchCategory();
  }, []);

  const startQuiz = () => {
    const fetchQuiz = async () => {
      try {
        let response = await axios.get(`https://opentdb.com/api.php?amount=${questionnumber}&category=${selectedCategory}&difficulty=${difficulty}&type=multiple`);
        // console.log("response: ", response);
        // let data = await response.json();
        // console.log("Quiz Data: ", data);
        // console.log(response);
        setQuestions(response.data.results);
        console.log(response.data.results, "results");
        setShowResult(false);
        setAnswers(new Array(response.data.results.length).fill(''));
        setCorrectCount(0); // Reset correct count
        // console.log(response);
      } catch (error){
        console.log('Error', error);
      }
    };
    fetchQuiz();
  };
  const handleAnswer = (item, j) =>{
    let update = [...answers];
    update[j] = item;
    setAnswers(update);
  };
  const showresults = () =>{
    let count = 0;
    answers.forEach((answer, index) =>{
      if(answer === questions[index].correct_answer){
        count++;
      }
    });
    setCorrectCount(count);
    setShowResult(true);
  };
  return(
    <>
      <div className='w-full bg-gray-800 h-auto  p-5 py-8'>
        <h1 className='text-center text-white font-bold text-5xl mb-10'>Quiz App</h1>
        <div className='w-1/2 mx-auto bg-gray-700 p-5 rounded-lg shadow-lg'>
          <div className='mb-5'>
            <label className='text-white text-lg'>Select Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className='w-full p-2 mt-1 bg-gray-800 text-white rounded-md'
            >
              <option value="">Any Category</option>
              {category.map((ele) =>(
                <option key={ele.id} value={ele.id}>{ele.name}</option>
              ))}
            </select>
          </div>
          <div className='mb-5'>
            <label className='text-white text-lg'>Select Number of Questions:</label>
            <input
              value={questionnumber}
              type="number"
              onChange={(e) => setQuestionNumber(e.target.value)}
              className='w-full p-2 mt-1 bg-gray-800 text-white rounded-md'
            />
          </div>
          <div className='mb-5'>
            <label className='text-white text-lg'>Select Difficulty:</label>
            {/*  Event delegation  */}
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className='w-full p-2 mt-1 bg-gray-800 text-white rounded-md'
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          <button
            onClick={startQuiz}
            className='w-full p-3 mt-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600'
          >
            Start Quiz
          </button>
        </div>
        <div className='mt-10'>
          {questions.map((ele, i) => {
            let allAnswers = [...ele.incorrect_answers, ele.correct_answer];
            // console.log("Ele: ", ele, "AllAnswers: ", allAnswers);
            return (
              <div key={i} className='bg-gray-700 p-5 mt-5 rounded-lg shadow-lg'>
                <h2 className='text-white text-xl mb-3'>{ele.question}</h2>
                {allAnswers.map((item, j) => (
                  <label key={j} className='block text-white mb-2'>
                    <input
                      type="radio"
                      onChange={()=> handleAnswer(item, i)}
                      value={item}
                      name={`question${i}`}
                      checked={answers[i] === item}
                      className='mr-2'/>
                    {item}
                  </label>
                ))}
              </div>
            );
          })}
        </div>
        <button
          onClick={showresults}
          className='w-full p-3 mt-10 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600'
        >
          Show Results
        </button>
        <div className='mt-10'>
          {showResult && (
            <div className='bg-gray-700 p-5 rounded-lg shadow-lg'>
              <h2 className='text-white text-2xl mb-5'>Results</h2>
              {questions.map((ele, i) => (
                <div key={i} className='mb-3'>
                  <h3 className='text-white text-lg'>Question: {ele.question}</h3>
                  <p className='text-white'>Your Answer: {answers[i]}</p>
                  <p className='text-white'>Correct Answer: {ele.correct_answer}</p>
                </div>
              ))}
              <h2 className='text-white text-xl mt-5'>Total Correct Answers: {correctCount}</h2>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
