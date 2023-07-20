import React, {useEffect} from 'react'
import classes from "./userPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getTestsApi, getUserTestApi} from "../../axios/testApi"
import Test from "../../components/test/Test"

function UserPage() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTestsApi())
    }, [dispatch])


    return (
        <div className={classes.container_content}>
            <section className={classes.container_test}>
                <div className={classes.head_test}>
                    <h2>Тест</h2>
                </div>
                <div className={classes.block_test}>
                    <div className={classes.nav_test}>
                        <Test/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserPage