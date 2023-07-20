import React from 'react';
import {addUserTest} from "../../axios/testApi"
import {useDispatch} from "react-redux"
import {setScore} from "../../store/slices/testSlice"

const Results = ({ score, userId}) => {
    const dispatch = useDispatch()

    dispatch(addUserTest(score, userId));

    return (
        <div>
            <h2>Results</h2>
            <p>Your score: {score}</p>
        </div>
    );
};

export default Results;
