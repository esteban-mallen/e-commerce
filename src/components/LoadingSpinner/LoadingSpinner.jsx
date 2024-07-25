import spinner from "../../assets/spinner.svg";
import "./LoadingSpinner.css"

const LoadingSpinner = () => {
    return (
        <>
            <div className={"loadingSpinner"}>
                <img src={spinner}/>
            </div>
        </>
    );
}

export default LoadingSpinner;
