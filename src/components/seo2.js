import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

function SEO2({ description, meta, image: metaImage, title }) {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              author
              description
              siteUrl
              keywords
            }
          }
        }
      `}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const image =
          metaImage && metaImage.src
            ? `${data.site.siteMetadata.siteUrl}${metaImage.src}`
            : null
        return (
          <Helmet
            htmlAttributes={{
              lang: "en",
            }}
            title={title}
            meta={[
              {
                name: "description",
                content: metaDescription,
              },
              {
                name: "keywords",
                content: data.site.siteMetadata.keywords.join(","),
              },
              {
                property: "og:title",
                content: title,
              },
              {
                property: "og:description",
                content: metaDescription,
              },
              {
                name: "twitter:creator",
                content: data.site.siteMetadata.author,
              },
              {
                name: "twitter:title",
                content: title,
              },
              {
                name: "twitter:description",
                content: metaDescription,
              },
              {
                name: "google-site-verification",
                content: "clELBBpwtzkXqxHl-Xivchxvd4w1FnHtC59g3yYc59k",
              },
            ]
              .concat(
                metaImage
                  ? [
                      {
                        property: "og:image",
                        content: image,
                      },
                      {
                        property: "og:image:width",
                        content: metaImage.width,
                      },
                      {
                        property: "og:image:height",
                        content: metaImage.height,
                      },
                      {
                        name: "twitter:card",
                        content: "summary_large_image",
                      },
                    ]
                  : [
                      {
                        name: "twitter:card",
                        content: "summary",
                      },
                    ]
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO2.defaultProps = {
  meta: [],
}

SEO2.propTypes = {
  description: PropTypes.string,
  image: PropTypes.shape({}),
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default SEO2
