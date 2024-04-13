import './list.css'
import { Link } from 'react-router-dom';
import ListComponent from './list-component'
import { useTranslation } from 'react-i18next';

export default function List() {
    const { t } = useTranslation()

    return (
        <>
            <div className='list'>
                <Link to={'/'}>
                    <ListComponent classText="list-component-text" icon="&#128102;" text={t("list.key1")} />
                </Link>
                <Link to={'/balance'}>
                    <ListComponent classText="list-component-text" icon="&#128179;" text={t("list.key2")} />
                </Link>
                <ListComponent classText="list-component-text" icon="&#10067;" text="FAQ" />
                <ListComponent classText="list-component-text" icon="&#10152;" text={t("list.key3")} />
            </div>
        </>
    );
}