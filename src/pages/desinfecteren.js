import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Article from "../components/article"
import Pakkets from "../components/pakkets"
import { certificates } from "../components/packets"
import desinfStyles from "../components/desinf.module.scss"
import certImg from "../images/certificates/Ozon-Certificaat-Virus-Desinfectie-Corona.jpg"
import Seo2 from "../components/seo2"

//import cert from '../images/'

export default function Desinfecteren() {
  console.log("certificate title: ", certificates[0].title)
  return (
    <Layout>
      <Seo2
        title="Schoonmaak Loont schoonmaakbedrijf Tilburg Coronavirusvrij met Ozon"
        description="Ozon binnenshuis en op kantoor is een effectieve en bewezen methode voor het verwijderen van ziektekiemen, bacteriën en allergenen en virussen. Het verbetert het gebruiksgemak van kantoorpanden, maar elimineert vooral pathogene ziektekiemen."
      />
      <Header
        page="desinfecteren"
        title="Virusvrij thuis en op kantoor met Ozon."
      />
      <Article>
        <div className={desinfStyles.list}>
          <p>
            Ozon binnenshuis en op kantoor is een effectieve en bewezen methode
            voor het verwijderen van ziektekiemen, bacteriën en allergenen en
            virussen. Het verbetert het gebruiksgemak van kantoorpanden, maar
            elimineert vooral pathogene ziektekiemen.
          </p>
          <Pakkets
            packetsName={certificates[0].title}
            packets={/*certificates*/ null}
            style={{ margin: 0 }}
          >
            <div className={desinfStyles.certContainer}>
              <div className={desinfStyles.certImage}>
                <img src={certImg} />
              </div>
              <div className={desinfStyles.certDescription}>
                <h3>GECERTIFICEERD VOOR</h3>

                <blockquote>
                  "<strong> Ozon</strong>, ozongeneratoren en mogelijkheden van
                  ozontoepassingen bij ontgeuring en desinfectiebehandelingen.
                  Desinfectie van zorginstellingen, openbare gebouwen,
                  appartementen en alle voertuigen die worden bedreigd met het
                  Coronavirus. "
                </blockquote>

                <p>Schoonmaak Loont v.o.f.</p>
              </div>
            </div>
          </Pakkets>
          <h3>Ozon bij coronavirus</h3>
          <p>
            Is ozon effectief bij coronavirus? Ja, ozon vernietigt alle virussen
            in de lucht op oppervlakken, materialen en voorwerpen in de juiste
            concentratie. Het ozonproces van lokalen moet echter naar behoren
            worden uitgevoerd, het is belangrijk om deze kwestie aan
            specialisten toe te vertrouwen. Ozon wordt aanbevolen voor
            ontsmetting van lokalen na quarantaine.
          </p>
          <h3>Ozon - een effectieve ontsmettingsmethode</h3>
          <p>
            Ozon is een gas dat de kleinste hoekjes en gaten van kantoren,
            bijkeukens, industriële hallen kan binnendringen. Het heeft een
            natuurlijk vermogen om onaangename geuren te absorberen en
            gevaarlijke bacteriën, allergenen, maar ook schimmels en schimmels
            te neutraliseren. Al deze factoren kunnen leiden tot de vorming van
            gevaarlijke ziekten of de verergering van astma.
          </p>
          <h3>Ozon in het kantoor, kleuterscholen | snelle deadlines</h3>
          <p>
            Ozon is een natuurlijke, niet-chemische wasmiddel, sanitaire en
            desinfectiemethode. Hoe ziet kantoor ozon eruit? Ozon is een
            volkomen veilige ontsmettingsmiddel methode die werkt in zowel
            openbare als industriële gebouwen, en zelfs speciale doeleinden,
            zoals klaslokalen in medische of educatieve instellingen. Ozon laat
            een aangename geur, geassocieerd met de geur drijvend na de storm
            (tijdens elektrische ontladingen, ozon wordt gevormd).
          </p>
          <h3>
            Zorg voor de gezondheid van uw medewerkers, klanten en geliefden!
          </h3>
          <ul>
            <li>
              Ozon van ruimten bestaat uit het instellen van een speciaal
              apparaat dat ozondeeltjes produceert .
            </li>
            <li>
              Meestal is een paar uur gebruik van de machine voldoende voor
              desinfectie en het juiste brouwen van de gemiddelde ruimte. Het
              hangt echter allemaal af van de mate van luchtvervuiling en de
              omvang/volume van de ruimte.
            </li>
            <li>100% ecologische methode</li>
          </ul>
          <h3>Ozon in de kamer | voor wie?</h3>
          <p>
            Ozon is een volkomen veilige ontsmettingsmiddelmethode die goed
            werkt in:
          </p>
          <ul>
            <li>Kantoorruimtes</li>
            <li>Kantoren, overheidsdiensten</li>
            <li>Medische voorzieningen</li>
            <li>Onderwijsinstellingen (kleuterscholen en crèches)</li>
            <li>Fitnessruimte, fitnessclubs</li>
            <li>Hotelkamers</li>
            <li>Logistiek, magazijnen</li>
            <li>Taxi's, auto's, bussen, bussen</li>
            <li>Privé-appartementen</li>
          </ul>
          <h3>Ozoning kamers – prijs</h3>
          <p>
            Onze ozonisatie prijs hangt af van het volume van de kamer en de tijd
            die moet worden besteed aan ozon. Wilt u meer weten over
            kantoorruimte, neem dan contact met ons op via 0629262799 of e-mail:
          </p>
          <a href="mailto:hallo@schoonmaakloont.nl">hallo@schoonmaakloont.nl</a>
        </div>
      </Article>
    </Layout>
  )
}
