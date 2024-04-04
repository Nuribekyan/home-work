import './list.css'
import { useContext } from 'react';
import ListComponent from './list-component'
import { TranslateContext } from '../../translate';
import Balance from '../../../views/balance/balance';
import { BalanceData } from '../../../views/balance/balanceData';
import { useState } from 'react';

export default function List() {
    const balance = BalanceData
    const [show, isShow] = useState(false);
    const { t } = useContext(TranslateContext)

    return (
        <>
            <div className='list'>
                <ListComponent classText="list-component-text" icon="&#128102;" text={t.list_text1} />
                <div onClick={() => { isShow(prev => !prev) }}>
                    <ListComponent classText="list-component-text" icon="&#128179;" text={t.list_text2} />
                </div>
                <ListComponent classText="list-component-text" icon="&#10067;" text="FAQ" />
                <ListComponent classText="list-component-text" icon="&#10152;" text={t.list_text3} />
                {show ? <Balance balance={balance} /> : null}
            </div>
        </>
    );
}