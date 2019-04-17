import React from "react"

import "../oc.css"
import SEO from "../components/seo"

import SocialMediaIcons from "../components/SocialMediaIcons"
import Header from "../components/Header"
import WebDev from "../components/WebDev"
import Design from "../components/Design"
import Photography from "../components/Photography"

const seoKeywords = [
  `olegchursin`,
  `oleg chursin`,
  `web development`,
  `photography`,
  `web design`,
]

const IndexPage = () => {
  return (
    <div style={{paddingBottom: 80}}>
      <SEO title="Home" keywords={seoKeywords} />
      <Header />
      <SocialMediaIcons />
      <WebDev />
      <Design />
      <Photography />
    </div>
  )
}

export default IndexPage
