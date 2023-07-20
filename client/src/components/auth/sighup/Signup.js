import React, {useState} from 'react'
import classes from "./signup.module.css"
import close from "../../../img/x.png"
import {links} from "../../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {register} from "../../../axios/usersApi"

const passwordRegExp = /^.{5,40}$/
const userRegExp = /^.{3,50}$/

function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const submitRegHandler = async (e) => {
        e.preventDefault()
        if (!userRegExp.test(login)) {
            return alert("Ваш Username должен содержать не менее 3 символов")
        }
        if (!userRegExp.test(email)) {
            return alert("Ваш Nickname должен содержать не менее 3 символов")
        }
        if (!passwordRegExp.test(password)) {
            return alert("Ваш пароль должен содержать не менее 5 символов")
        }

        dispatch(register(email, password, login))
        navigate(links.base)
        setLogin('')
        setPassword('')
        setEmail('')
    }

    return (
        <form
            className={classes.container_modal}
            onSubmit={submitRegHandler}
        >
            <div className={classes.block_head}>
                <h2 className={classes.head_modal}>Регистрация</h2>
                <Link to={links.base}><img src={close} alt="close"/></Link>
            </div>
            <input
                className={classes.login}
                type="text"
                name="login"
                placeholder="login"
                value={login}
                onChange={e => setLogin(e.target.value)}
            />
            <input
                className={classes.email}
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                className={classes.password}
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button
                className={classes.btn}
                type="submit">
                <span>зарегистрироваться</span>
            </button>
        </form>
    )
}

export default Signup
