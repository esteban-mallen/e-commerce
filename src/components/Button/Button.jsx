import "./Button.css"

const Button = ({ type = "button", disabled, onClick, title, children, ariaLabel }) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className="button"
            onClick={onClick}
            title={title}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    )
}

export default Button
