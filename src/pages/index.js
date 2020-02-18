import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>We make parts on demand.</h1>
    <p>To try our mobile app, scan this QR code.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
   
    <div class="container">
    <div class="row">
        <div class="col-xs-6">
            <img src="../Images/screen_shot.png" alt="ScreenShot" class="pull-right"/>
        </div>
        <div class="col-xs-6">
          Column 2
        </div>
    </div>
</div>

    </div>
  </Layout>
)

export default IndexPage
