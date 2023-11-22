import logoMenu from "../images/menuLogo.svg"
import logoF from "../images/axol.svg"
import { useState } from "react";
import { Link } from "react-router-dom";


function NavbarMobile() {
    
    const [open, setOpen] = useState(false);

    return (
        
        <>

            <header  className="Site-header">
                <div className="Header Header--dark ">
                    <nav className="Header-nav">
                        <p className=".Header-logo">AX01</p>
                        <div class="skip-navigation-wrapper">
        <a class="skip-to-content-link" aria-label="Skip to main content" href="#main-content"> Skip to Main Content </a>
      </div>
                        <div className="Header-rightContent">
                            <ul className="Header-menu">
                                <li className="Header-menuItem">
                                    <Link to={"/"}>Inicio</Link>
                                </li>
                                {/* <li className="Header-menuItem">
                                <Link to={"/solutions"}>Soluciones</Link>
                                </li> */}
                                <li className="Header-menuItem">
                                <Link to={"/about"}>Acerca de</Link>
                                </li>
                                <li className="Header-menuItem">
                                <Link to={"/contact"}>Contacto</Link>
                                </li>
                            </ul>
                            <div onClick={() => setOpen(!open)}>
                                <img src={logoMenu} className="Header-navOpen" alt="logo" />
                            </div>

                        </div>
                    </nav>
                </div>
            </header>

            <aside className=  {open ? "NavigationDrawer is-active" : "NavigationDrawer" }>
                <nav className="NavigationDrawer-nav">
                    <div  className="NavigationDrawer-header">
                          
                            <img onClick={() => setOpen(!open)} src={logoF} className="NavigationDrawer-logo" alt="logo" />
                        
                    </div>

                    <ul className="NavigationDrawer-list">
                        <li className="NavigationDrawer-listItem">
                        <Link onClick={() => setOpen(!open)} to={"/"}>Inicio</Link>
                        </li>

                        {/* <li className="NavigationDrawer-listItem">
                        <Link onClick={() => setOpen(!open)} to={"/solutions"}>Soluciones</Link>
                        </li> */}

                        <li className="NavigationDrawer-listItem">
                        <Link onClick={() => setOpen(!open)} to={"/about"}>Acerca de</Link>
                        </li>

                        <li className="NavigationDrawer-listItem">
                        <Link onClick={() => setOpen(!open)} to={"/contact"}>Contacto</Link>
                        </li>
                    </ul>
                </nav>

            </aside>
        </>
    )
}

export default NavbarMobile