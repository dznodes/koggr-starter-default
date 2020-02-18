import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>We make parts on demand.</h1>
    <p>Scan this QR code to try out our mobile app.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    <button class="primary-button">Click me</button>
    </div>
  </Layout>
)

export default IndexPage
