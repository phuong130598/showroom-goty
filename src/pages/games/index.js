import * as React from 'react'
import { Link,graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from "../../components/seo"
import {title} from "./games.module.css"

const GamesPage = ({data: {allWpGame: {edges}}}) =>
{
    return (
        <Layout>
            <Seo title="Games" />
            <h2>All the GOTY winners</h2>
            {edges.map((item) => {
                const game = item.node.gameFields;
                const slug = item.node.slug;
                return (
                <div>
                    <Link to={`/games/${slug}`}>
                        <p className={title} key={item.node.id}>{game.title} ({game.year})</p>
                        <p  key={item.node.id}>fotoke</p>
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