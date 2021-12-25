import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

const questions = [
    {
        questionText: 'Why so JavaScript and Java have similar name?',
        answerOptions: [
            { answerText: 'JavaScript is a stripped-down version of Java', isCorrect: false },
            { answerText: 'JavaScripts syntax is loosely based on Java', isCorrect: true },
            { answerText: 'They both originated on the island of Java', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
];

interface Question {
    question?: [{}],
    questionText?: string,
    answerOptions?: [{}] | boolean
}

const Quiz: React.FC<Question> = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>()

    const { userName } = useParams()
    const { language } = useParams()

    const goQuestion = () => {
        if (language === 'C Programming') {
            console.log('C question')
        } else if (language === 'JavaScript') {
            console.log("JavaScript")
        } else {
            console.log('Php')
        }
    }
    return (
        <div>
            Quiz Page
            <div>
                <p>Hello - {userName}</p>
                <p>You Select : {language}</p>
            </div>
            <div>
                <Button type='submit' variant='outlined' onClick={goQuestion}>Go Questions</Button>
            </div>

            <>
                <div className='question-section'>
                    <div className='question-count'>
                        <span>Question </span>/{questions.length}
                    </div>
                    <div className='question-text'>{questions[0].questionText}</div>
                </div>
                <div className='answer-section'>
                    {questions[0].answerOptions.map((answerOptions, i) =>
                        <Button variant='outlined' key={i}>{answerOptions.answerText}</Button>)}
                </div>
            </>

        </div>
    )
}

export default Quiz
