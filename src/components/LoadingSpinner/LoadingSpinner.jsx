import spinner from "../../assets/spinner.svg";
import "./LoadingSpinner.css"

const LoadingSpinner = () => {
    return (
        <div className={"loadingSpinner"} role="status" aria-live="polite">
            <img src={spinner} alt=""/>
            <span className="sr-only">Loading</span>
        </div>
    );
}

export default LoadingSpinner;
