import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { navLinkBack,gamesBody,gameRating,gameRatingText,gameContent,gameChild} from "./games.module.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 


const GamePage = ({data: {wpGame: {gameFields: game,genres:genresList},wpMediaItem}}) =>
{
    const genres = genresList.nodes;
    const image = getImage(game.picture.localFile);
    const star = getImage(wpMediaItem.localFile);
    return (
        <div>
            <Layout title={game.title}>
                <div  className={gamesBody}>
                    <h1 style={{marginBottom:"10px"}}>{game.title} ({game.year})</h1>
                    <div className={gameContent}>
                        <GatsbyImage image={image} alt={game.picture.altText}/>
                        <div className={gameChild}>
                            <div className={gameRating}>
                                <GatsbyImage image={star} alt={star.altText}/>
                                <div className={gameRatingText}>{game.rating}</div>
                            </div>
                            <div dangerouslySetInnerHTML={{__html: game.description}} />
                        </div>
                    </div>
                    <table>
                        <tr>
                            <td>Developer:</td>
                            <td>{game.developer}</td>
                        </tr>
                        <tr>
                            <td>Publisher(s):</td>
                            <td>{game.publishers}</td>
                        </tr>
                        <tr>
                            <td>Composer(s):</td>
                            <td>{game.composer}</td>
                        </tr>
                        <tr>
                            <td>Engine:</td>
                            <td>{game.engine}</td>
                        </tr>
                        <tr>
                            <td>Release Date:</td>
                            <td>{game.releaseDate}</td>
                        </tr>
                        <tr>
                            <td rowSpan={genres.count}>Genres:</td>
                            {genres.map((genre) => <tr>{genre.name}</tr>)}
                        </tr>
                        <tr>
                            <td>Mode:</td>
                            <td>{game.mode}</td>
                        </tr>
                    </table>
                    <Link to="/games" className={navLinkBack}>
                        Back
                    </Link>
                </div>
            </Layout>
        </div>
    )
}
export const gameQuery = graphql`
  query ($id: String) {
    wpMediaItem(title: {eq: "star"}) {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED,height:100)
          }
        }
      }
    wpGame(id: {eq: $id}) {
        gameFields {
            year
            composer
            description
            developer
            engine
            fieldGroupName
            mode
            publishers
            rating
            title
            releaseDate
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
`
export default GamePage;