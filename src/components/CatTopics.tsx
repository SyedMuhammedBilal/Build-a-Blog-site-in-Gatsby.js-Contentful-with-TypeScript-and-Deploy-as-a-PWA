import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import '../styles/CatTopics.css'

const CatTopics = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulCtgBox {
        edges {
          node {
            image {
              file {
                url
              }
            }
            text
          }
        }
      }
    }
  `)

  return (
    <div className="cards-list1">
  
      {data.allContentfulCtgBox.edges.map((edge: any) => {
        console.log(edge)
        return (
        <div className="card1 1">
          <div className="card_image1">
            <img src={edge.node.image.file.url} />
          </div>
          <div className="card_title1 title-white1">
            <p>{edge.node.text}</p>
          </div>
          </div>
          )
      })}
    </div>  
  )
}

export default CatTopics;