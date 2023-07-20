import React, from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Question from './Question'
import Results from './Results'
import {calculateScore} from "../../store/slices/testSlice"
import classes from "./test.module.css"

const Test = () => {
    const dispatch = useDispatch()

    const tests = useSelector((state) => state.testReducer.tests)
    const {user} = useSelector((state) => state.userReducer)
    const {preloader} = useSelector(state => state.preloaderReducer)
    const score = useSelector((state) => state.testReducer.score)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(calculateScore())
    }

    return (
        <div className={classes.test}>
            {preloader ?
                <h1>Loading......</h1>
                :
                <>
                    {score === 0 ? (
                            <>
                                {tests.map((question, index) => (
                                    <Question key={question.id} question={question} index={index}/>
                                ))}
                                <button onClick={handleSubmit}>Отправить</button>
                            </>
                        )
                        :
                        (
                            <Results score={score} userId={user.id}/>
                        )
                    }
                </>
            }
        </div>
    )
}

export default Test
