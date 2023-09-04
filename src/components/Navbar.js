import logo from "../images/logo2.svg";

function Navbar() {
    return (
        <div className="cont-nav">
            <div className="nav-logo">
                <p>AX01</p>
            </div>
            <div className="cont-buttons-nav">
                <div className="nav-button">Inicio</div>
                <div className="nav-button">Soluciones IT</div>
                <div className="nav-button">Acerca de </div>
            </div>
        </div>
    )
}

export default Navbar

