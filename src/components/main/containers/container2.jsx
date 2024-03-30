import './container.css';
import '../../images/11.jpg'

export default function Container2(props) {

    return (
        <div className='container2'>
            <div>
                {props.container1}
            </div>
            <div className='container2-2'>
                <div className="container2-div1">
                    <div className="container2-img"></div>
                    <div className="container2-p">
                        <p className="container2-p1">{props.text1}</p>
                        <p className="container2-p2">{props.text2}</p>
                        <p className="container2-p3">{props.text3}</p>
                    </div>
                </div>
                <div className="container2-div2">
                    <button className="container2-button1">{props.buttonText1}</button>
                    <button className="container2-button2">{props.buttonText2}</button>
                </div>
            </div>
        </div>

    );
}