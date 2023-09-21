import logo from "../images/axol.svg";
import weblogo from "../images/sphere-dark.svg"
import commandlogo from "../images/command.svg"
import gearlogo from "../images/gear.svg"

const scrollDown = () => {
    window.scrollTo({
        top: 700,
        behavior: "smooth"
    })
}

function Homepage() {
    return (
        <div className="home-cont">

            <div className="header-logo">
                <img src={logo} className="logo" alt="logo" />

                <div className="home-button">
                    <button className="buttonM1" onClick={scrollDown}>Explorar</button>
                </div>
            </div>



            <div className="header-introduction">
                <div className="intro-text">
                    <div className="textI">
                        <p>Axol es una empresa con un enfoque en tecnologias mas flexible ya que no nos cerramos en opciones en cuanto a tecnologias que usaremos para darte el mejor producto final posible para que nuestro software se lleve bien con el paso del tiempo</p>
                    </div>
                </div>
            </div>

            <div className="section-solutions">
                <div className="section-grid">
                    <li className="solutions">
                        <div className="solution-details">
                            <img src={commandlogo} className="weblogo" alt="weblogo" />
                            <div className="solution-text">
                                <h3 className="solution-title">Desarrollo de software </h3>
                                <p>
                                    Desarrollamos el software que necesitas con las mejores y mas nuevas tecnologias
                                </p>
                            </div>
                        </div>
                        <div className="solution-footer">
                            <div className="solutionFooter-cont">
                                <div className="solutionFooter-header">
                                    Creamos
                                </div>
                                <div className="solutionFooter-list">
                                    <ul>
                                        <li> CLI </li>
                                        <li>Sistemas para windows</li>
                                        <li>Sistemas para linux</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="solutions">
                        <div className="solution-details">
                            <img src={weblogo} className="weblogo" alt="weblogo" />
                            <div className="solution-text">
                                <h3 className="solution-title">Desarrollo web</h3>

                                <p>
                                    Diseñamos paginas o aplicaciones web para tu negocio o producto
                                </p>
                            </div>
                        </div>
                        <div className="solution-footer">
                            <div className="solutionFooter-cont">
                                <div className="solutionFooter-header">
                                    Creamos
                                </div>
                                <div className="solutionFooter-list">
                                    <ul>
                                        <li> Paginas web </li>
                                        <li>Aplicaciones web</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="solutions">
                        <div className="solution-details">
                            <img src={gearlogo} className="weblogo" alt="weblogo" />
                            <div className="solution-text">
                                <h3 className="solution-title">Optimizamos tu negocio</h3>

                                <p>
                                    Mejoramos la eficiencia de tu negocio automatizando procesos o actualizando tus sistemas viejos a tecnologias mas recientes y rapidas
                                </p>
                            </div>
                        </div>
                        <div className="solution-footer">
                            <div className="solutionFooter-cont">
                                <div className="solutionFooter-header">
                                    Creamos
                                </div>
                                <div className="solutionFooter-list">
                                    <ul>
                                        <li> Automatizacion de procesos </li>
                                        <li>Actualizacion de sistemas viejos</li>
                                        <li>Consultoria</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            </div>

            <div className="header-introduction">
                <div className="intro-text">
                    <div className="textI">
                        <p>Axol es una empresa con un enfoque en tecnologias mas flexible ya que no nos cerramos en opciones en cuanto a tecnologias que usaremos para darte el mejor producto final posible para que nuestro software se lleve bien con el paso del tiempo</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage