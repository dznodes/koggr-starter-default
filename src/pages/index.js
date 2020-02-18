import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>Scan this QR code to try our mobile app.
    <br>We make parts on demand.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    #<Link to="/page-2/">Go to page 2</Link>#
  </Layout>
)

export default IndexPage
