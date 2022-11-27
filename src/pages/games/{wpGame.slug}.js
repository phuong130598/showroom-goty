import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from "../../components/seo"

const GamePage = ({data: {wpGame: {gameFields: game,genres:genresList}}}) =>
{
    const genres = genresList.nodes
    return (
        <div>
            <Layout>
                <Seo title={game.title} />
                <div>
                    <h1>{game.title} ({game.year})</h1>
                    <p>fotoke</p>
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
                </div>
            </Layout>
        </div>
    )
}
export const gameQuery = graphql`
  query ($id: String) {
    wpGame(id: {eq: $id}) {
        gameFields {
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
            year
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