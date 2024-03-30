import './main.css';
import { useContext } from 'react';
import { TranslateContext } from '../translate';
import Container1 from './containers/container1';
import Container2 from './containers/container2';

export default function Main() {
    const { t } = useContext(TranslateContext)

    const a = <Container2 container1={
        <Container1 icon1="&#128198;" text1="03 Марта 2021" icon2="&#128339;" text2=" 16:00" icon3="&#128249; " text3="Видео связь" textButton="Запланировано" />}
        text1={t.main_text4} text2={t.main_text5_1} text3={t.main_text6} buttonText1={t.main_text8} buttonText2={t.main_text9} />
    const b = <Container2 container1={
        <Container1 icon1="&#128198;" text1="03 Марта 2021" icon2="&#128339;" text2="16:00" icon3="&#128233;" text3="Чат" textButton="Запланировано" />}
        text1={t.main_text4} text2={t.main_text5_2} text3={t.main_text6} buttonText1={t.main_text8} buttonText2={t.main_text9} />
    const c = <Container2 container1={
        <Container1 icon1="&#128198;" text1="03 Марта 2021" icon2="&#128339;" text2=" 16:00" icon3="&#128249; " text3="Видео связь" textButton="Состоялась" />}
        text1={t.main_text4} text2={t.main_text5_2} text3={t.main_text6} buttonText1={t.main_text8} buttonText2={t.main_text9} />

    const list = [a, b, c]
    // const list_filter = list.filter((item) => {
    //     return (a,b)   
    // })
    return (
        <>
            <div className='main'>
                <div className="main-buttons">
                    <button>{t.main_text1}</button>
                    <button>{t.main_text2}</button>
                    <button>{t.main_text3}</button>
                </div>
                {
                    list.map((item, index) => {
                        return (
                            <div key={"div" + index} className="main-container">
                                {item}
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
}