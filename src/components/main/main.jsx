import './main.css';
import './containers/container.css';
import { useContext, useState } from 'react';
import { TranslateContext } from '../translate';
import Container from './containers/container';
import DoctorData from './containers/doctorsData';

export default function Main() {
    const { t } = useContext(TranslateContext);
    const [doctor_data, setDoctor_data] = useState();
    const filter = DoctorData.filter((item) => item.number === doctor_data);

    return (
        <>
            <div className='main'>
                <div className="main-buttons">
                    <button onClick={() => setDoctor_data(1)}>{t.main_text1}</button>
                    <button onClick={() => setDoctor_data(2)}>{t.main_text2}</button>
                    <button onClick={() => setDoctor_data(3)}>{t.main_text3}</button>
                </div>
                <Container doctor={filter} />
            </div>
        </>
    );

}