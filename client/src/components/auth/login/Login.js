import React, {useEffect, useState} from 'react'
import classes from "./login.module.css"
import {Link, useNavigate} from "react-router-dom"
import {links} from "../../../links/links"
import close from "../../../img/close.png"
import {useDispatch, useSelector} from "react-redux"
import {getUsers, loginApi} from "../../../axios/usersApi"

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const {isAuth} = useSelector(state => state.userReducer)

    const isLoginFormValid = () => loginEmail && loginPassword

    const submitLoginHandler = (e) => {
        e.preventDefault()
        if (isLoginFormValid()) {
            dispatch(loginApi(loginEmail, loginPassword))
        } else {
            alert('Введите все данные')
        }
    }

    if (isAuth) {
        navigate(links.base)
    }

    return (
        <form onSubmit={submitLoginHandler} className={classes.container_modal}>
            <div className={classes.block_head}>
                <h2 className={classes.head_modal}>Войти</h2>
                <Link to={links.base}><img src={close} alt="close"/></Link>
            </div>
            <input
                className={classes.login}
                type="email"
                name="email"
                value={loginEmail}
                placeholder="email"
                onChange={e => setLoginEmail(e.target.value)}
            />
            <input
                className={classes.pass}
                type="password"
                name="password"
                value={loginPassword}
                placeholder="password"
                onChange={e => setLoginPassword(e.target.value)}
            />
            <button
                className={classes.btn}
                type="submit">войти
            </button>
        </form>

    )
}

export default Login