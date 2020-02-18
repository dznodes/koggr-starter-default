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
   
    <body>
      <button onclick='https://forms.gle/vGo5FozQmdwW1B1AA';">Or Click Here</button>
    </body>

    </div>
  </Layout>
)

export default IndexPage
