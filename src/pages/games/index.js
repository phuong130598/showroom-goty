import * as React from 'react'
import { Link,graphql } from 'gatsby'
import Layout from '../../components/layout'
import {title,imageCSS,navLink} from "./games.module.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const GamesPage = ({data: {allWpGame: {edges}}}) =>
{
    return (
        <Layout title="Games">
            <h2>All the GOTY winners</h2>
            {edges.map((item) => {
                const game = item.node.gameFields;
                const slug = item.node.slug;
                const image = getImage(game.picture.localFile);
                return (
                <div>
                    <Link className={navLink} to={`/games/${slug}`}>
                        <p className={title} key={item.node.id}>{game.title} ({game.year})</p>
                        <GatsbyImage className={imageCSS} image={image} alt={game.picture.altText}/>
                    </Link>
                </div>)
            })}
        </Layout>
    )
}
export const queryGames = graphql`
query {
    allWpGame {
      edges {
        node {
          id
          slug
          gameFields {
            composer
            description
            developer
            engine
            mode
            publishers
            rating
            releaseDate
            title
            year
            picture {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
          genres {
            nodes {
              name
            }
          }
        }
      }
    }
  }

`

export default GamesPage;