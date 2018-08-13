import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
  header: {
    padding: theme.spacing.unit * 2,
    backgroundColor: '#222',
  },
  content: {
    backgroundColor: '#555',
  },
  row: {
    display: 'flex',
  },
  rowContent: {
    padding: theme.spacing.unit * 2,
    display: 'inline-block',
  },
  cover: {
    width: '150px',
    height: '75px',
    overflow: 'hidden',
    margin: theme.spacing.unit * 2,
    marginRight: '0',
    display: 'inline-block',
  },
  coverImage: {
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    color: '#FFF',
  },
})

const Playlist = ({ classes, playlist }) => {
  console.log(playlist)
  const videos = playlist.edges.map((video) => (
    <Link to={video.node.fields.slug} className={classNames(classes.link, classes.row)}>
      <figure className={classes.cover}>
        <img src={video.node.cover_image} className={classes.coverImage} />
      </figure>
      <div className={classes.rowContent}>
        <Typography variant="subheading" gutterBottom>
            { video.node.name }
        </Typography>
      </div>
    </Link>
  ))
  return (
    <nav className={classes.root}>
      <section className={classes.header}>
        <Typography variant="title" gutterBottom>
          Playlist
        </Typography>
      </section>
      <section className={classes.content}>
        { videos }
      </section>
    </nav>
  )
}

Playlist.propTypes = {

}

export default withStyles(styles)(Playlist)