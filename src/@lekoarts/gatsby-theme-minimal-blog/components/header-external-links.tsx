/** @jsx jsx */
import React from "react"
import { jsx, Link as TLink } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../utils/fontawesome'

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()

  return (
    <React.Fragment>
      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `18px`] }}>
          {externalLinks.map((link) => (
            <TLink key={link.url} href={link.url}>
              {/* {link.name} */}
              <FontAwesomeIcon icon={["fab", link.name]} />
            </TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks