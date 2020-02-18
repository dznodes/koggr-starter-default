import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome</h1>
    <p>We make parts on demand.</p>
    <p>Scan this QR code to try out our mobile app.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    <p>Or click this link to use a web based form.  
        https://forms.gle/52cui8bs4Bm29HyVA</p>
    </div>
  </Layout>
)

export default IndexPage
