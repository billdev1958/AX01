import { Link } from "react-router-dom"

const NavRouter = [["Inicio", "/"], ["Soluciones", "solutions"], ["Proyectos", "proyects"], ["Acerca de", "about"]]

function Navbar() {
    return (
        <div className="cont-nav">
            <div className="nav-logo">
                <p>AX01</p>
            </div>
            <nav className="cont-buttons-nav">
                {NavRouter.map(([title, url]) => (
                    <div className="nav-button">
                        <Link className="nav-link"
                            to={url}
                        >
                            {title}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    )
}

export default Navbar

