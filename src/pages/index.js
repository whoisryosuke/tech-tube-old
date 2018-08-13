import React, { Component } from "react";
import Img from "gatsby-image";
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'

import VideoCard from '../components/VideoCard/VideoCard'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
})

class Frontpage extends Component {

  render() {
    let { data } = this.props;
    const { classes } = this.props
    const {
      videos,
    } = data;

    const loop = videos.edges.map(video => <VideoCard video={video} />)

    return (
      <div className="Frontpage pt2">
        <div className="Cards">
          { loop }        
        </div>
      </div>
    );
  }
};

export const query = graphql`
  query IndexQuery {
    videos: allVideosJson(
      sort: {fields: [date], order: DESC}, 
      limit: 3
    ) {
      totalCount
      edges {
        node {
          name
          url
          video
          service
          cover_image
          length
          speaker{
            name
            website
          }
          tags
          date
          fields {
            slug
          }
        }
      }
    }
  }
`

export default withRoot(withStyles(styles)(Frontpage))