import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

import Header from '../components/Header/Header'
// import './index.css'
// import './bootstrap-grid.min.css'

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: '100%',
      marginLeft: 0,
      marginRight: 0,
    },
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const Layout = ({ children, data, classes }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} categories={data.tags} />
    <div className={classes.root}>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default withRoot(withStyles(styles)(Layout))

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    },
    tags: allVideosJson(
      sort: {fields: [date], order: DESC}, 
      limit: 6
    ) {
    	group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
