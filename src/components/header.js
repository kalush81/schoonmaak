import React from "react"
import headerStyle from "./header.module.scss"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "react-awesome-slider/dist/captioned.css"
import sliderStyles from "./slider.module.scss"


const style = {
  container: {
    border: '10px solid black',
  },
  imageContainer: {
    height: '100%'
  },
  header: {
    fontWeight: 'bold', 
    padding: '10px 20px', 
    marginBottom: 0, 
    background: 'rgba(255,255,255, 0.6)'
  },
  para: {
    padding: '10px 20px', 
    marginBottom: 0, 
    background: 'rgba(255,255,255, 0.6)'
  }
}

const AutoplaySlider = withAutoplay(AwesomeSlider)
export default function Header({ page, title }) {
  if (page === "home") {
    return (
      <AutoplaySlider play={false} interval={4000} className={sliderStyles.container}>
        <div
          style={style.imageContainer}
          title="Duurzaamheid_Schoonmaak"
          data-src={require("../../static/images/slider-pics/Duurzaamheid_Schoonmaak.jpg")}
        >
          <div data-type="caption">
            <h2 style={style.header}>ONS VISIE</h2>
            <p style={style.para}>
              Bij ons werk vormt duurzaamheid een belangrijke pijler. We hebben
              oog voor het milieu en gaan voor een samenwerking op de lange
              termijn.
            </p>
          </div>
        </div>
        <div
          title="Corona_Virus_Schoonmaak"
          data-src={require("../../static/images/slider-pics/Corona_Virus_Schoonmaak.jpg")}
        >
          <div data-type="caption">
            <h2 style={style}>INNOVATIEF DESINFECTEREN</h2>
            <p>
              Ozon binnenshuis is een effectieve en bewezen methode voor het
              verwijderen van ziektekiemen, bacteriën en allergenen en virussen.
            </p>
          </div>
        </div>
        <div
          title="Milieu_Vriendelijk_Schoonmaak"
          data-src={require("../../static/images/slider-pics/Milieu_Vriendelijk_Schoonmaak.jpg")}
        >
          <div data-type="caption">
            <h2 style={style}>ONS MISSIE</h2>
            <p>
              Schoonmaak Loont focust op kwaliteit en zorgt ervoor dat geniet u
              van een schoon en representatief resultaat, zonder dat u ergens
              omkijken naar heeft.
            </p>
          </div>
        </div>
      </AutoplaySlider>
    )
  }
  return (
    <figure className="full-width-wrap nomargin">
      <img src={require(`../../static/images/${page}.jpg`)} alt={page} />
      <figcaption className={headerStyle.figcap}>{title}</figcaption>
    </figure>
  )
}
