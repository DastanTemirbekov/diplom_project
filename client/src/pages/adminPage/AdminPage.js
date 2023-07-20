import React, {useEffect} from 'react'
import classes from "./adminPage.module.css"
import {useDispatch, useSelector} from "react-redux"
import AddTest from "../../components/addTest/AddTest"
import {getUserTestApi} from "../../axios/testApi"

function AdminPage() {
    const dispatch = useDispatch()

    const {userTest} = useSelector(state => state.testReducer)

    useEffect(() => {
        dispatch(getUserTestApi())
    }, [dispatch])

    const {users} = useSelector(state => state.userReducer)

    return (
        <div className={classes.container_content}>
            <AddTest/>
            <h1 >Заявки</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Количество баллов</th>
                    <th>Login</th>
                    <th>email</th>
                </tr>
                </thead>
                <tbody>
                {userTest.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.score}</td>
                        <td>{item.user.login}</td>
                        <td>{item.user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminPage