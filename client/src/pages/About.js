import { Link } from "react-router-dom";

function About() {
  return (
    <div className="home-cont">
      <div className="containerSolutions">
        <div className="contSolutions">
          <div className="titleSolutions">
            <h1>¿Que somos?</h1>
          </div>

          <div className="textSolutions">
            <p>
              Somos una empresa comprometida a brindar soluciones tecnológicas
              con el propósito de elevar la calidad del software en
              Latinoamérica.
              Desarrollamos software de calidad con las mejores tecnologías
                para nuestros clientes aumenten su productividad.
            </p>
          </div>


          <div className="titleSolutions">
            <p>Mision </p>
          </div>

          <div className="textSolutions">
            <p>
              <span>
                "Misión: En Ax01, nos dedicamos a proporcionar soluciones
                tecnológicas que encarnan nuestra filosofía de simplicidad,
                permitiendo a todos abordar desafíos complejos de manera más
                simple y efectiva. Nos esforzamos por transformar la forma en
                que las personas enfrentan los retos diarios a través de
                soluciones duraderas, adaptables y fáciles de usar. Nuestra
                misión es empoderar a las personas y organizaciones, ofreciendo
                soluciones tecnológicas que simplifican la vida y fomentan la
                eficacia en un mundo en constante cambio.”
              </span>
            </p>
          </div>

          <div className="titleSolutions">
            <p>Vision </p>
          </div>

          <div className="textSolutions">
            <p>
              <span>
                "En Ax01, nuestra visión es ser pioneros en el desarrollo de
                software que perdure en el tiempo. Nos esforzamos por crear
                software duradero y flexible, capaz de adaptarse a las demandas
                cambiantes del mercado, con la firme convicción de proporcionar
                soluciones que perduren al paso del tiempo, al igual que el
                inmortal axolotl. Asimismo, buscamos motivar a las personas,
                inspirándolas con nuestra filosofía de simplicidad, para abordar
                desafíos complejos de manera fácil.”
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
