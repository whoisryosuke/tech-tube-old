import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import VideoTime from '../VideoTime/VideoTime'
import Tags from '../Tags/Tags'


const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header: {
    fontSize: '1.3em',
  },
  headerLink: {
    textDecoration: 'none',
  }
})

const VideoCard = ({ video, classes }) => {
  let postDate = new Date(video.node.date);
  return <Card className={classes.card}>
      <CardMedia className={classes.media} image={video.node.cover_image} title={video.node.name} />

      <CardContent>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Typography className={classes.pos} color="textSecondary">
              {video.node.speaker.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.pos} color="textSecondary" align="right">
              <span className="date">{postDate.getFullYear()}</span>
            </Typography>
          </Grid>
        </Grid>
        
        <Link to={video.node.fields.slug} className={classes.headerLink}>
          <Typography gutterBottom variant="headline" component="h2" className={classes.header}>
            {video.node.name}
          </Typography>
        </Link>

        {/* <VideoTime length={video.node.length} /> */}
        
        <Tags tags={video.node.tags} />

      </CardContent>
    </Card>
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VideoCard)
