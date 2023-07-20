import {createSlice} from "@reduxjs/toolkit"
import questions from './questions.json'
import {addUserTest} from "../../axios/testApi"

const testSlice = createSlice({
    name: 'testSlice',
    initialState: {
        questions,
        tests: {},
        answers: {},
        userTest: [],
        score: 0,
    },
    reducers: {
        setScore: (state, action) => {
            state.score = action.payload
        },
        setUserTest: (state, action) => {
            state.userTest = action.payload
        },
        setAnswer: (state, action) => {
            const {questionId, answerId} = action.payload
            state.answers[questionId] = answerId
        },
        setTest: (state, action) => {
            state.tests = action.payload
        },
        calculateScore: (state) => {
            const {tests, answers} = state
            let score = 0
            tests.forEach((question) => {
                const {id, correctAnswer} = question
                if (answers[id] === correctAnswer) {
                    score += 1
                }
            })
            state.score = score
        }
    }
})

export const {
    setAnswer,
    calculateScore,
    setTest,
    setUserTest,
    setScore
} = testSlice.actions

export default testSlice.reducer