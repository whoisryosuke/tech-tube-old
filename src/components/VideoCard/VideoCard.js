import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'


const styles = theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  chip: {
    margin: theme.spacing.unit,
  },
})

const VideoCard = ({ video, classes }) => {
  return <Card className={classes.card}>
      <CardMedia className={classes.media} image={video.node.cover_image} title={video.node.name} />
      <CardContent>
        <Link to={video.node.fields.slug} className="header">
          <Typography gutterBottom variant="headline" component="h2">
            {video.node.name}
          </Typography>
        </Link>
        <Typography className={classes.pos} color="textSecondary">
          <span className="length">
            {/* Minutes = length / 60 : Seconds = Length - (Minutes * 60) */}
            {/* https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds */}
            {/* https://stackoverflow.com/questions/8513032/less-than-10-add-0-to-number */}
            {Math.round(Number(video.node.length) / 60)}:{Number(video.node.length) - Math.round(Number(video.node.length) / 60) * 60}
          </span>
          <span className="date">{video.node.date}</span>
        </Typography>
        <Typography component="p">{video.node.speaker.name}</Typography>
        <nav className="Tags">
          {video.node.tags.map(tag => <Link to={`tag/${tag}`}>
              <Chip label={tag} className={classes.chip} />
            </Link>)}
        </nav>
      </CardContent>
    </Card>
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VideoCard)
