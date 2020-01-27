import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from '@material-ui/styles';
import theme from "../theme/muiTheme"

import Header from "./header"
import Footer from './footer'

const Layout = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
        <Header siteTitle="Index"/>
        <div>
            <main>{children}</main>
        </div>
        <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
