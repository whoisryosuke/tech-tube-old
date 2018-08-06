/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)
const slugify = require('slugify')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators

    if (node.internal.type === `VideosJson`) {
        const slug = slugify(node.name)
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
};

/**
 *  Create slug pages for markdown files
 *  Create pages for each tag
 */
exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
          {
            allVideosJson {
              edges {
                node {
                  name
                  url
                  service
                  length
                  speaker {
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
        `).then(result => {
          /**
           * Create blog posts based on slugs
           */
          result.data.allVideosJson.edges.forEach(({ node }) => {
            // Grab random tag to do related posts
            var tag = node.tags[Math.floor(Math.random() * node.tags.length)]

            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/video-post.js`),
              context: {
                // Data passed to context is available in page queries as GraphQL variables.
                tag: tag,
                slug: node.fields.slug,
              },
            })
          })

          /**
           * Create archive pages for tags
           */
        //   let tags = []
          // Iterate through each post, putting all found tags into `tags`
        //   result.data.allVideosJson.edges.forEach(({ node }) => {
        //     if ('tags' in node.frontmatter) {
        //       tags = tags.concat(node.frontmatter.tags)
        //     }
        //   })

          // Eliminate duplicate tags
          // tags = tags.filter(function (item, i, ar) { return ar.indexOf(item) === i; });

          // Make tag pages
          // tags.forEach(tag => {
          //     let tagName = tag.replace(/\s+/g, '-').toLowerCase();
          //     createPage({
          //         path: `/tags/${tagName}/`,
          //         component: path.resolve(`./src/templates/tags.js`),
          //         context: {
          //             tag,
          //         },
          //     });
          // });

          resolve()
        })
    })
};