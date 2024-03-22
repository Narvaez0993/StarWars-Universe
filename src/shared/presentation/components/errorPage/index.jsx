import Background from "../backGround";
import './errorPage.scss'

const ErrorPage = () => {

    return(
        <div className="page-error">
            <Background/>
            <h1>¡Oops! Parece que te has perdido en la galaxia. Que la fuerza te acompañe.</h1>
        </div>
    )
}

export default ErrorPage;