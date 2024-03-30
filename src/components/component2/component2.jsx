import '../images/4.jpg';
import './component2.css';
import { useContext } from 'react';
import { TranslateContext } from '../translate';

export default function Component2() {
    const { t } = useContext(TranslateContext)
    return (
        <div className="component-2">
            <div className="component2">
                <div className="component2-img"></div>
                <div>
                    <h1 className="component2-h1">{t.component2_text1}</h1>
                    <p className="component2-p">{t.component2_text2}</p>
                    <ul className="component2-ul">
                        <li className="component2-li"><span>{t.component2_text3}</span></li>
                        <li className="component2-li"><span>{t.component2_text4}</span></li>
                        <li className="component2-li"><span>{t.component2_text5}</span></li>
                    </ul>
                    <br />
                    <span className="component2-span">{t.component2_text6}</span>
                </div>
            </div>
            <button className="component2-button">{t.component2_text7}</button>
        </div>
    );
}