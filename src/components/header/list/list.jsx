import './list.css'
import { useContext } from 'react';
import ListComponent from './list-component'
import { TranslateContext } from '../../translate';


export default function List() {
    const { t } = useContext(TranslateContext)
    return (
        <>
            <div className='list'>
                <ListComponent classText="list-component-text" icon="&#128102;" text={t.list_text1} />
                <ListComponent classText="list-component-text" icon="&#128179;" text={t.list_text2} />
                <ListComponent classText="list-component-text" icon="&#10067;" text="FAQ" />
                <ListComponent classText="list-component-text" icon="&#10152;" text={t.list_text3} />
            </div>
        </>
    );
}