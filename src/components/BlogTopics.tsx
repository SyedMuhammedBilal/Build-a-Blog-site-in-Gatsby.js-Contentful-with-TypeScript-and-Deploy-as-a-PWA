import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';

import "../styles/BlogTopics.css"

const BlogTopics = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogType {
        edges {
          node {
            image {
              file {
                url
              }
            }
            title
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="wht-cont">
        <h2>Whats'up?</h2>
        <h3>Here New Blogs</h3>
      </div>
      <div className="blog-cont">
        {data.allContentfulBlogType.edges.map((edge: any) => {
          return (
            <div className="blog-box">
              <div className="blog-content">
                <img src={edge.node.image.file.url} />
                <h4>{edge.node.title} </h4>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default BlogTopics