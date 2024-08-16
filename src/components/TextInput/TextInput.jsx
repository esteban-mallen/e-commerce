import "./TextInput.css"

const TextInput = (props) => {
    return (
        <>
            <span className="text-input" >
                <p>{props.label}</p>
                <input onChange={props.onChange} type={props.type || "text"}/>
            </span>
        </>
    )
}

export default TextInput;
