import './main.css';
import { useState } from 'react';
import './containers/container.css';
import Container from './containers/container';
import { useTranslation } from 'react-i18next';
import DoctorData from './containers/doctorsData';

export default function Main() {
    const { t } = useTranslation()
    const [doctor_data, setDoctor_data] = useState(2);
    const filter = DoctorData.filter((item) => item.number === doctor_data);

    return (
        <>
            <div className='main'>
                <div className="main-buttons">
                    <button onClick={() => setDoctor_data(1)}>{t("main.key1")}</button>
                    <button onClick={() => setDoctor_data(2)}>{t("main.key2")}</button>
                    <button onClick={() => setDoctor_data(3)}>{t("main.key3")}</button>
                </div>
                <Container doctor={filter} />
            </div>
        </>
    );
}