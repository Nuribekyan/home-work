import './doctorInformation.css'
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import DoctorData from '../../components/main/containers/doctorsData';

export default function DoctorInformation() {

    const { t } = useTranslation()
    const { userId } = useParams()
    const item = useMemo(() => {
        const user = DoctorData
        return user.find((item) => item.userId == userId)
    }, [userId])

    return (
        <>
            <div className='div'>
                <div className="information" >
                    <div className="information-div">
                        <img className="information-img" src={item.img} />
                        <div className="information-p">
                            <p className="container2-p1 information-p1">{item.name}</p>
                            <p className="container2-p2">{item.p_text1}</p>
                            <p className="container2-p3">{item.p_text2}</p>
                        </div>
                    </div>
                    <div className="information-span">
                        <span>900 &#8381; / {t("doctorInformation.text1")}</span>
                        <span>30 {t("doctorInformation.text2")}</span>
                    </div>
                </div>
                <div className="doctorInformation">
                    <h3>&#128198; &nbsp; {t("doctorInformation.key1_1")}</h3>
                    <p>{t("doctorInformation.key1_2")}</p>
                    <h3>&#128220; &nbsp; {t("doctorInformation.key2_1")}</h3>
                    <p>{t("doctorInformation.key2_2")}</p>
                    <p>{t("doctorInformation.key2_3")}</p>
                    <h3>&#10011; &nbsp; {t("doctorInformation.key3_1")}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <h3>&#10071; &nbsp; {t("doctorInformation.key4_1")}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </>
    );
}
