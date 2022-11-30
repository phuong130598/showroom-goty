import * as React from 'react'
import { Link,graphql } from 'gatsby'
import Layout from '../../components/layout'
import {title,navLink} from "./games.module.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const GamesPage = ({data: {allWpGame: {edges}}}) =>
{
    return (
        <Layout title="Games">
            <h2>The GOTY award winners</h2>

            {edges.sort((a,b) => a.node.gameFields.year - b.node.gameFields.year ).map((item) => {
                const game = item.node.gameFields;
                const slug = item.node.slug;
                const genres = item.node.genres.nodes;
                const image = getImage(game.picture.localFile);
                return (
                <div>
                    <Link className={navLink} to={`/games/${slug}`}>
                        <p className={title} key={item.node.id}>{game.title} ({game.year})</p>
                        <GatsbyImage  image={image} alt={game.picture.altText}/>
                        <p>{game.rating}</p>
                        <p>
                          {genres.map((genre,i,row) =>
                            {
                              if(i+1 === row.length)
                              {
                                return (genre.name)
                              }
                              else
                              {
                                return (`${genre.name}, `)
                              }
                            }
                          )}
                        </p>
                    </Link>
                </div>)
            })}
        </Layout>
    )
}
export const gamesQuery = graphql`
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
                  gatsbyImageData(placeholder: BLURRED, width: 300)
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