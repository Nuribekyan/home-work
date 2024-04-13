import '../images/3.png';
import './component1.css';
import { useTranslation } from 'react-i18next';

export default function Component1() {
    const { t } = useTranslation()

    return (
        <>
            <div className="component1">
                <div className="component1-text">
                    <h1 className="component1-h1">
                        <span>{t("component1.text1_1")}</span>{t("component1.text1_2")} <br />{t("component1.text1_3")}
                    </h1>
                    <p className="component1-p">{t("component1.text2_1")}
                        <b className='b1'> {t("component1.text2_2")}</b>
                        {t("component1.text2_3")}
                        <b className='b1'>{t("component1.text2_4")}</b>
                        <br /> {t("component1.text2_5")}
                        <br /> {t("component1.text2_6")} <b className='b2'>App Store</b> {t("component1.text2_7")} <b className='b2'>Google Play</b>
                    </p>
                    <div>
                        <button className="component1-button1">{t("component1.button1")}</button>
                        <button className="component1-button2">{t("component1.button2")}</button>
                    </div>
                </div>
                <div>
                    <div className="component1-img"></div>
                    <div className="component1-img-1"></div>
                    <div className="component1-img-2"></div>
                    <div className="component1-img-3"></div>
                </div>
            </div>
        </>
    );
}