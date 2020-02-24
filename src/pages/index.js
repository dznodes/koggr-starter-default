import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>We make parts on demand.</h1>
    <p>To try our mobile app please scan this QR code.</p>
    <div style={{ maxWidth: `1200px`, marginBottom: `1.45rem`, padding: '20px' }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
