import './header.css';
import '../images/1.jpg';
import '../images/2.jpg';
import User from './user';
import List from './list/list';
import { TranslateContext, en, ru } from '../translate';
import { useContext, useState, useEffect } from 'react';

export default function Header() {

    const { t, set_t } = useContext(TranslateContext)
    const [show, isShow] = useState(false);

    return (
        <>
            <div className='header'>
                <div className='header-img1'></div>
                <div className='header-text'>
                    <a href='#'>{t.header_text1}</a>
                    <a href='#'>{t.header_text2}</a>
                    <a href='#'>{t.header_text3}</a>
                    <div className='header-img2'></div>
                    <div className='header-user' onClick={() => {
                        isShow(prev => !prev)
                    }}>
                        <User text={t.header_text4}></User>
                        <span>&or;</span>
                    </div>
                    {show ? <List /> : null}
                </div>
                <div>
                    <button className="ru" onClick={() => {
                        set_t(ru)
                    }}>RU</button>
                    <button className="en" onClick={() => {
                        set_t(en)
                    }}>EN</button>
                </div>
            </div>
        </>
    );
}




