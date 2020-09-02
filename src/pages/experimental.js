// import React from "react"
// import SEO2 from "../components/seo2"
// import Layout from "../components/layout"
// import { graphql, useStaticQuery } from "gatsby"

// export default function Experimental() {
//   const data = useStaticQuery(graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             title
//             data
//           }
//         }
//       }
//     }
//   }
//   `)
//   //const keywords = data.site.siteMetadata.keywords
//   //const author = data.site.siteMetadata.author
//   const articlesTitle = data.allMarkdownRemark.edges
//   return (
//     <Layout>
//       <SEO2 title="some experimentals in this page, learning and so on.."></SEO2>
//       <h1>hello in my experimental page</h1>
//       <h1>I am {}</h1>
//       <p>topic covered here: </p>
//       <ul>
//         {articlesTitle.map(article => {
//           console.log('article:', article)
//           return <li key={article.node.frontmatter.data}>{article.node.frontmatter.title}</li>
//         })}
//       </ul>
//     </Layout>
//   )
// }
