import React, { useEffect, useState } from 'react'

export default function Quizc() {
    const [category, setcategory] = useState([])
    const [selectedCategory, setselectedCategory] = useState('')
    const [questionnumber, setquestionnumber] = useState(10)
    const [difficulty, setdifficulty] = useState('easy')
    const [questions, setquestions] = useState([])
    const [answers, setanswers] = useState([])
    const [showResult, setshowResult] = useState(false)
    const [correctCount, setcorrectCount] = useState(0)
    useEffect(() => {
        const fetchCategory = async () => {
            try {
                let res = await fetch(`https://opentdb.com/api_category.php`)
                let data = await res.json()
                console.log(data);
                setcategory(data.trivia_categories)
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchCategory()
    }, [])
    const StartQuiz = () => {
        const fetchQuiz = async () => {
            try {
                let qs = await fetch(`https://opentdb.com/api.php?amount=${questionnumber}&category=${selectedCategory}&difficulty=${difficulty}&type=multiple`)
                let data = await qs.json()
                setquestions(data.results)
                setshowResult(false)
                setanswers(new Array(data.results.length).fill(''))
                setcorrectCount(0)
                console.log(answers);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchQuiz();
    };
    const handleAnwers = (item, i) => {
        let update = [...answers]
        update[i] = item
        setanswers(update)

    }
    const showResults = () => {
        let count = 0
        answers.forEach((answer, index) => {
            if (answer === questions[index].correct_answer) {
                count++
            }
        })
        setcorrectCount(count)
        setshowResult(true)
    }
    return(
        <>
            <div className='w-full bg-gray-800 h-auto p-5 py-8'>
                <h1 className='text-center text-white font-bold text-5xl mb-10'>Quiz App</h1>
                <div className='w-1/2 mx-auto bg-gray-700 p-5 rounded-lg shadow-lg'>
                    <div className='mb-5'>
                        <label className='text-white text-lg'>Selected Category:</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => selectedCategory(e.target.value)}
                            className='w-full p-2 mt-1 bg-gray-800 text-white rounded-md'>
                            <option value="">Any Category</option>
                            {category.map((ele) => {
                                return (
                                    <option value={ele.id} key={ele.id}>{ele.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='mb-5'>
                        <label className='text-white text-lg'>Selected Number of Quuestion</label>
                        <input type="number"
                            value={questionnumber}
                            onChange={(e) => setquestionnumber(e.target.value)}
                            className='w-full p-2 mt-1 bg-gray-800 text-white rounded-md' />
                    </div>
                    <div className='mb-5'>
                        <label className='text-white text-lg'>Selected Difficulty:</label>
                        <select value={difficulty} onChange={(e) => setdifficulty(e.target.value)}
                            className='w-full p-2 mt-1 bg-gray-800 text-white rounded-md'>
                            <option value="easy">Easy</option>
                            <option value="medium">medium</option>
                            <option value="hard">hard</option>
                        </select>
                    </div>
                    <button
                        onClick={StartQuiz}
                        className='w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-900'>
                        Start Quiz
                    </button>
                </div>
                <div className='mt-10'>
                    {questions.map((ele, i) => {
                        let Allanswers = [...ele.incorrect_answers, ele.correct_answer]
                        return (
                            <div key={i} className='bg-gray-700 p-5 mt-5 rounded-lg shadow-lg'>
                                <h2 className='text-white text-xl mb-3'>{ele.question}</h2>
                                {Allanswers.map((item, j) => {
                                    return (
                                        <label key={j} className='block text-white mb-2' >
                                            <input type="radio"
                                                name={`${i}`}
                                                checked={answers[i] === item}
                                                value={item}
                                                onChange={() => handleAnwers(item, i)}
                                                className='mr-2' />
                                            {item}
                                        </label>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <button onClick={showResults}
                    className='w-full p-3 mt-10 bg-green-500 text-white font-semibold rounded-md'>ShowResult</button>
                <div className='mt-10'>
                    {showResult && (
                        <div className='bg-gray-700 rounded-lg  shadow-lg'>
                            <h2 className='text-white'>Result</h2>
                            {questions.map((ele, i) => {
                                return (
                                    <div key={i} className='mb-3'>
                                        <h3 className='text-white text-lg'>Question: {ele.question}</h3>
                                        <p className='text-white'>Your Answer: {answers[i]}</p>
                                        <p className='text-white'>Correct Answer: {ele.correct_answer}</p>
                                    </div>
                                )
                            })}
                            <h2 className='text-white text-xl mt-5'>Total Correct Answers : {correctCount}</h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
