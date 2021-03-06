import React from "react"
import headerStyle from "./header.module.scss"

import withAutoplay from "react-awesome-slider/dist/autoplay"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import "react-awesome-slider/dist/captioned.css"
import sliderStyles from "./slider.module.scss"

const style = {
  container: {
    border: "10px solid black",
  },
  imageContainer: {},

  header: {
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: "big",
  },
  para: {
    padding: "20px 20px",
    marginBottom: 0,
  },
}

const AutoplaySlider = withAutoplay(AwesomeSlider)

export default function Header({ page, title, processedImage }) {
  if (page === "home") {
    console.log("processedImage: ", processedImage)
    return (
      <AutoplaySlider
        play={true}
        interval={6000}
        className={sliderStyles.container}
      >
        <div
          title="Milieu Vriendelijk Schoonmaak"
          alt="Vriendelijk Schoonmaak Bedrijf"
          //data-src={require("../images/slider-pics/Milieu_Vriendelijk_Schoonmaak.jpg")}
          data-src={processedImage[0].props.fluid.src}
        >
          <div data-type="caption">
            <h2 style={style.header}>ONS MISSIE</h2>
            <p>
              Schoonmaak Loont focust op kwaliteit en zorgt ervoor dat geniet u
              van een schoon en representatief resultaat, zonder dat u ergens
              omkijken naar heeft.
            </p>
          </div>
        </div>
        <div
          title="Corona Virus Schoonmaak"
          alt="Corona Virus"
          data-src={processedImage[1].props.fluid.src}
        >
          <div data-type="caption">
            <h2 style={style.header}>INNOVATIEF DESINFECTEREN</h2>
            <p>
              Ozon binnenshuis is een effectieve en bewezen methode voor het
              verwijderen van ziektekiemen, bacteriën en allergenen en virussen.
            </p>
          </div>
        </div>
        <div
          title="Duurzaamheid Schoonmaak"
          alt="Duurzaamheid Schoonmaak"
          data-src={processedImage[2].props.fluid.src}
        >
          <div data-type="caption">
            <h2 style={style.header}>ons visie</h2>
            <p>
              Bij ons werk vormt duurzaamheid een belangrijke pijler. We hebben
              oog voor het milieu en gaan voor een samenwerking op de lange
              termijn.
            </p>
          </div>
        </div>
      </AutoplaySlider>
    )
  }
  return (
    <figure className="full-width-wrap nomargin">
      {/* <img alt={page+' schoonmaak'} title={page+' schoonmaak'} src={require(`../images/${page}.jpg`)} /> */}
      {/* <Img fixed={data.imageOne.childImageSharp.fixed}/> */}
      <div style={{width: '100%'}}>{processedImage}</div>
      <figcaption className={headerStyle.figcap}>{title}</figcaption>
    </figure>
  )
}
