import * as React from "react"
import { Link,graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from 'gatsby-background-image'
import Layout from "../components/layout"
import {homeContent,homeFeatured,homeTitleDescription,title,description,games,gameImg,img} from "./Pages.module.css"

const IndexPage = ({data:{wpPage:{homeFields}}}) => {
  const image = getImage(homeFields.picture.localFile);
  const bgImage = convertToBgImage(image)
  const featuredGames = homeFields.featuredGames;
  return (
    <Layout title="Home">
      <div>
        <BackgroundImage Tag="section" {...bgImage} >
          <div className={homeContent} >
            <div className={homeTitleDescription}>
              <h1 className={title}>{homeFields.title}</h1>
              <p className={description}>{homeFields.description}</p>
            </div>
          </div>
        </BackgroundImage>
        <div className={homeFeatured}>
          <h1 style={{margin:"25px"}}>Last 3 winners:</h1>
          <div className={games}>
            {featuredGames.map((game) =>
            <div className={gameImg}>
              <Link  to={`/games/${game.slug}`}>
                <GatsbyImage className={img} image={getImage(game.gameFields.picture.localFile)} alt={game.gameFields.picture.altText} />
                {/*link pic: https://www.deepsilver.com/wp-content/uploads/sites/3/2019/11/TGA2019_Superhero_Masters.jpg */}
              </Link>
            </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export const homeQuery = graphql`
  query {
    wpPage(slug: {eq: "home-page"}) {
      homeFields {
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        featuredGames {
          ... on WpGame {
            id
            slug
            gameFields {
              picture {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, width: 300,height:375)
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPage;
