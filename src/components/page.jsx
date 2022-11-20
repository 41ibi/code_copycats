import React from "react"
import Layout from "./layout"
import { useStaticQuery, graphql } from "gatsby"
import Vocabulary from "../vocabulary"

export default function Page({ pageContext }) {
  return (
    <Layout location={pageContext.name}>
      <div dangerouslySetInnerHTML={{__html: pageContext.rawContent}}/>
    </Layout>
  )
}
const words= Vocabulary()
export const Head = () => {
  const data = useStaticQuery(graphql`
    query title {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
  <>
    <title>{data.site.siteMetadata.title}</title>
  </>
)}