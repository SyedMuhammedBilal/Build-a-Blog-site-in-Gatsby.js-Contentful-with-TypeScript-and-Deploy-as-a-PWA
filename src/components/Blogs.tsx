import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import "../styles/Blogs.css"

const Blogs = () => {

  const data = useStaticQuery(graphql`
    query{
      allContentfulBlog(
        sort:{
          fields: date,
          order: ASC
        }
      ) {
        edges {
          node {
            date
            main
            subName
            paragraph {
              paragraph
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="h-cont">
        <h2>Popular Content!</h2>
      </div>
      {data.allContentfulBlog.edges.map((edge: any) => {
        return (
            <div className="blogs-cont">
              <div className="blogs-box">
              <h2>{edge.node.subName}</h2>
              <p>{edge.node.paragraph.paragraph}</p>
              <h5>{edge.node.date} 2020 </h5>
              </div>
            </div>
          )
      })}
      <div className="h-cont">
        <h2>Explore best selling Blogs</h2>
        <h2>Explore Now!</h2>
      </div>
    </>
  )
}

export default Blogs;