import './header.css';
import '../images/1.jpg';
import '../images/2.jpg';
import User from './user';
import List from './list/list';
import { useState } from 'react';
import i18n from '../../services/i18n';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Header() {
    const { t } = useTranslation()
    const [show, isShow] = useState(false);

    return (
        <>
            <div className='header'>
                <Link to={'/'}><div className='header-img1'></div></Link>
                <div className='header-text'>
                    <a href='#'>{t("header.key1")}</a>
                    <Link to={'/notes'}>{t("common.key1")}</Link>
                    <a href='#'>{t("header.key2")}</a>
                    <div className='header-img2'></div>
                    <div className='header-user' onClick={() => {
                        isShow(prev => !prev)
                    }}>
                        <User text={t("header.key3")}></User>
                        <span>&or;</span>
                    </div>
                    {show ? <List /> : null}
                </div>
                <div>
                    <button className={i18n.language === "ru" ? "ru-blue" : "ru-white"}
                        onClick={() => {
                            i18n.changeLanguage("ru")
                        }}>RU</button>
                    <button className={i18n.language === "en" ? "en-blue" : "en-white"} onClick={() => {
                        i18n.changeLanguage("en")
                    }}>EN</button>
                </div>
            </div>
        </>
    );
}




