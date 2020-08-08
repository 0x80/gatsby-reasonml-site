import './index.css'

import IndexLayout from './IndexLayout.re'
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data, children }) => (
  <IndexLayout data={data}>{children}</IndexLayout>
)

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
