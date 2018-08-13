import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'


const styles = theme => ({
  chip: {
    margin: theme.spacing.unit,
  },
  link: {
    textDecoration: 'none'
  }
})

const Tags = ({ classes, tags }) => {

  const loop = tags.map(tag =>
    <Link to={`tag/${tag}`} className={classes.link}>
      <Chip label={tag} className={classes.chip} />
    </Link>)

  return (
    <nav className="Tags">
      { loop }
    </nav>
  )
}

Tags.propTypes = {
  tag: PropTypes.array.isRequried
}

export default withStyles(styles)(Tags)