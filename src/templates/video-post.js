import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import nicetime from '../helpers/nicetime';

import kebabCase from "lodash/kebabCase";

export default class BlogPost extends Component {

    render() {
        const skip = false;
        const video = this.props.data.video;
        const currentDate = new Date();

        const tags = video.tags.map((tag) => (
            <li key={tag}><Link to={'/tags/' + kebabCase(tag)}>#{tag}</Link></li>
        ));

        let postDate = new Date(video.date);

        return (
            <div className="Blog">
                { video.name }
                { video.url }
            </div>
        );
    }
};

export const query = graphql`
  query VideoPostQuery($slug: String!) {
    video: videosJson(fields: { slug: { eq: $slug } }) {
        name
        url
        video
        service
        cover_image
        length
        speaker {
            name
            website
        }
        tags
        date
    }
  }
`;