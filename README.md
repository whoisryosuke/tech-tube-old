# Tech Tube

## Development

Running on Gatsby v1 from scratch. Videos are contained in a JSON located in `src/database/videos.json`. Gatsby loads the files using the filesystem plugin (only the file names/locations/etc -- not actual contents), then *'transforms'* the file using the JSON plugin (to read and intepret the JSON fields into GraphQL nodes).

Gatsby creates pages from anything in the `pages` directory. It's also directed (in `gatsby-node.js`) to loop through each video and creates static pages using the `templates/video-post.js` component as the basis.

## Getting Started

`npm install`

### Start server

`npm run develop`

## Todo

### High Priority

* Style website
* * Branding / Logo
* * Single video page
* * Frontpage (Featured video + table view that expands with video + more info)
* * Tags archive
* Install pagination plugin
* Create component for determining video embed code (<Video video={video.node} /> -- uses a switch statement based off `service`)
* Fill up JSON with videos
* Single videos should be located at `/video/<slug-name>`
* Add tag page generation in `gatsby-node`

### Low Priority

* Create script to generate JSON info snippet from YouTube URL (grabs title, URL, cover image)
* PWA Status / App Manifest + Icons
* Offline
* Sitemap
* RSS Feed
* Create JS script to convert JSON to sorted Markdown tables for README.
* Sort by video length
* Quick filtering/sorting of archive