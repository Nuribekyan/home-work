import './balance.css'
import { result } from './balanceData'

export default function Balance({ balance }) {
    return (
        <div className='balance'>
            <div className='balance1'>
                <h3 className="balance-h3">Баланс</h3>
                <div className="balance-button-span">
                    <span className="balance-span">{result} &#8381;</span>
                    <button className="balance-button">Пополнить счет</button>
                </div>
                <h4 className="balance-h4">История платежей</h4>
                <div className="balance-spans">
                    <span>За сегодня</span>
                    <span>За месяц</span>
                    <span>За все время</span>
                </div>
            </div>
            {
                balance.map((item, index) => {
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

