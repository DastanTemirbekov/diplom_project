import React from 'react';
import { useDispatch } from 'react-redux';
import {setAnswer} from "../../store/slices/testSlice"
import classes from "./question.module.css"

const Question = ({ question, index }) => {
    const dispatch = useDispatch();

    const handleAnswerChange = (event) => {
        const answerId = parseInt(event.target.value)+1;
        dispatch(setAnswer({ questionId: question.id, answerId }));
    };

    return (
        <div>
            <h3 className={classes.title}>Тест № {index+1} "{question.question}"</h3>
            <ul>
                {question.options.map((option, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="radio"
                                name={`question_${question.id}`}
                                value={index}
                                onChange={handleAnswerChange}
                            />
                            {option}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;