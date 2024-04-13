import '../images/4.jpg';
import './component2.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Component2() {
    const { t } = useTranslation()

    return (
        <>
            <div className="component-2">
                <div className="component2">
                    <div className="component2-img"></div>
                    <div>
                        <h1 className="component2-h1">{t("component2.key1")}</h1>
                        <p className="component2-p">{t("component2.key2")}</p>
                        <ul className="component2-ul">
                            <li className="component2-li"><span>{t("component2.key3")}</span></li>
                            <li className="component2-li"><span>{t("component2.key4")}</span></li>
                            <li className="component2-li"><span>{t("component2.key5")}</span></li>
                        </ul>
                        <br />
                        <span className="component2-span">{t("component2.key6")}</span>
                    </div>
                </div>
                <Link to={'/notes'}>
                    <button className="component2-button">{t("common.key1")}</button>
                </Link>
            </div>
        </>
    );
}