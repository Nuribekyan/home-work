import DoctorData from "../../components/main/containers/doctorsData";
import { TranslateContext } from "../../components/translate";
import { useContext, useState } from 'react';
import Container from "../../components/main/containers/container";

export default function MyNotes() {
    const { t } = useContext(TranslateContext);
    const doctors = DoctorData

    return (
        <>
            <div className='main'>
                <p className="myNotes-p">Мои записи</p>
                <div className="main-buttons">
                    <button>{t.main_text1}</button>
                    <button>{t.main_text2}</button>
                    <button>{t.main_text3}</button>
                </div>
                <Container doctor={doctors} />
            </div>
        </>
    );

}