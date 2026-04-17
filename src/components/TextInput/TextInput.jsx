import "./TextInput.css"
import {useId} from "react";

const TextInput = ({ label, onChange, type = "text", value, required, autoComplete, error }) => {
    const id = useId();
    const errorId = `${id}-error`;
    return (
        <div className="text-input">
            <label htmlFor={id}>
                {label}
                {required && <span aria-hidden="true" className="text-input-required"> *</span>}
            </label>
            <input
                id={id}
                onChange={onChange}
                type={type}
                value={value}
                required={required}
                autoComplete={autoComplete}
                aria-invalid={error ? "true" : "false"}
                aria-describedby={error ? errorId : undefined}
            />
            {error && <span id={errorId} className="text-input-error" role="alert">{error}</span>}
        </div>
    )
}

export default TextInput;
