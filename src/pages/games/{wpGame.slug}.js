import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import { navLinkBack} from "./games.module.css"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 


const GamePage = ({data: {wpGame: {gameFields: game,genres:genresList}}}) =>
{
    const genres = genresList.nodes;
    const image = getImage(game.picture.localFile);
    return (
        <div>
            <Layout title={game.title}>
                <div>
                    <h1>{game.title} ({game.year})</h1>
                    <GatsbyImage image={image} alt={game.picture.altText}/>
                    <div dangerouslySetInnerHTML={{__html: game.description}} />
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
                            <td>Rating:</td>
                            <td>{game.rating}</td>
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
                        Go back
                    </Link>
                </div>
            </Layout>
        </div>
    )
}
export const gameQuery = graphql`
  query ($id: String) {
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
`
export default GamePage;