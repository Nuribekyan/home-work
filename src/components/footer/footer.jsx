import './footer.css';
import '../images/5.jpg';
import '../images/6.png';
import '../images/7.png';
import '../images/8.png';
import '../images/9.png';
import '../images/10.png';
import { useTranslation } from 'react-i18next';
import ListComponent from '../header/list/list-component';

export default function Footer() {
    const { t } = useTranslation()

    return (
        <>
            <div className='footer'>
                <div className="footer1">
                    <div>
                        <div className="footer-img"></div>
                        <p className="footer-p">{t("footer.key1")}</p>
                        <p className="footer-p">{t('footer.key2')}</p>
                        <div className="footer-imgs1">
                            <div className="instagram"></div>
                            <div className="facebook"></div>
                            <div className="youtube"></div>
                        </div>
                        <div className='footer-imgs2'>
                            <div className='App-Store'></div>
                            <div className='Google-Play'></div>
                        </div>
                    </div>
                    <div>
                        <ul className='footer-ul'>
                            <li>{t('footer.key3')}</li>
                            <li>{t('footer.key4')}</li>
                            <li>{t('footer.key5')}</li>
                            <li>{t('footer.key6')}</li>
                            <li>{t('footer.key7')}</li>
                            <li>{t('footer.key8')}</li>
                        </ul>
                    </div>
                    <div>
                        <ListComponent classText="list-footer-text" icon="&#9993;" text="allodoc@mail.com" />
                        <ListComponent classText="list-footer-text" icon="&#127968;" text={t('footer.key9')} />
                        <ListComponent classText="list-footer-text" icon="&#128339;" text={t('footer.key10')} />
                        <ListComponent classText="list-footer-text" icon="&#128222;" text="8 800 555 35 35" />
                    </div>
                </div>
            </div>
        </>
    );
}
