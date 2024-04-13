import './balance.css'
import { result } from './balanceData'
import { BalanceData } from './balanceData';
import { useTranslation } from 'react-i18next';

export default function Balance() {
    const { t } = useTranslation()
    
    return (
        <div className='balance'>
            <div className='balance1'>
                <h3 className="balance-h3">{t("balance.key1")}</h3>
                <div className="balance-button-span">
                    <span className="balance-span">{result} &#8381;</span>
                    <button className="balance-button">{t("balance.key2")}</button>
                </div>
                <h4 className="balance-h4">{t("balance.key3")}</h4>
                <div className="balance-spans">
                    <span>{t("balance.key4")}</span>
                    <span>{t("balance.key5")}</span>
                    <span>{t("balance.key6")}</span>
                </div>
            </div>
            {
                BalanceData.map((item, index) => {
                    return (
                        <div className='balance-div'>
                            <div className='balance2' key={"Balance" + index}>
                                <img className="balance-img" src={item.img} />
                                <span className="balance-date">{item.date}</span>
                                <span className="balance-text">{item.text}</span>
                                <span className={
                                    item.id === 1 ? "balance-sum-green" : item.id === 2 ? "balance-sum-red" : ""
                                }>{item.sum} &#8381;</span>
                            </div>
                        </div>
                    );
                }
                )}
        </div>
    );
}

