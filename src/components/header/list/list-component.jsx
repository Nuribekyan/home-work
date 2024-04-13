import './list.css'

export default function ListComponent(props) {
    return (
        <>
            <div className={props.classText}>
                <span className="list-component-icon">{props.icon}</span>
                <span>{props.text}</span>
            </div>
        </>
    );
}