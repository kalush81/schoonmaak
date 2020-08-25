import React from "react"
import { Helmet } from "react-helmet"

export default function Seo({ description, lang = "nl", meta, title }) {
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
          content: ["schoonmaak loont", "milieubewuste"],
        },
        {
          name: "google-site-verification",
          content: "clELBBpwtzkXqxHl-Xivchxvd4w1FnHtC59g3yYc59k",
        },
      ].concat(meta)}
    ></Helmet>
  )
}
