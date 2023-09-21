import logoAxol from "../images/axol.svg"

function Contact() {
    return (
        <div className="contactMain">
            <div className="contList">
            <li className="solutions">
                        <div className="solution-details">
                        <img src={logoAxol} className="logoContact" alt="logo" />
                            <div className="solution-text">
                                <h3 className="solution-title">Contactanos </h3>
                                <p>
                                    Agenda una consultoria con nosotros:
                                </p>
                            </div>
                        </div>
                        <div className="solution-footer">
                            <div className="solutionFooter-cont">
                                <div className="solutionFooter-header">
                                    Contacto
                                </div>
                                <div className="solutionFooter-list">
                                    <ul>
                                        <li>Correo: bildev1958@gmail.com </li>
                                        <li>WhatsApp: 7294574940</li>
                                        <li>Direaccion: Chapultepec 104 Chapultepec Estado de mexico</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
            </div>


        </div>
    )
}

export default Contact