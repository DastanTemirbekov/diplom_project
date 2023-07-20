import React from 'react'
import classes from "./welcome.module.css"
import avatar from "../../img/avatar.png"
import {links} from "../../links/links"
import {Link} from "react-router-dom"

function Welcome() {

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.block_avatar}>
                    <p className={classes.text_name}>Добро пожаловать!!!</p>
                    <div className={classes.ellipse_avatar}>
                        <img className={classes.avatar} src={avatar} alt="avatar"/>
                    </div>
                    <div className={classes.info_avatar}>
                        <Link to={links.login}><span>Войти</span></Link>
                        <Link to={links.signup}><span>Зарегистрироваться</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome