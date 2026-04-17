import "./TextInput.css"

const TextInput = ({ label, value, onChange, type, error }) => {
    return (
        <span className="text-input">
            <label className="text-input-label">{label}</label>
            <input
                value={value}
                onChange={onChange}
                type={type || "text"}
                className={error ? "text-input-field error" : "text-input-field"}
                aria-label={label}
            />
            {error && <span className="text-input-error">{error}</span>}
        </span>
    );
};

export default TextInput;
