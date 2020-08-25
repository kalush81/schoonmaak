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
          name: "keywords",
          content: ["dupa, pizda"],
        },
      ].concat(meta)}
    ></Helmet>
  )
}
