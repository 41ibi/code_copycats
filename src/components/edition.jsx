import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./layout"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'

import theme from "../theme"

import "../CETEIcean.css"

export default function Edition({ data, pageContext }) {
  return (
    <Layout location="edition">
      <div dangerouslySetInnerHTML={{__html: pageContext.rawContent}}/>
    </Layout>
  )
}

export const query = graphql`
  query cetei {
    allCetei {
      nodes {
        prefixed
        elements
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`