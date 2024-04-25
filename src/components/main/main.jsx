import './main.css';
import './doctorsData/doctorList.css';
import DoctorList from './doctorsData/doctorList';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { DoctorListAction } from '../../store/actions';
import { useEffect } from 'react';

export default function Main() {
    const { t } = useTranslation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(DoctorListAction.get(2))
    }, [])
    const clickHandler = useCallback((id) => {
        return () => {
            dispatch(DoctorListAction.get(id))
        }
    }, [dispatch])

    return (
        <>
            <div className='main'>
                <div className="main-buttons">
                    <button onClick={clickHandler(1)}>{t("main.key1")}</button>
                    <button onClick={clickHandler(2)}>{t("main.key2")}</button>
                    <button onClick={clickHandler(4)}>{t("main.key3")}</button>
                </div>
                <DoctorList />
            </div>
        </>
    );
}