import React from 'react'
import classes from "./footer.module.css"
import whatsapp from "../../img/wa.png"
import telegram from "../../img/telegram.png"
import vk from "../../img/vk.png"
import viber from "../../img/viber.png"

function Footer() {
    return (
        <footer className={classes.footer}>
            <ul className={classes.container_footer}>
                <li>
                    <a href="#"><span>О компании</span></a>
                    <a href="#"><span>Новости</span></a>
                    <a href="#"><span>Документы</span></a>
                </li>
                <li>
                    <a href="#"><span>Тарифы для дома</span></a>
                    <a href="#"><span>Тарифы для бизнеса</span></a>
                    <a href="#"><span>Контакты</span></a>
                </li>
                <li>
                    <a href="#"><span>Тест скорости</span></a>
                    <a href="#"><span>Карта покрытия</span></a>
                </li>
                <li className={classes.btn_img_footer}>
                    <div className={classes.btn_footer}>
                        <a className={classes.btn_footer_one} href="../modalApp/index.html">Личный кабинет</a>
                        <a className={classes.btn_footer_two} href="../modalPay/index.html">Оплатить</a>
                    </div>
                    <div className={classes.img_footer}>
                        <img src={viber} alt="icon"/>
                        <img src={vk} alt="icon"/>
                        <img src={whatsapp} alt="icon"/>
                        <img src={telegram} alt="icon"/>
                    </div>
                </li>
            </ul>
        </footer>
    )
}

export default Footer