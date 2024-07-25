import "./Button.css"

const Button = (props) => {
    return (
        <button disabled={props.disabled} className="button" onClick={props.onClick} title={props.title}>
            {props.children}
        </button>
    )
}

export default Button
