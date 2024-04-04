import './doctorInformation.css'
export default function DoctorInformation({ information }) {
    return (
        <>
            {
                information.map((item, index) => {
                    return (
                        <div className='div'>
                            <div className="information" key={"doctor" + index}>
                                <div className="information-div">
                                    <img className="information-img" src={item.img} />
                                    <div className="information-p">
                                        <p className="container2-p1 information-p1">{item.name}</p>
                                        <p className="container2-p2">{item.p_text1}</p>
                                        <p className="container2-p3">{item.p_text2}</p>
                                    </div>
                                </div>
                                <div className="information-span">
                                    <span>900 &#8381; / консультация</span>
                                    <span>30 минут</span>
                                </div>
                            </div>
                            <div className="doctorInformation">
                                <h3>&#128198; &nbsp; Ближайшая запись</h3>
                                <p>Вторник 03 Марта</p>
                                <h3>&#128220; &nbsp; Образование</h3>
                                <p>1992 - Российский Государственный Университет</p>
                                <p>1994 - Ординатура по специальности «Педиатрия»</p>
                                <h3>&#10011; &nbsp; Специализируется на лечении</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <h3>&#10071; &nbsp; Дополнительно</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                    );
                }
                )}
        </>
    );
}
