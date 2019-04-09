import React from "react"

import "../oc.css"
import SEO from "../components/seo"

import SocialMediaIcons from "../components/SocialMediaIcons"
import Header from "../components/Header"

const IndexPage = () => {
  return (
    <div>
      <SEO
        title="Home"
        keywords={[`olegchursin`, `oleg chursin`, `web development`]}
      />
      <Header />
      <SocialMediaIcons />
      <section>
        <h2>Web Development</h2>
        <h4>Human Interaction</h4>
        <p>Full stack web dev / Founder / UX/UI Designer</p>
        <div>
          <a href="http://hinteraction.com">hinteraction.com</a> /
          <a href="https://github.com/olegchursin">GitHub</a> /
          <a href="clients">Clients</a>
        </div>
      </section>

      <section>
        <h2>Design</h2>
        <h4>UI/UX</h4>
        <div>
          <a href="https://olegchursin.myportfolio.com/">Portfolio</a> /
          <a href="https://www.behance.net/olegchursin">Behance</a>
        </div>
      </section>

      <section>
        <h2>Photography</h2>
        <h4>Portraits</h4>
        <div>
          <a href="http://portraits.olegchursin.com">
            portraits.olegchursin.com
          </a>
        </div>

        <h4>Wedding</h4>
        <div>
          <a href="http://wedding.olegchursin.com">wedding.olegchursin.com</a>
        </div>
      </section>
    </div>
  )
}

export default IndexPage
