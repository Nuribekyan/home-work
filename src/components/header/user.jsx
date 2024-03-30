import './header.css'

export default function User(props) {
    return (
        <>
            <div className='header-circle'>{props.text[0]}</div>
            <div className='header-name'>{props.text}</div>
        </>
    );
}

