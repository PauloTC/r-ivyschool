import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from '@material-ui/styles';
import theme from "../theme/muiTheme"

import Header from "./header"

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
        <Header siteTitle="Index"/>
        <div>
            <main>{children}</main>
            <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
        </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
