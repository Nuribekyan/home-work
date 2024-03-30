import './container.css';

export default function Container1(props) {
    return (
        <div className="container1">
            <div className="container1-span">
                <div>
                    <span className="container1-icon">{props.icon1}</span>
                    <span className="container1-text">{props.text1}</span>
                </div>
                <div>
                    <span className="container1-icon">{props.icon2}</span>
                    <span className="container1-text">{props.text2}</span>
                </div>
                <div>
                    <span className="container1-icon">{props.icon3}</span>
                    <span className="container1-text">{props.text3}</span>
                </div>
            </div>
            <button className="container1-button">{props.textButton}</button>
        </div>
    );
};