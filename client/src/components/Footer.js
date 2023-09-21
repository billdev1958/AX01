import logoF from "../images/axol.svg"
import githubLogo from "../images/github.svg"
function Footer() {
    return (
        <div className="footer-m">
            <div className="footer-c">
                <div className="logoF">
                    <img src={logoF} className="footer-logo" alt="logo" />
                </div>
                <div>
                    <h3>Axol</h3>
                </div>
            </div>
            <div className="footer-list">
                    <div className="footer-link">
                        <img src={githubLogo} className="github-logo" alt="logo" />
                    </div>
                </div>
        </div>
    )
}

export default Footer