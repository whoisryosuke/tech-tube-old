import React, { Component } from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

export default class Frontpage extends Component {

  render() {
    let { data } = this.props;

    const {
      videos,
    } = data;

    const loop = videos.edges.map(video => <div className="Card">
        <figure className="cover">
          <img src={video.node.cover_image} />
        </figure>
        <div className="content">
          <Link to={video.node.fields.slug} className="header">
            {video.node.name}
          </Link>
          <aside className="meta">
            <span className="length">
              {/* Minutes = length / 60 : Seconds = Length - (Minutes * 60) */}
              {/* https://stackoverflow.com/questions/3733227/javascript-seconds-to-minutes-and-seconds */}
              {/* https://stackoverflow.com/questions/8513032/less-than-10-add-0-to-number */}
              {Math.round(Number(video.node.length) / 60)}:{Number(video.node.length) - Math.round(Number(video.node.length) / 60) * 60}
            </span>
            <span className="date">{video.node.date}</span>
          </aside>
          <p className="speaker">{video.node.speaker.name}</p>
          <nav className="Tags">
            {video.node.tags.map(tag => (
              <Link to={`tag/${tag}`} className="tag">
                {tag}
              </Link>
            ))}
          </nav>
        </div>
      </div>)

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