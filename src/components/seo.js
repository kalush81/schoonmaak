import React from "react"
import { Helmet } from "react-helmet"

export default function Seo({ description, lang = "nl", meta, title, rel }) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      
      meta={[
        {
          name: "description",
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: "Michael Van Loon",
        },
        {
          name: "keywords",
          content: [
            "schoonmaakbedrijf",
            "schoonmaak loont",
            "milieubewuste",
            "Tilburg",
            "Nederland",
            "schoonmaakbedrijf tilburg nederland",
            "ramen wassen", 
            "glazen wassen",
            "particulier schoon"
          ],
        },
        {
          name: "google-site-verification",
          content: "clELBBpwtzkXqxHl-Xivchxvd4w1FnHtC59g3yYc59k",
        },
      ].concat(meta)}
    >
      <link rel="canonical" href="https://www.schoonmaakloont.nl/particulier" />
      <link rel="canonical" href="https://www.schoonmaakloont.nl/ramenwassen" />
      <link rel="canonical" href="https://www.schoonmaakloont.nl/zakelijk" />
      <link rel="canonical" href="https://www.schoonmaakloont.nl/overons" />
      <link rel="canonical" href="https://www.schoonmaakloont.nl/contact" />
      <link rel="canonical" href="https://www.schoonmaakloont.nl/desinfecteren" />
      <link rel="canonical" href="https://www.schoonmaakloont.nl/privacybeleid" />
      <link rel="canonical" href="https://www.schoonmaakloont.nl/disclaimer" />
      
    </Helmet>
  )
}
