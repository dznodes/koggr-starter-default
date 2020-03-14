import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>We make custom parts on demand.</h1>
    <p>Scan this QR code to try our mobile app.</p>
    <div style={{ maxWidth: `1294px`, marginBottom: `1.45rem`, padding: '20px' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
