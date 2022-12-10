import React, { useState } from 'react';
import { Link,graphql } from 'gatsby'
import Layout from '../../components/layout'
import {title,navLink,gamesBody,gamesContent,gamesCard} from "./games.module.css"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 

const GamesPage = ({data: {allWpGame: {edges}}}) =>
{
  const [search,setSearch] = useState("")
  
    return (
        <Layout title="Games">
          <div className={gamesBody}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <h2>The GOTY award winners</h2>
            </div>
            <div className={gamesContent}>
              {edges.sort((a,b) => b.node.gameFields.year - a.node.gameFields.year ).map((item) => {
                  const game = item.node.gameFields;
                  const slug = item.node.slug;
                  const genres = item.node.genres.nodes;
                  const image = getImage(game.picture.localFile);
                  return (
                  <div className={gamesCard}>
                      <Link className={navLink} to={`/games/${slug}`}>
                          <p className={title} key={item.node.id}>{game.title} ({game.year})</p>
                          <GatsbyImage  image={image} alt={game.picture.altText}/>
                          <div style={{display:"flex",flexDirection:"row", justifyContent:"center",alignItems:'center'}}>
                            <img style={{height:"25px",}} src="/star.png"/>
                            {/* star icon:https://www.vectorstock.com/royalty-free-vector/star-icon-isolated-on-background-modern-simple-sp-vector-21073177 */}
                            <p style={{}}>{game.rating}</p>
                          </div>
                          <p><span style={{fontWeight:"bold"}}>Genres: </span>
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
            </div>
          </div>
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
                  gatsbyImageData(placeholder: BLURRED, width: 300,height:375)
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