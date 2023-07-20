import React, {useEffect} from 'react'
import classes from "./header.module.css"
import {links} from "../../links/links"
import {Link, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import {setIsAuth} from "../../store/slices/userSlice"
import {getUsers} from "../../axios/usersApi"
import {getTestsApi} from "../../axios/testApi"

function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isAuth, user} = useSelector(state => state.userReducer)

    const logOut = () => {
        dispatch(setIsAuth(false))
    }

    const admin = () => {
        navigate(links.admin)
    }
    const userCabinet = () => {
        navigate(`/user/${user.id}/`)
    }

    useEffect(() => {
        dispatch(getUsers())
        dispatch(getTestsApi())
    }, [dispatch])

    return (
        <header className={classes.head}>
            <nav className={classes.nav}>
                <ul className={classes.nav_content}>
                    <li className={classes.link_nav}>
                        <Link to={links.base}>Главная</Link>
                    </li>
                    {/*<li className={classes.link_nav}>*/}
                    {/*    <Link to={links.signup}>Тарифы для дома</Link>*/}
                    {/*</li>*/}
                    {/*<li className={classes.link_nav}>*/}
                    {/*    <Link to={links.signup}>Тарифы для бизнеса</Link>*/}
                    {/*</li>*/}
                </ul>
                <ul className={classes.nav_content}>
                    {isAuth
                        ?
                        <>
                            <li className={classes.link_nav}>
                                Вы вошли как: {user.login}
                            </li>
                            <li>
                                <button
                                    className={classes.btn_nav1}
                                    onClick={userCabinet}>Кабинет
                                </button>
                            </li>
                            {user.role === "ADMIN"
                                ?
                                <button
                                    className={classes.btn_nav1}
                                    onClick={admin}>Admin</button>
                                :
                                ''
                            }
                            <li>
                                <button
                                    className={classes.btn_nav1}
                                    onClick={logOut}>Выход
                                </button>
                            </li>
                        </>
                        :
                        <li className={classes.link_nav}>
                            <Link to={links.login}><span>Войти</span></Link>
                        </li>
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header