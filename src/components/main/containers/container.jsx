import './container.css';


export default function Container({ doctor }) {
    return (
        <>
            {
                doctor.map((item, index) => {
                    return (
                        <div className='container2' key={"div" + index}>
                            <div>
                                <div className="container1">
                                    <div className="container1-span">
                                        <div>
                                            <span className="container1-icon">{item.icon1}</span>
                                            <span className="container1-text">{item.text1}</span>
                                        </div>
                                        <div>
                                            <span className="container1-icon">{item.icon2}</span>
                                            <span className="container1-text">{item.text2}</span>
                                        </div>
                                        <div>
                                            <span className="container1-icon">{item.icon3}</span>
                                            <span className="container1-text">{item.text3}</span>
                                        </div>
                                    </div>
                                    <button className={
                                        item.number === 1 ? "container1-button-orange" : item.number === 2 ? "container1-button-green" : "container1-button-red"
                                    } >{item.textButton}</button>
                                </div>
                            </div>
                            <div className='container2-2'>
                                <div className="container2-div1">
                                    <img className="container2-img" src={item.img} />

                                    <div className="container2-p">
                                        <p className="container2-p1">{item.name}</p>
                                        <p className="container2-p2">{item.p_text1}</p>
                                        <p className="container2-p3">{item.p_text2}</p>
                                    </div>
                                </div>
                                <div className="container2-div2">
                                    <button className="container2-button1">{item.buttonText1}</button>
                                    <button className="container2-button2">{item.buttonText2}</button>
                                </div>
                            </div>
                        </div>
                    );
                }
                )}
        </>
    );
}