import React from "react"

import ocLinkedInIcon from "../images/icons/Linkedin.svg"
import ocGitHubIcon from "../images/icons/GitHub.svg"
import ocMediumIcon from "../images/icons/Medium.svg"
import ocBehanceIcon from "../images/icons/Behance.svg"
import ocEmailIcon from "../images/icons/Email.svg"

const SocialMediaIcons = () => {
  return (
    <div>
      <a href="https://linkedin.com/in/olegchursin">
        <img
          src={ocLinkedInIcon}
          alt="Oleg Chursin on LinkedIn"
          className="icon"
        />
      </a>
      <a href="https://github.com/olegchursin">
        <img src={ocGitHubIcon} alt="Oleg Chursin on Github" className="icon" />
      </a>
      <a href="https://medium.com/@olegchursin">
        <img src={ocMediumIcon} alt="Oleg Chursin on Medium" className="icon" />
      </a>
      <a href="https://www.behance.net/olegchursin">
        <img
          src={ocBehanceIcon}
          alt="Oleg Chursin on Behance"
          className="icon"
        />
      </a>
      <a href="mailto:olegchursin@gmail.com">
        <img src={ocEmailIcon} alt="Oleg Chursin Email" className="icon" />
      </a>
    </div>
  )
}

export default SocialMediaIcons
