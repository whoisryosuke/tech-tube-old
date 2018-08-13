import React, { Component } from "react";
import PropTypes from 'prop-types';
import Link from "gatsby-link";
import Img from "gatsby-image";
import kebabCase from 'lodash/kebabCase'
import nicetime from '../helpers/nicetime';
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import VideoEmbed from '../components/VideoEmbed/VideoEmbed'
import VideoTime from '../components/VideoTime/VideoTime'
import Tags from '../components/Tags/Tags'
import Playlist from '../components/Playlist/Playlist'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
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
    content: {
        padding: theme.spacing.unit * 2
    }
})

class VideoPost extends Component {

    render() {

        const { classes } = this.props;
        const { video, playlist } = this.props.data;
        const currentDate = new Date();

        const tags = video.tags.map((tag) => (
            <li key={tag}><Link to={'/tags/' + kebabCase(tag)}>#{tag}</Link></li>
        ));

        const embed = <VideoEmbed video={video.video} service={video.service} />

        let postDate = new Date(video.date);
        return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    { embed }
                </Grid>
                <Grid item sm={12} md={8}>
                    <div className={classes.content}>
                        <Typography variant="subheading" gutterBottom>
                            {video.speaker.name}
                        </Typography>
                        <Typography variant="headline" gutterBottom>
                            {video.name}
                        </Typography>
                        
                        {video.description.map((paragraph) => (
                            <Typography variant="body1" gutterBottom>
                                { paragraph }
                            </Typography>
                        ))}
                        <Tags tags={video.tags} />
                    </div>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Playlist playlist={playlist} />
                </Grid>
            </Grid>
        </div>
        );
    }
};

VideoPost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export const query = graphql`
  query VideoPostQuery($slug: String!) {
    video: videosJson(fields: { slug: { eq: $slug } }) {
        name
        url
        video
        service
        cover_image
        description
        length
        speaker {
            name
            website
        }
        tags
        date
    },
    playlist: allVideosJson(
      sort: {fields: [date], order: DESC}, 
      limit: 6
    ) {
      totalCount
      edges {
        node {
          name
          cover_image
          length
          speaker{
            name
            website
          }
          date
          fields {
            slug
          }
        }
      }
    }
  },
`

export default withStyles(styles)(VideoPost)